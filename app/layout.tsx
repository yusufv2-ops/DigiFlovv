import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DigiFlow - Digital Minimalism Services",
  description: "Galeri, Gelen Kutusu ve Bulut Düzenleme Hizmetleri ile zihninizi dijital kirlilikten arındırın.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
