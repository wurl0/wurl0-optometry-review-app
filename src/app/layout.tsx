import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OLE Review',
  description: 'Philippine Optometry Licensure Exam Review Platform',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-gray-50">{children}</body>
    </html>
  )
}
