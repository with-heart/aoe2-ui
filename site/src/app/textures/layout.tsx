import type { Metadata } from 'next'
import './textures.css'

export const metadata: Metadata = {
  title: 'Textures',
}

export default function TexturesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <section>{children}</section>
}
