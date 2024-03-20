'use client'

import { calculateViewport } from '@/viewport'
import * as Equivalence from '@effect/schema/Equivalence'
import * as S from '@effect/schema/Schema'
import { useSelector } from '@xstate/react'
import * as Data from 'effect/Data'
import * as Equal from 'effect/Equal'
import { panels } from 'widgetui'
import * as WidgetUI from 'widgetui/schema'
import { createActor } from 'xstate'
import { Element, UiContext, UiSnapshot, uiMachine } from './ui.machine'

const ui = createActor(uiMachine, {
  input: { panels },
})
ui.start()

const selectIds = (state: UiSnapshot) => state.context.ids
const compareIds = (a: string[], b: string[]) =>
  Equal.equals(Data.array(a), Data.array(b))

export function UI() {
  const ids = useSelector(ui, selectIds, compareIds)

  return (
    <svg id="ui" className="debug" viewBox="0 0 3840 2160">
      <defs>
        {ids.map((id) => (
          <Def key={id} id={id} />
        ))}
      </defs>
      {ids.map((id) => (
        <Use key={id} id={id} />
      ))}
    </svg>
  )
}

function Use({ id }: { id: string }) {
  return <use href={`#${id}`} />
}

const selectElement = (id: string) => (state: UiSnapshot) =>
  state.context.elementById.get(id)!
const compareElement = Equivalence.make(
  S.union(WidgetUI.Collection, WidgetUI.Widget),
)

const useElement = (id: string): Element => {
  const element = useSelector(ui, selectElement(id), compareElement)
  return element
}

const selectParentByElement = (state: UiSnapshot) =>
  state.context.parentByElement
const compareParentByElement = (
  a: UiContext['parentByElement'],
  b: UiContext['parentByElement'],
) => Equal.equals(Data.struct(a), Data.struct(b))

const useViewport = (
  element: Element,
): { x: number; y: number; width: number; height: number } | undefined => {
  const parentByElement = useSelector(
    ui,
    selectParentByElement,
    compareParentByElement,
  )

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

function Def({ id }: { id: string }) {
  const element = useElement(id)
  const viewport = useViewport(element)
  if (!viewport) return undefined

  const className = WidgetUI.isCollection(element) ? 'panel' : 'widget'

  return (
    <svg
      id={id}
      x={viewport.x}
      y={viewport.y}
      width={viewport.width}
      height={viewport.height}
    >
      <rect className={className} width="100%" height="100%" />
    </svg>
  )
}
