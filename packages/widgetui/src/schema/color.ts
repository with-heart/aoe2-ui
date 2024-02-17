import * as S from '@effect/schema/Schema'

export const ColorNumber = S.number.pipe(
  S.greaterThanOrEqualTo(0, {
    message: () => 'a number greater than or equal to 0',
  }),
  S.lessThanOrEqualTo(255, {
    message: () => 'a number less than or equal to 255',
  }),
)
export type ColorNumber = S.Schema.To<typeof ColorNumber>

export const Color = S.struct({
  r: ColorNumber,
  g: ColorNumber,
  b: ColorNumber,
  a: ColorNumber,
})
export type Color = S.Schema.To<typeof Color>
