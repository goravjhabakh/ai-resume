import type { Metadata } from "next"
import "./globals.css"
import { Navbar } from "@/components/navbar"

export const metadata: Metadata = {
  title: "AI Resume Analyser",
  description: "AI Resume Analyser",
  icons: {
    icon: "/logo.svg"
  },
  openGraph: {
    title: "AI Resume Analyser",
    description: "AI Resume Analyser",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "AI Resume Analyser"
      }
    ]
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
