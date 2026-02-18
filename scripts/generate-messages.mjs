import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { basename, join, relative, sep } from 'node:path'

const MESSAGES_DIR = join(process.cwd(), 'src', 'messages')
const GENERATED_DIR = join(MESSAGES_DIR, 'generated')

function isPlainObject(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function deepMerge(target, source) {
  const output = { ...target }

  for (const [key, sourceValue] of Object.entries(source)) {
    const targetValue = output[key]

    if (isPlainObject(targetValue) && isPlainObject(sourceValue)) {
      output[key] = deepMerge(targetValue, sourceValue)
      continue
    }

    if (targetValue !== undefined && isPlainObject(targetValue) !== isPlainObject(sourceValue)) {
      throw new Error(
        `Type conflict while merging key "${key}". Existing and incoming values have different shapes.`
      )
    }

    output[key] = sourceValue
  }

  return output
}

function walkJsonFiles(dir) {
  const entries = readdirSync(dir, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const fullPath = join(dir, entry.name)

    if (entry.isDirectory()) {
      if (entry.name === 'generated') continue
      files.push(...walkJsonFiles(fullPath))
      continue
    }

    if (entry.isFile() && entry.name.endsWith('.json')) {
      files.push(fullPath)
    }
  }

  return files
}

function setAtNamespace(root, namespaceParts, value) {
  if (namespaceParts.length === 0) {
    return deepMerge(root, value)
  }

  const output = { ...root }
  let cursor = output

  for (let i = 0; i < namespaceParts.length; i += 1) {
    const part = namespaceParts[i]
    const isLeaf = i === namespaceParts.length - 1

    if (isLeaf) {
      const existing = cursor[part]
      cursor[part] = isPlainObject(existing) ? deepMerge(existing, value) : value
      continue
    }

    if (!isPlainObject(cursor[part])) {
      cursor[part] = {}
    } else {
      cursor[part] = { ...cursor[part] }
    }

    cursor = cursor[part]
  }

  return output
}

function getNamespaceParts(filePath) {
  const fileDir = relative(MESSAGES_DIR, filePath).split(sep).slice(0, -1)
  if (fileDir.length === 1 && fileDir[0] === '.') return []
  return fileDir.filter(Boolean)
}

function getLocaleFromFile(filePath) {
  return basename(filePath, '.json')
}

function main() {
  const jsonFiles = walkJsonFiles(MESSAGES_DIR).sort((a, b) => a.localeCompare(b))
  const localeBuckets = {}

  for (const filePath of jsonFiles) {
    const locale = getLocaleFromFile(filePath)
    const namespaceParts = getNamespaceParts(filePath)
    const parsed = JSON.parse(readFileSync(filePath, 'utf8'))

    if (!isPlainObject(parsed)) {
      throw new Error(`Message file must contain an object at top level: ${filePath}`)
    }

    const current = localeBuckets[locale] || {}
    localeBuckets[locale] = setAtNamespace(current, namespaceParts, parsed)
  }

  mkdirSync(GENERATED_DIR, { recursive: true })

  for (const [locale, messages] of Object.entries(localeBuckets)) {
    const outputFile = join(GENERATED_DIR, `${locale}.json`)
    writeFileSync(outputFile, `${JSON.stringify(messages, null, 2)}\n`, 'utf8')
    console.log(`Generated messages: ${relative(process.cwd(), outputFile)}`)
  }
}

main()
