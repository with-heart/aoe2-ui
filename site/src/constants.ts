import { join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

export const APP_MATERIALS_URL = pathToURL('src/app/materials.json')

export const PUBLIC_URL = pathToURL('public')

export const TEXTURES_URL = pathToFileURL(join(PUBLIC_URL.pathname, 'textures'))

function pathToURL(path: string) {
  const dir = resolve(__dirname, '..')
  return pathToFileURL(join(dir, path))
}
