import * as S from '@effect/schema/Schema'
import { expect, test } from 'bun:test'
import { many, one } from '../test-utils'
import { Color } from './color'
import {
  AtlasDef,
  AtlasMaterialDef,
  AtlasTexture,
  Blend,
  Cached,
  ColorMaterialDef,
  MaterialDef,
  Materials,
  TextureDef,
  TextureMaterialDef,
} from './materials'

test('Cached', () => {
  expect(S.is(Cached)('precached')).toBeTrue()
  expect(S.is(Cached)('none')).toBeTrue()
  expect(S.is(Cached)('invalid')).toBeFalse()
})

test('AtlasTexture', () => {
  const valid: AtlasTexture = {
    RefName: 'ImagesFile',
    FileName: '/images/file.png',
    imageTLX: '0.01',
    imageTLY: '0.02',
    imageBRX: '1.01',
    imageBRY: '1.02',
  }

  expect(S.is(AtlasTexture)(valid)).toBeTrue()
  expect(
    S.is(AtlasTexture)({
      ...valid,
      imageTLX: 0.01,
    }),
  ).toBeFalse()
})

test('AtlasDef', () => {
  const valid = {
    AtlasDef: {
      Name: 'AtlasName',
      MaxWidth: 1024,
      MaxHeight: 1024,
      Cached: 'none',
      DefaultSource: '/images/default.png',
      HDSource: '/images/hd.png',
      SDSource: '/images/sd.png',
      UHDSource: '/images/uhd.png',
      Textures: many(AtlasTexture),
    },
  }

  expect(S.is(AtlasDef)(valid)).toBeTrue()
  expect(
    S.is(AtlasDef)({
      AtlasDef: {
        ...valid.AtlasDef,
        Name: 1,
      },
    }),
  ).toBeFalse()
})

test('TextureDef', () => {
  const valid = {
    TextureDef: {
      Name: 'TextureName',
      FileName: '/images/file.png',
      Cached: one(Cached),
    },
  }

  expect(S.is(TextureDef)(valid)).toBeTrue()
  expect(
    S.is(TextureDef)({
      TextureDef: {},
    }),
  ).toBeFalse()
})

test('Blend', () => {
  expect(S.is(Blend)('AlphaPlayerColor')).toBeTrue()
  expect(S.is(Blend)('InverseAlpha')).toBeTrue()
  expect(S.is(Blend)('None')).toBeTrue()
  expect(S.is(Blend)('Null')).toBeTrue()
  expect(S.is(Blend)('invalid')).toBeFalse()
})

test('AtlasMaterialDef', () => {
  const valid = {
    Name: 'MaterialName',
    Blend: one(Blend),
    Type: 'Atlas',
    TextureRef: 'TextureName',
  }

  expect(S.is(AtlasMaterialDef)(valid)).toBeTrue()
  expect(S.is(AtlasMaterialDef)({ ...valid, AtlasRef: 'Ref' })).toBeTrue()
  expect(S.is(AtlasMaterialDef)({})).toBeFalse()
})

test('ColorMaterialDef', () => {
  const valid = {
    Name: 'MaterialName',
    Blend: one(Blend),
    Type: 'Color',
    Color: one(Color),
  }

  expect(S.is(ColorMaterialDef)(valid)).toBeTrue()
  expect(
    S.is(ColorMaterialDef)({
      ...valid,
      Color: undefined,
    }),
  ).toBeFalse()
})

test('TextureMaterialDef', () => {
  const valid = {
    Name: 'MaterialName',
    Blend: one(Blend),
    Type: 'Texture',
    TextureRef: 'TextureName',
  }

  expect(S.is(TextureMaterialDef)(valid)).toBeTrue()
  expect(
    S.is(TextureMaterialDef)({
      ...valid,
      TextureRef: undefined,
    }),
  ).toBeFalse()
})

test('Materials', () => {
  const valid = {
    AtlasTextures: many(AtlasDef),
    GlobalTextures: many(TextureDef),
    Materials: many(MaterialDef),
  }

  expect(S.is(Materials)(valid)).toBeTrue()
  expect(S.is(Materials)({})).toBeFalse()
})
