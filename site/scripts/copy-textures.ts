import { TEXTURES_URL } from '@/constants'
import { cp, readdir, rm } from 'node:fs/promises'
import { join } from 'node:path'

console.group('Copying widgetui/textures to site/public/textures')

const WIDGETUI_TEXTURES_URL = Bun.pathToFileURL(
  join(
    await Bun.resolve('widgetui/package.json', process.cwd()),
    '../textures',
  ),
)

console.log('Removing public/textures')
await rm(TEXTURES_URL, { force: true, recursive: true })

console.log('Copying textures to public/textures')
await cp(WIDGETUI_TEXTURES_URL, TEXTURES_URL, { recursive: true })

const files = await readdir(TEXTURES_URL, { recursive: true })
console.log(`Copied ${files.length} texture files`)

console.groupEnd()
