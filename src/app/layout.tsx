import type { Metadata } from 'next'
import './globals.css'
import BfcacheReload from '@/components/BfcacheReload'
import UsageTracker from '@/components/UsageTracker'

export const metadata: Metadata = {
  title: 'FoqusLab',
  description: 'Prep. Practice. Pass. — The Philippine Optometry review platform.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-gray-50">
        <BfcacheReload />
        <UsageTracker />
        {children}
      </body>
    </html>
  )
}
