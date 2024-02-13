import {
  AnchorWidget,
  BaseWidget,
  ButtonWidget,
  CheckBoxWidget,
  ClipAreaWidget,
  CommandButtonWidget,
  DropDownWidget,
  LabelWidget,
  ListBoxWidget,
  MapViewWidget,
  MarkUpTextBoxWidget,
  MultiColorTextBoxWidget,
  ProgressBarWidget,
  ScrollBarVerticalWidget,
  SurroundWidget,
  TechTreeButtonWidget,
  TextBoxWidget,
  Widget,
} from './types/widget'

export function isAnchorWidget(widget: Widget): widget is AnchorWidget {
  return widget.Type === 'Anchor'
}

export function isBaseWidget(widget: Widget): widget is BaseWidget {
  return widget.Type === 'Base'
}

export function isButtonWidget(widget: Widget): widget is ButtonWidget {
  return widget.Type === 'Button'
}

export function isCheckBoxWidget(widget: Widget): widget is CheckBoxWidget {
  return widget.Type === 'CheckBox'
}

export function isClipAreaWidget(widget: Widget): widget is ClipAreaWidget {
  return widget.Type === 'ClipArea'
}

export function isCommandButtonWidget(
  widget: Widget,
): widget is CommandButtonWidget {
  return widget.Type === 'CommandButton'
}

export function isDropDownWidget(widget: Widget): widget is DropDownWidget {
  return widget.Type === 'DropDown'
}

export function isLabelWidget(widget: Widget): widget is LabelWidget {
  return widget.Type === 'Label'
}

export function isListBoxWidget(widget: Widget): widget is ListBoxWidget {
  return widget.Type === 'ListBox'
}

export function isMapViewWidget(widget: Widget): widget is MapViewWidget {
  return widget.Type === 'MapView'
}

export function isMarkUpTextBoxWidget(
  widget: Widget,
): widget is MarkUpTextBoxWidget {
  return widget.Type === 'MarkUpTextBox'
}

export function isMultiColorTextBoxWidget(
  widget: Widget,
): widget is MultiColorTextBoxWidget {
  return widget.Type === 'MultiColorTextBox'
}

export function isProgressBarWidget(
  widget: Widget,
): widget is ProgressBarWidget {
  return widget.Type === 'ProgressBar'
}

export function isScrollBarVerticalWidget(
  widget: Widget,
): widget is ScrollBarVerticalWidget {
  return widget.Type === 'ScrollBarVertical'
}

export function isSurroundWidget(widget: Widget): widget is SurroundWidget {
  return widget.Type === 'Surround'
}

export function isTechTreeButtonWidget(
  widget: Widget,
): widget is TechTreeButtonWidget {
  return widget.Type === 'TechTreeButton'
}

export function isTextBoxWidget(widget: Widget): widget is TextBoxWidget {
  return widget.Type === 'TextBox'
}
