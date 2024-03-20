import {
  Collection,
  Panel,
  Widget,
  forEachChild,
  isCollection,
  isViewportWidget,
} from 'widgetui/schema'
import { ContextFrom, SnapshotFrom, setup } from 'xstate'

export type Element = Collection | Widget

export type UiSnapshot = SnapshotFrom<typeof uiMachine>
export type UiContext = ContextFrom<typeof uiMachine>

export const uiMachine = setup({
  types: {
    context: {} as {
      isDebug?: boolean
      ids: string[]
      elementById: Map<string, Element>
      parentByElement: Map<Element, Element | undefined>
    },
    input: {} as {
      panels: Panel[]
    },
  },
}).createMachine({
  context: ({ input }) => initializeElementMap(input.panels),
})

function initializeElementMap(panels: Panel[]) {
  const { ids, elementById, parentByElement } = initializeData()
  const zById = associateZPlanes()

  return {
    ids: ids.toSorted((a, b) => zById.get(a)! - zById.get(b)!),
    elementById,
    parentByElement,
  }

  function initializeData() {
    const ids: string[] = []
    const parentByElement = new Map<Element, Element>()
    const elementById = new Map<string, Element>()

    for (const panel of panels) {
      elementById.set(panel.Collection.Name, panel.Collection)
      ids.push(panel.Collection.Name)

      forEachChild(
        panel,
        function visitWidget(
          widget,
          parentId = panel.Collection.Name,
          parent: Element = panel.Collection,
        ) {
          const id = `${parentId}.${widget.Name}`

          ids.push(id)
          elementById.set(id, widget)
          parentByElement.set(widget, parent)

          forEachChild(widget, (child) => visitWidget(child, id, widget))
        },
      )
    }

    return { ids, parentByElement, elementById }
  }

  function associateZPlanes() {
    const zById = new Map<string, number>()

    for (const id of ids) {
      const element = elementById.get(id)!

      zById.set(id, 0)

      if (isCollection(element)) {
        zById.set(id, -1)
        continue
      }

      if (element.ZPlane) {
        zById.set(id, element.ZPlane)
        continue
      }

      if (element.ZPlaneLocalOffset !== undefined) {
        const ancestorWithZPlane = findAncestor(
          element,
          (ancestor) =>
            isViewportWidget(ancestor) && ancestor.ZPlane !== undefined,
        )
        const z =
          (isViewportWidget(ancestorWithZPlane) ?
            ancestorWithZPlane?.ZPlane
          : 0) ?? 0
        zById.set(id, z + element.ZPlaneLocalOffset)
      }
    }

    return zById

    function findAncestor(
      element: Element,
      matcher: (element: Element) => boolean,
    ): Element | undefined {
      const parent = parentByElement.get(element)
      if (!parent) return undefined

      if (matcher(parent)) return parent

      return findAncestor(parent, matcher)
    }
  }
}
