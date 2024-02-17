export interface Texture {
  type: 'texture'
  filename: string
  width: number
  height: number
}

export interface Color {
  type: 'color'
  color: string
}

export type Materials = Record<string, Texture | Color>
