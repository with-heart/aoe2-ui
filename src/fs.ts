import type { PathLike } from 'fs'
import * as fs from 'fs/promises'
import path from 'path'
import { Materials } from './types/misc'
import { Panel } from './types/panel'
import {
  APP_MATERIALS_URL,
  GAME_MATERIALS_URL,
  WIDGETUI_URL,
} from './constants'

export async function readJSONFile<T>(path: PathLike): Promise<T> {
  const data = await fs.readFile(path, 'utf-8')
  return JSON.parse(data) as T
}

export async function writeJSONFile(path: PathLike, data: unknown) {
  return fs.writeFile(path, JSON.stringify(data), 'utf-8')
}

export async function readJSONFiles<T>(
  dir: string,
  filter: (fileName: string) => boolean = () => true,
): Promise<T[]> {
  const files = (await fs.readdir(dir)).filter(
    (file) => file.endsWith('.json') && filter(file),
  )
  const parsedFiles = await Promise.all(
    files.map((file) => readJSONFile<T>(path.join(dir, file))),
  )
  return parsedFiles
}

export async function loadGamePanels(): Promise<Panel[]> {
  return readJSONFiles<Panel>(WIDGETUI_URL.pathname, (fileName) =>
    fileName.toLowerCase().endsWith('panel.json'),
  )
}

export async function loadGameMaterials(): Promise<Materials> {
  return readJSONFile<Materials>(GAME_MATERIALS_URL)
}

export async function loadAppMaterials(): Promise<unknown> {
  return readJSONFile<unknown>(APP_MATERIALS_URL)
}

export async function writeAppMaterials(data: unknown) {
  return writeJSONFile(APP_MATERIALS_URL, data)
}
