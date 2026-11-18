import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = { title: 'Midway — Personal Loans, Made Clear', description: 'A simpler way to move forward with a personal loan from Midway.' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
