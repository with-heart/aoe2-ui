import * as S from '@effect/schema/Schema'
import materialsJSON from './json/materials.json'
import { Materials } from './schema'

export const materials = S.decodeUnknownSync(Materials)(materialsJSON)
