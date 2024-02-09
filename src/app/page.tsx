import { loadGamePanels } from '@/fs'
import { Svg } from './svg'

export default async function Home() {
  const panels = await loadGamePanels()
  return <Svg panels={panels} />
}
