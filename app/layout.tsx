import { Footer, NavBar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'



export const metadata: Metadata = {
  title: 'Car App',
  description: 'Cars in world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
