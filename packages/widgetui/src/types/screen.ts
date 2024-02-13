export type Alignment =
  | 'TopLeft'
  | 'TopCentre'
  | 'TopRight'
  | 'CentreLeft'
  | 'CentreCentre'
  | 'CentreRight'
  | 'BottomLeft'
  | 'BottomCentre'
  | 'BottomRight'

export interface Size {
  width: number
  height: number
}

export interface Position {
  xorigin: number
  yorigin: number
}

export interface Box extends Size, Position {}

export interface LineBox extends Box {
  drawbox: boolean
  linespacer: number
  linesize: number
}

export interface ListBox extends LineBox {
  gridstep: number
  edgespacer: number
  columnwidths: { width: number }[]
}

export interface SurroundBox extends Box {
  gridstep: number
  drawbox: boolean
  alignment: Alignment
}

export interface TextBox extends LineBox {
  edgespace?: number
  edgespacer?: number
  multiline?: boolean
  autoscroll?: boolean
}

export interface ValueBox extends Box {
  widthleft: number
  widthright: number
  edgespacer: number
}

export interface Viewport extends Size, Position {
  alignment: Alignment
  FitChildren?: boolean
}

export interface Offset {
  xoffset: number
  yoffset: number
}

export interface Image extends Viewport {
  noclip?: boolean
}
