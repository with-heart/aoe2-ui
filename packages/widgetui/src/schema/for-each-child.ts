import { isPanel, type Panel, type Widget } from '.'

export interface ForEachChildCallback<T> {
  (widget: Widget): T | undefined
}

export function forEachChild<T>(
  panel: Panel,
  callback: ForEachChildCallback<T>,
): T | undefined
export function forEachChild<T>(
  widget: Widget,
  callback: ForEachChildCallback<T>,
): T | undefined
export function forEachChild<T>(
  panelOrWidget: Panel | Widget,
  callback: ForEachChildCallback<T>,
): T | undefined {
  return isPanel(panelOrWidget) ?
      forEachChildPanel(panelOrWidget, callback)
    : forEachChildWidget(panelOrWidget, callback)
}

function forEachChildPanel<T>(
  panel: Panel,
  callback: ForEachChildCallback<T>,
): T | undefined {
  for (const child of panel.Collection.Widgets) {
    const result = callback(child.Widget)
    if (result !== undefined) return result
  }
}

function forEachChildWidget<T>(
  widget: Widget,
  callback: ForEachChildCallback<T>,
): T | undefined {
  if (widget.ChildWidgets) {
    for (const child of widget.ChildWidgets) {
      const result = callback(child.Widget)
      if (result !== undefined) return result
    }
  }
}
