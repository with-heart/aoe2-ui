import { pathToFileURL } from 'url'
import path from 'path'

export const APP_MATERIALS_URL = pathToFileURL('src/app/materials.json')

export const WIDGETUI_URL = pathToFileURL('src/widgetui')

export const GAME_MATERIALS_URL = pathToFileURL(
  path.join(WIDGETUI_URL.pathname, 'materials.json'),
)

export const PUBLIC_URL = pathToFileURL('public')

export const TEXTURES_URL = pathToFileURL(
  path.join(PUBLIC_URL.pathname, 'textures'),
)
