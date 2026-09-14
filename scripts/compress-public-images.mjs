import { existsSync, renameSync, unlinkSync } from 'node:fs'
import { join } from 'node:path'

import sharp from 'sharp'

const MAX_EDGE = 2048
const JPEG_QUALITY = 80

const JPEG_FILES = [
  'public/images/n3a9899.jpg',
  'public/images/n3a0162.jpg',
  'public/images/n3a9941.jpg',
  'public/images/n3a0187.jpg',
  'public/images/n3a0184.jpg',
  'public/images/n3a0080.jpg',
  'public/images/n3a7297.jpg',
  'public/images/n3a7179.jpg',
  'public/images/n3a7302.jpg',
  'public/images/n3a7621.jpg',
  'public/images/ansiktsmuskler.jpeg',
  'public/images/wonna-tower-img-7027.jpg',
  'public/images/n3a7270-cut.jpg'
]

const PNG_TO_JPEG = [
  'public/images/wonna-tower-img-7027.png',
  'public/images/n3a7270-cut.png'
]

function tmpPath(filePath) {
  return `${filePath}.__compress`
}

async function compressJpeg(filePath) {
  const tmp = tmpPath(filePath)
  await sharp(filePath)
    .rotate()
    .resize({
      width: MAX_EDGE,
      height: MAX_EDGE,
      fit: 'inside',
      withoutEnlargement: true
    })
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
    .toFile(tmp)
  renameSync(tmp, filePath)
}

async function convertPngToJpeg(filePath) {
  const metadata = await sharp(filePath).metadata()
  if (metadata.hasAlpha) {
    console.log(`keep PNG (has alpha): ${filePath}`)
    await sharp(filePath)
      .rotate()
      .resize({
        width: MAX_EDGE,
        height: MAX_EDGE,
        fit: 'inside',
        withoutEnlargement: true
      })
      .png({ compressionLevel: 9 })
      .toFile(tmpPath(filePath))
    renameSync(tmpPath(filePath), filePath)
    return filePath
  }

  const jpegPath = filePath.replace(/\.png$/i, '.jpg')
  await sharp(filePath)
    .rotate()
    .resize({
      width: MAX_EDGE,
      height: MAX_EDGE,
      fit: 'inside',
      withoutEnlargement: true
    })
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
    .toFile(jpegPath)
  unlinkSync(filePath)
  return jpegPath
}

const root = process.cwd()

for (const relativePath of JPEG_FILES) {
  const filePath = join(root, relativePath)
  if (!existsSync(filePath)) {
    console.log(`skip missing ${relativePath}`)
    continue
  }
  const before = await sharp(filePath).metadata()
  await compressJpeg(filePath)
  const after = await sharp(filePath).metadata()
  console.log(
    `jpeg ${relativePath}: ${before.width}x${before.height} -> ${after.width}x${after.height}`
  )
}

for (const relativePath of PNG_TO_JPEG) {
  const filePath = join(root, relativePath)
  if (!existsSync(filePath)) {
    console.log(`skip missing ${relativePath}`)
    continue
  }
  const before = await sharp(filePath).metadata()
  const result = await convertPngToJpeg(filePath)
  const after = await sharp(result).metadata()
  console.log(
    `png ${relativePath} -> ${result}: ${before.width}x${before.height} -> ${after.width}x${after.height} alpha=${before.hasAlpha}`
  )
}
