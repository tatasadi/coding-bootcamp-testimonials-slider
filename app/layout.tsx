import type { Metadata } from "next"
import { Josefin_Sans } from "next/font/google"
import "./globals.css"

const libreFranklin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
})

export const metadata: Metadata = {
  title: "Base Apparel Coming Soon Pag",
  description: "A Challenge from Frontend Mentor!",
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
        className={`${libreFranklin.className} text-neutral-very-dark-blue flex min-h-screen flex-col items-center justify-center `}
      >
        {children}
      </body>
    </html>
  )
}
