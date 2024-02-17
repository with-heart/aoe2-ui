import * as S from '@effect/schema/Schema'

export const HotKey = S.struct({
  Group: S.string,
  Key: S.string,
})
