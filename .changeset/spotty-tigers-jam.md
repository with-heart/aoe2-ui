---
'widgetui': minor
---

Added the `forEachChild` utility function to `widgetui/schema`. `forEachChild`
allows for traversing the child `Widget` objects of a `Panel` or `Widget` by
defining a callback:

```ts
import { type Widget, forEachChild } from 'widgetui/schema'

function visitWidget(widget: Widget) {
  // logic executed on each child widget
}

forEachChild(panel, visitWidget)
forEachChild(widget, visitWidget)
```

If the callback returns a value, traversal stops and that value is returned:

```ts
import { forEachChild } from 'widgetui/schema'

// the callback will only be called once (with the first child widget)
forEachChild(panelWith3ChildWidgets, (widget) => 'a returned value')
```

`forEachChild` can also be used recursively to traverse all widgets in the tree:

```ts
import { type Widget, forEachChild } from 'widgetui/schema'

forEachChild(panel, function visitWidget(widget) {
  // log the widget's name
  console.log(widget.Name)
  // then traverse its child nodes
  forEachChild(widget, visitWidget)
})
```
