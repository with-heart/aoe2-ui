import type { RGBA } from './material'

export interface HotKey {
  Group: string
  Key: string
}

export interface IconValue {
  TechId: number
  CivIds?: number[]
  ExcludeCivs?: boolean
  UnitId?: number
  TeamBonus?: boolean
}

/* materials.json */

export type Cache = 'precached' | 'none'

export interface Materials {
  AtlasTextures: { AtlasDef: AtlasDef }[]
  GlobalTextures: { TextureDef: TextureDef }[]
  Materials: { MaterialDef: MaterialDef }[]
}

export interface Texture {
  RefName: string
  FileName: string
  imageTLX: string
  imageTLY: string
  imageBRX: string
  imageBRY: string
}

export interface AtlasDef {
  Name: string
  MaxWidth: number
  MaxHeight: number
  Cached: Cache
  DefaultSource: string
  HDSource: string
  SDSource?: string
  UHDSource: string
  Textures: Texture[]
}

export interface TextureDef {
  Name: string
  FileName: string
  Cached: Cache
}

export type Blend = 'AlphaPlayerColor' | 'InverseAlpha' | 'None' | 'Null'

export interface MaterialDefBase {
  Type: 'Atlas' | 'Color' | 'Texture'
  Name: string
  Blend: Blend
}

export interface AtlasMaterialDef extends MaterialDefBase {
  Type: 'Atlas'
  AtlasRef: string
  TextureRef: string
}

export interface ColorMaterialDef extends MaterialDefBase {
  Type: 'Color'
  Color: RGBA
}

export interface TextureMaterialDef extends MaterialDefBase {
  Type: 'Texture'
  TextureRef: string
}

export type MaterialDef =
  | AtlasMaterialDef
  | ColorMaterialDef
  | TextureMaterialDef
