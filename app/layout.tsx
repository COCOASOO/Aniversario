import type React from "react"
import type { Metadata } from "next"
import { Dancing_Script, Kalam } from "next/font/google"
import "./globals.css"

// Fuentes kawaii para el diseño anime
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  display: "swap",
})

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-kalam",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Nuestro Primer Año Juntos 💕",
  description: "365 días de amor, risas y momentos mágicos - Web conmemorativa de aniversario",
  keywords: "aniversario, amor, pareja, momentos especiales, kawaii, anime",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${dancingScript.variable} ${kalam.variable}`}>
      <body className="font-kalam antialiased">{children}</body>
    </html>
  )
}
