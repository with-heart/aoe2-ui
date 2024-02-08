import type {
  FontMaterial,
  Material,
  StateMaterials,
  TextureMaterial,
} from './material'
import type { HotKey, IconValue } from './misc'
import type {
  Alignment,
  Box,
  Image,
  ListBox,
  Offset,
  SurroundBox,
  TextBox,
  ValueBox,
  Viewport,
} from './screen'

export type ChildWidgets<T extends Widget> = { Widget: T }[]

export interface WidgetBase {
  Type: string
  Name?: string
  show?: boolean
  test?: number
  ZPlane?: number
  ZPlaneLocalOffset?: number
  ChildWidgets?: ChildWidgets<Widget>
  StateMaterials?: StateMaterials<Material>
}

export interface ViewportWidget extends WidgetBase {
  ViewPort: Viewport
}

export interface TextWidget extends ViewportWidget {
  Text?: string | number
  TextAnchor: Alignment
  TextOffset?: Offset
}

export type Widget =
  | AnchorWidget
  | BaseWidget
  | ButtonWidget
  | CheckBoxWidget
  | ClipAreaWidget
  | CommandButtonWidget
  | DropDownWidget
  | LabelWidget
  | ListBoxWidget
  | MapViewWidget
  | MarkUpTextBoxWidget
  | MultiColorTextBoxWidget
  | ProgressBarWidget
  | ScrollBarVerticalWidget
  | SurroundWidget
  | TechTreeButtonWidget
  | TextBoxWidget

export interface AnchorWidget extends WidgetBase {
  Type: 'Anchor'

  Anchor: {
    xorigin: number
    yorigin: number
    alignment?: Alignment
  }
  ChildWidgets?: ChildWidgets<Widget>
  StateMaterials?: StateMaterials<FontMaterial>
}

export interface BaseWidget extends ViewportWidget {
  Type: 'Base'

  ChildWidgets?: ChildWidgets<Widget>
  Help?: number
  Image?: Image
  StateMaterials?: StateMaterials<TextureMaterial>
  Wrap?: {
    width: number
    height: number
  }
}

export interface ButtonWidget extends ViewportWidget {
  Type: 'Button'

  AccessibilityTextOverride?: string
  ChildWidgets?: []
  ClickSound?: string
  disabled?: boolean
  'FIXME-IDS'?: number
  Help?: number
  HotKey?: HotKey
  Radius?: number
  StateMaterials?: StateMaterials<FontMaterial | TextureMaterial>
  TextAnchor?: Alignment
}

export interface CheckBoxWidget extends ViewportWidget {
  Type: 'CheckBox'

  ChildWidgets: ChildWidgets<LabelWidget>
  Help: string | number
  Image: Image
  StateMaterials: StateMaterials<TextureMaterial>
}

export interface ClipAreaWidget extends ViewportWidget {
  Type: 'ClipArea'

  ChildWidgets: ChildWidgets<
    | AnchorWidget
    | BaseWidget
    | CommandButtonWidget
    | LabelWidget
    | ProgressBarWidget
    | TextBoxWidget
  >
  Image: Image
}

export interface CommandButtonWidget extends ViewportWidget {
  Type: 'CommandButton'

  ChildWidgets: []
  Help?: number
  StateMaterials?: StateMaterials<FontMaterial | TextureMaterial>
}

export interface DropDownWidget extends ViewportWidget {
  Type: 'DropDown'

  AccessibilityName: string
  Button: Box
  ChildWidgets: ChildWidgets<ListBoxWidget>
  Help: number
  'FIXME-IDS': number
  StateMaterials: StateMaterials<TextureMaterial>
  ValueBox: ValueBox
}

export interface LabelWidget extends TextWidget {
  Type: 'Label'

  AutoSize?: boolean
  ChildWidgets?: ChildWidgets<ButtonWidget | TechTreeButtonWidget>
  ClippingOverride?: 'BackgroundRight'
  Help?: number
  StateMaterials: StateMaterials<FontMaterial>
}

export interface ListBoxWidget extends ViewportWidget {
  Type: 'ListBox'

  ChildWidgets?: ChildWidgets<ScrollBarVerticalWidget>
  'FIXME-IDS'?: number
  Help: number
  ListBox: ListBox
  StateMaterials: StateMaterials<FontMaterial | TextureMaterial>
}

export interface MapViewWidget extends ViewportWidget {
  Type: 'MapView'
  Name: 'MapView'

  ChildWidgets: []
  Help: number
  Image: Image
}

export interface MarkUpTextBoxWidget extends TextWidget {
  Type: 'MarkUpTextBox'

  ChildWidgets: ChildWidgets<LabelWidget | ScrollBarVerticalWidget>
  StateMaterials: StateMaterials<FontMaterial>
  TextBox: TextBox
}

export interface MultiColorTextBoxWidget extends TextWidget {
  Type: 'MultiColorTextBox'

  ChildWidgets: []
  TextBox: TextBox
  StateMaterials: StateMaterials<FontMaterial>
}

export interface ProgressBarWidget extends ViewportWidget {
  Type: 'ProgressBar'

  ChildWidgets: ChildWidgets<LabelWidget>
  Help?: number
  StateMaterials: StateMaterials<TextureMaterial>
}

export interface ScrollBarVerticalWidget extends ViewportWidget {
  Type: 'ScrollBarVertical'

  AutoSize?: boolean
  Bar: Box
  ChildWidgets: []
  MinButton: Box
  MaxButton: Box
  StateMaterials: StateMaterials<TextureMaterial>
  TabSize: {
    width: number
    height: number
  }
}

export interface SurroundWidget extends ViewportWidget {
  Type: 'Surround'

  Box: SurroundBox
  ChildWidgets: ChildWidgets<
    AnchorWidget | LabelWidget | MarkUpTextBoxWidget | MultiColorTextBoxWidget
  >
  StateMaterials?: StateMaterials<TextureMaterial>
}

export interface TechTreeButtonWidget extends ViewportWidget {
  Type: 'TechTreeButton'

  Help?: string
  IconValues: IconValue[]
}

export interface TextBoxWidget extends TextWidget {
  Type: 'TextBox'

  ChildWidgets?: []
  StateMaterials: StateMaterials<FontMaterial>
  TextBox: TextBox
}
