import { UI_HEIGHT, UI_WIDTH } from '@/constants'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { CSSProperties } from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AoE2 UI',
  description: 'Customize your Age of Empires II in-game UI',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      style={
        {
          '--ui-width': UI_WIDTH,
          '--ui-height': UI_HEIGHT,
        } as CSSProperties
      }
    >
      <body className={inter.className}>{children}</body>
    </html>
  )
}
