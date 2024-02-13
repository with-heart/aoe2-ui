export interface RGBA {
  r: number
  g: number
  b: number
  a: number
}

export interface TextureMaterial {
  Material: string
  Color?: RGBA
  TextColor?: RGBA
}

export type FontStyle = 'Normal' | 'Outlined'

export interface Font {
  FontIndex: number
  PointSize: number
  Style: FontStyle
  AllowGameModeTextColorOverride?: boolean
  TextColor?: RGBA
  TextOutlineColor?: RGBA
  TextOutlineWidth?: number
}

export interface FontMaterial {
  Font: Font
}

export type Material = TextureMaterial | FontMaterial

export type UserStates<T extends Material> = {
  UserStates: number
} & Record<`UserState${number}`, T>

export type StatusStates<T extends Material> = Record<`State${string}`, T>

export type StateMaterials<T extends Material> = UserStates<T> | StatusStates<T>
