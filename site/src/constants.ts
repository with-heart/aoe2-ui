export const APP_MATERIALS_URL = Bun.resolveSync(
  '../src/app/materials.json',
  import.meta.dir,
)
export const PUBLIC_URL = new URL('../public/', import.meta.url)
export const TEXTURES_URL = new URL('textures/', PUBLIC_URL)
