import { APP_MATERIALS_URL } from '@/constants'
import type { PathLike } from 'node:fs'
import * as fs from 'node:fs/promises'

export async function readJSONFile<T>(path: PathLike): Promise<T> {
  const data = await fs.readFile(path, 'utf-8')
  return JSON.parse(data) as T
}

export async function writeJSONFile(path: PathLike, data: unknown) {
  return fs.writeFile(path, JSON.stringify(data, null, 2), 'utf-8')
}

export async function loadAppMaterials(): Promise<unknown> {
  return readJSONFile<unknown>(APP_MATERIALS_URL)
}

export async function writeAppMaterials(data: unknown) {
  return writeJSONFile(APP_MATERIALS_URL, data)
}
