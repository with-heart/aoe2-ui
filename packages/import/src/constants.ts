export const ROOT_URL = new URL('../../../', import.meta.url)

export const WIDGETUI_URL = new URL('../../widgetui/', import.meta.url)
export const WIDGETUI_JSON_URL = new URL('json/', WIDGETUI_URL)

export const SITE_URL = new URL('../../../site/', import.meta.url)
export const SITE_TEXTURES_URL = new URL('public/textures/', SITE_URL)

export const COLORS_JSON_URL = new URL('json/colors.json', SITE_URL)
export const TEXTURES_JSON_URL = new URL('json/textures.json', SITE_URL)

export const MATERIALS_FILE = 'materials.json'
export const PANEL_FILES = [
  'blankbottompanel.json',
  'blanktoppanel.json',
  'commandpanel.json',
  'GameMsgPanel.json',
  'GameNotificationPanel.json',
  'mappanel.json',
  'menupanel.json',
  'notificationpanel.json',
  'resourcepanel.json',
  'scorepanel.json',
  'technologyprogresspanel.json',
  'worldtimerpanel.json',
]

export const IGNORED_DIRECTORIES = [
  'backgrounds',
  'campaign',
  'gamemode',
  'menu/usericons',
]