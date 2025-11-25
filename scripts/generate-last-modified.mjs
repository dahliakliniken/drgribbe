// scripts/generate-last-modified.mjs
import { execSync } from 'node:child_process'
import { readdirSync, statSync, writeFileSync } from 'node:fs'
import { join, relative, sep } from 'node:path'

const APP_DIR = join(process.cwd(), 'src', 'app')
const OUTPUT_FILE = join(process.cwd(), 'src', 'lastModified.json')

function walk(dir) {
  const entries = readdirSync(dir, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...walk(fullPath))
    } else if (entry.isFile() && entry.name === 'page.tsx') {
      files.push(fullPath)
    }
  }

  return files
}

// Convert a file path to a route path
function filePathToRoute(filePath) {
  const rel = relative(APP_DIR, filePath) // e.g. "bröstforstoring/page.tsx"
  const parts = rel.split(sep)

  // remove "page.tsx"
  parts.pop()

  // root page.tsx
  if (parts.length === 0) return '/'

  // handle nested routes
  const withoutRouteGroups = parts.filter(
    (p) => !p.startsWith('(') && !p.endsWith(')')
  )

  return '/' + withoutRouteGroups.join('/')
}

function getLastCommitDate(filePath) {
  try {
    const output = execSync(`git log -1 --format=%cI -- "${filePath}"`, {
      encoding: 'utf8'
    }).trim()
    return output || null
  } catch (e) {
    return null
  }
}

function main() {
  const pageFiles = walk(APP_DIR)
  const map = {}

  for (const file of pageFiles) {
    const route = filePathToRoute(file)
    const date = getLastCommitDate(file)

    if (!date) continue
    map[route] = date
  }

  writeFileSync(OUTPUT_FILE, JSON.stringify(map, null, 2), 'utf8')
  console.log(`Wrote last modified map to ${OUTPUT_FILE}`)
}

main()
