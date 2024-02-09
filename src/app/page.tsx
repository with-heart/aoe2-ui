import { Panel } from '@/types/panel'
import { Svg } from './svg'
import * as fs from 'node:fs/promises'

export default async function Home() {
  const panels = await loadPanels()
  return <Svg panels={panels} />
}

async function loadPanels(): Promise<Panel[]> {
  const files = (await fs.readdir('./src/widgetui')).filter(
    (file) =>
      file.endsWith('panel.json') && file !== 'techtreepreviewpanel.json',
  )
  const panels = await Promise.all(
    files.map(async (file) => {
      const data = await fs.readFile(`./src/widgetui/${file}`, 'utf-8')
      return JSON.parse(data) as Panel
    }),
  )
  return panels
}
