'use client'

import * as WidgetUI from 'widgetui/schema'
import { useElement, useIds, useViewport } from './ui.actor'

export function UI() {
  const ids = useIds()

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
