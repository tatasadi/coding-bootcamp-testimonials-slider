import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Reference from '../components/Reference'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '500', '700'],
})

export const metadata: Metadata = {
  title: 'Coding Bootcamp Testimonials Slider',
  description: 'A Challenge from Frontend Mentor!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/images/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body
        className={`${inter.className} flex min-h-screen flex-col items-center `}
      >
        {children}
        <Reference />
      </body>
    </html>
  )
}
