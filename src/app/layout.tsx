import './globals.css'
import type { Metadata } from 'next'
import { IBM_Plex_Sans as IBMSans } from 'next/font/google'

const ibm = IBMSans({
  subsets: ['latin'],
  weight: '100',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ibm.className}>{children}</body>
    </html>
  )
}
