import * as S from '@effect/schema/Schema'

export const Alignment = S.literal(
  'TopLeft',
  'TopCentre',
  'TopRight',
  'CentreLeft',
  'CentreCentre',
  'CentreRight',
  'BottomLeft',
  'BottomCentre',
  'BottomRight',
)

export type Alignment = S.Schema.To<typeof Alignment>

export const Position = S.struct({
  xorigin: S.number,
  yorigin: S.number,
})

export type Position = S.Schema.To<typeof Position>

export const Offset = S.struct({
  xoffset: S.number,
  yoffset: S.number,
})

export type Offset = S.Schema.To<typeof Offset>

export const Size = S.struct({
  width: S.number,
  height: S.number,
})

export type Size = S.Schema.To<typeof Size>

export const Anchor = Position.pipe(
  S.extend(
    S.struct({
      alignment: S.optional(Alignment, { exact: true }),
    }),
  ),
)

export type Anchor = S.Schema.To<typeof Anchor>

export const Box = S.extend(Size, Position)

export type Box = S.Schema.To<typeof Box>

export const ViewPort = S.extend(
  Box,
  S.struct({
    alignment: Alignment,
    FitChildren: S.optional(S.boolean, { exact: true }),
  }),
)

export type ViewPort = S.Schema.To<typeof ViewPort>

export const Image = S.extend(
  ViewPort,
  S.struct({
    noclip: S.optional(S.boolean, { exact: true }),
  }),
)

export type Image = S.Schema.To<typeof Image>

export const LineBox = S.extend(
  Box,
  S.struct({
    drawbox: S.boolean,
    linespacer: S.number,
    linesize: S.number,
  }),
)

export type LineBox = S.Schema.To<typeof LineBox>

export const ListBox = S.extend(
  LineBox,
  S.struct({
    gridstep: S.number,
    edgespacer: S.number,
    columnwidths: S.array(S.struct({ width: S.number })),
  }),
)

export type ListBox = S.Schema.To<typeof ListBox>

export const SurroundBox = S.extend(
  Box,
  S.struct({
    gridstep: S.number,
    drawbox: S.boolean,
    alignment: Alignment,
  }),
)

export type SurroundBox = S.Schema.To<typeof SurroundBox>

export const TextBox = S.extend(
  LineBox,
  S.struct({
    edgespace: S.optional(S.number, { exact: true }),
    edgespacer: S.optional(S.number, { exact: true }),
    multiline: S.optional(S.boolean, { exact: true }),
    autoscroll: S.optional(S.boolean, { exact: true }),
  }),
)

export type TextBox = S.Schema.To<typeof TextBox>

export const ValueBox = S.extend(
  Box,
  S.struct({
    widthleft: S.number,
    widthright: S.number,
    edgespacer: S.number,
  }),
)

export type ValueBox = S.Schema.To<typeof ValueBox>
