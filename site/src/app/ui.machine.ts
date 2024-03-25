import textureByName from '@/textures.json'
import { Texture, type Element } from '@/types'
import {
  Panel,
  forEachChild,
  isCollection,
  isUserStates,
  isViewportWidget,
} from 'widgetui/schema'
import { ContextFrom, SnapshotFrom, setup } from 'xstate'

export type UiSnapshot = SnapshotFrom<typeof uiMachine>
export type UiContext = ContextFrom<typeof uiMachine>

export const uiMachine = setup({
  types: {
    context: {} as {
      isDebug?: boolean
      ids: string[]
      elementById: Map<string, Element>
      textureByElement: Map<Element, Texture>
      parentByElement: Map<Element, Element | undefined>
    },
    input: {} as {
      panels: Panel[]
    },
  },
}).createMachine({
  context: ({ input }) => {
    const { elementById, ids, parentByElement, textureByElement } =
      initializeElementMap(input.panels)

    return {
      elementById,
      ids,
      parentByElement,
      textureByElement,
    }
  },
})

function initializeElementMap(panels: Panel[]) {
  const { ids, elementById, parentByElement, idByElement, textureByElement } =
    initializeData()
  const zById = associateZPlanes()

  return {
    ids: ids.toSorted((a, b) => zById.get(a)! - zById.get(b)!),
    elementById,
    parentByElement,
    idByElement,
    textureByElement,
  }

  function initializeData() {
    const ids: string[] = []
    const parentByElement = new Map<Element, Element>()
    const elementById = new Map<string, Element>()
    const idByElement = new Map<Element, string>()
    const textureByElement = new Map<Element, Texture>()

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
          idByElement.set(widget, id)
          parentByElement.set(widget, parent)

          if (widget.StateMaterials) {
            const normalMaterial =
              isUserStates(widget.StateMaterials) ?
                widget.StateMaterials['UserState0']?.Material
              : widget.StateMaterials['StateNormal']?.Material
            const texture = textureByName[normalMaterial ?? 'invalid']

            if (texture) textureByElement.set(widget, texture)
          }

          forEachChild(widget, (child) => visitWidget(child, id, widget))
        },
      )
    }

    return { ids, parentByElement, elementById, idByElement, textureByElement }
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
