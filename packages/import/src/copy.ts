import type { Dirent } from 'fs'
import * as fs from 'node:fs/promises'
import * as path from 'node:path'
import { Materials, Panel } from 'widgetui/schema'
import {
  IGNORED_DIRECTORIES,
  MATERIALS_FILE,
  PANEL_FILES,
  SITE_TEXTURES_URL,
  WIDGETUI_JSON_URL,
} from './constants'
import { decodeFile } from './fs'
import { relativeFromRoot } from './path'

export async function copyFiles(dir: string): Promise<void> {
  console.info('Decoding files...')

  type Panels = Record<string, Panel>
  const panels: Panels = (
    await Promise.all(
      PANEL_FILES.map(async (file) => {
        const decoded = await decodeFile(path.join(dir, file), Panel)
        return [file, decoded] as const
      }),
    )
  ).reduce((acc, [file, panel]) => ({ ...acc, [file]: panel }), {})

  const materials = await decodeFile(path.join(dir, MATERIALS_FILE), Materials)

  console.group(`Writing files to ${relativeFromRoot(WIDGETUI_JSON_URL)}...`)
  await fs.rm(WIDGETUI_JSON_URL, { recursive: true })
  await fs.mkdir(WIDGETUI_JSON_URL)

  for (const [file, panel] of [
    ...Object.entries(panels),
    [MATERIALS_FILE, materials],
  ]) {
    await fs.writeFile(
      new URL(file, WIDGETUI_JSON_URL),
      JSON.stringify(panel, null, 2),
      'utf-8',
    )
  }
  console.groupEnd()
}

export async function copyTextures(dir: string): Promise<void> {
  const texturesDir = path.join(dir, 'textures')

  const filesAndDirectories = await fs.readdir(texturesDir, {
    recursive: true,
    withFileTypes: true,
  })

  const files = filesAndDirectories.filter(
    (f) =>
      f.isFile() &&
      path.extname(f.name) === '.png' &&
      !IGNORED_DIRECTORIES.some((d) => f.name.startsWith(d)),
  )

  await fs.rm(SITE_TEXTURES_URL, { recursive: true })
  await Promise.all(
    files.map((f) => {
      const destination = new URL(f.name, SITE_TEXTURES_URL)
      return Bun.write(
        destination.pathname,
        Bun.file(path.join(texturesDir, f.name)),
      )
    }),
  )

  console.info(
    `Copied ${files.length} files (${formatBytes(await toSize(texturesDir, files))})`,
  )
}

async function toSize(dir: string, dirent: Dirent[]): Promise<number> {
  const stats = await Promise.all(
    dirent
      .filter((d) => d.isFile())
      .map(async (f) => fs.stat(path.join(dir, f.name))),
  )
  const sizes = stats.map((s) => s.size)
  const total = sizes.reduce((acc, size) => acc + size, 0)
  return total
}

function formatBytes(bytes: number, decimals = 2) {
  if (bytes === 0) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['B', 'KB', 'MB', 'GB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}
