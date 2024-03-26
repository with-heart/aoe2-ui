import { Element } from '@/types'
import { calculateViewport } from '@/viewport'
import * as Equivalence from '@effect/schema/Equivalence'
import * as S from '@effect/schema/Schema'
import { useSelector } from '@xstate/react'
import * as Data from 'effect/Data'
import * as Equal from 'effect/Equal'
import { panels } from 'widgetui'
import * as WidgetUI from 'widgetui/schema'
import { createActor } from 'xstate'
import { UiContext, uiMachine, type UiSnapshot } from './ui.machine'

export const ui = createActor(uiMachine, {
  input: { panels },
})
ui.start()

const selectIds = (state: UiSnapshot) => state.context.ids
const compareIds = (a: string[], b: string[]) =>
  Equal.equals(Data.array(a), Data.array(b))

export const useIds = () => useSelector(ui, selectIds, compareIds)

const selectElement =
  (id: string) =>
  (state: UiSnapshot): Element =>
    state.context.elementById.get(id)!
const compareElement = Equivalence.make(
  S.union(WidgetUI.Collection, WidgetUI.Widget),
)

export const useElement = (id: string): Element =>
  useSelector(ui, selectElement(id), compareElement)

const selectParentByElement = (state: UiSnapshot) =>
  state.context.parentByElement
const compareParentByElement = (
  a: UiContext['parentByElement'],
  b: UiContext['parentByElement'],
) => Equal.equals(Data.struct(a), Data.struct(b))

export const useParentByElement = () =>
  useSelector(ui, selectParentByElement, compareParentByElement)

export const useViewport = (
  element: Element,
): { x: number; y: number; width: number; height: number } | undefined => {
  const parentByElement = useParentByElement()

  if (WidgetUI.isCollection(element)) {
    return calculateViewport(element.ViewPort)
  }

  if (WidgetUI.isViewportWidget(element)) {
    const viewports = [element.ViewPort]

    let ancestor = parentByElement.get(element)
    while (ancestor !== undefined) {
      if (
        WidgetUI.isCollection(ancestor) ||
        WidgetUI.isViewportWidget(ancestor)
      ) {
        viewports.unshift(ancestor.ViewPort)
      }
      ancestor = parentByElement.get(ancestor)
    }

    const combinedViewport = {
      ...calculateViewport(viewports.shift()!),
      width: element.ViewPort.width,
      height: element.ViewPort.height,
    }
    for (const viewport of viewports) {
      const { x, y } = calculateViewport(viewport)
      combinedViewport.x += x
      combinedViewport.y += y
    }

    return combinedViewport
  }

  return undefined
}

const selectTextureByElement = (state: UiSnapshot) =>
  state.context.textureByElement
const compareTextureByElement = (
  a: UiContext['textureByElement'],
  b: UiContext['textureByElement'],
) => Equal.equals(Data.struct(a), Data.struct(b))

export const useTextureByElement = () =>
  useSelector(ui, selectTextureByElement, compareTextureByElement)

export const useTexture = (element: Element) => {
  const textureByElement = useTextureByElement()
  const texture = textureByElement.get(element)
  return texture
}
