import { expect, test } from 'bun:test'
import { many, one } from 'test-utils'
import { Collection, Panel, Widget, WidgetDef, forEachChild } from '.'

test('forEachChild with Panel', () => {
  const widgetDefs = many(WidgetDef, 5)
  const panel: Panel = {
    Collection: {
      ...one(Collection),
      Widgets: widgetDefs,
    },
  }

  const widgets: Widget[] = []
  const result = forEachChild(panel, (widget) => {
    widgets.push(widget)
  })

  expect(result).toBeUndefined()
  expect(widgets).toEqual(widgetDefs.map((def) => def.Widget))
})

test('forEachChild with Widget', () => {
  const widgetDefs = many(WidgetDef, 5)
  const widget: Widget = {
    ...one(Widget),
    ChildWidgets: widgetDefs,
  }

  const widgets: Widget[] = []
  const result = forEachChild(widget, (widget) => {
    widgets.push(widget)
  })

  expect(result).toBeUndefined()
  expect(widgets).toEqual(widgetDefs.map((def) => def.Widget))
})

test('forEachChild early return value', () => {
  const widgetDefs = many(WidgetDef, 5).map((def, i) => ({
    Widget: { ...def.Widget, Name: `Widget-${i}` },
  }))
  const panel: Panel = {
    Collection: {
      ...one(Collection),
      Widgets: widgetDefs,
    },
  }

  const result = forEachChild(panel, (widget) =>
    widget.Name === 'Widget-3' ? widget.Name : undefined,
  )

  expect(result).toBe('Widget-3')
})

test('forEachChild recursive', () => {
  const panel: Panel = {
    Collection: {
      ...one(Collection),
      Widgets: [
        {
          Widget: {
            ...one(Widget),
            ChildWidgets: [
              {
                Widget: {
                  ...one(Widget),
                  ChildWidgets: [
                    {
                      Widget: {
                        ...one(Widget),
                        ChildWidgets: [],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  }

  let count = 0
  const result = forEachChild(panel, function visitWidget(widget) {
    count++
    forEachChild(widget, visitWidget)
  })

  expect(result).toBeUndefined()
  expect(count).toBe(3)
})
