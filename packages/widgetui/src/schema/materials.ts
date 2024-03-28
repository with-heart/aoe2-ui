import * as S from '@effect/schema/Schema'
import { Color } from './color'

export const Cached = S.literal('precached', 'none')

export type Cached = S.Schema.To<typeof Cached>

export const AtlasTexture = S.struct({
  RefName: S.string,
  FileName: S.string,
  imageTLX: S.string,
  imageTLY: S.string,
  imageBRX: S.string,
  imageBRY: S.string,
})

export type AtlasTexture = S.Schema.To<typeof AtlasTexture>

export const AtlasDef = S.struct({
  AtlasDef: S.struct({
    Name: S.string,
    MaxWidth: S.number,
    MaxHeight: S.number,
    Cached,
    DefaultSource: S.string,
    HDSource: S.string,
    SDSource: S.optional(S.string),
    UHDSource: S.string,
    Textures: S.array(AtlasTexture),
  }),
})

export type AtlasDef = S.Schema.To<typeof AtlasDef>

export const TextureDef = S.struct({
  TextureDef: S.struct({
    Name: S.string,
    FileName: S.string,
    Cached,
  }),
})

export type TextureDef = S.Schema.To<typeof TextureDef>

export const Blend = S.literal(
  'AlphaPlayerColor',
  'InverseAlpha',
  'None',
  'Null',
)

export type Blend = S.Schema.To<typeof Blend>

export const MaterialDefBase = S.struct({
  Name: S.string,
  Blend,
})

export type MaterialDefBase = S.Schema.To<typeof MaterialDefBase>

export const AtlasMaterialDef = MaterialDefBase.pipe(
  S.extend(
    S.struct({
      Type: S.literal('Atlas'),
      AtlasRef: S.optional(S.string, { exact: true }),
      TextureRef: S.string,
    }),
  ),
)

export type AtlasMaterialDef = S.Schema.To<typeof AtlasMaterialDef>

export const isAtlasMaterialDef = S.is(AtlasMaterialDef)

export const ColorMaterialDef = MaterialDefBase.pipe(
  S.extend(
    S.struct({
      Type: S.literal('Color'),
      Color,
    }),
  ),
)

export type ColorMaterialDef = S.Schema.To<typeof ColorMaterialDef>

export const isColorMaterialDef = S.is(ColorMaterialDef)

export const TextureMaterialDef = MaterialDefBase.pipe(
  S.extend(
    S.struct({
      Type: S.literal('Texture'),
      TextureRef: S.string,
    }),
  ),
)

export type TextureMaterialDef = S.Schema.To<typeof TextureMaterialDef>

export const isTextureMaterialDef = S.is(TextureMaterialDef)

export const MaterialDef = S.struct({
  MaterialDef: S.union(AtlasMaterialDef, ColorMaterialDef, TextureMaterialDef),
})

export type MaterialDef = S.Schema.To<typeof MaterialDef>

export const Materials = S.struct({
  AtlasTextures: S.array(AtlasDef),
  GlobalTextures: S.array(TextureDef),
  Materials: S.array(MaterialDef),
})

export type Materials = S.Schema.To<typeof Materials>
