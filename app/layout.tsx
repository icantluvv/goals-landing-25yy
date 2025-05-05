import type { Metadata } from "next"
import "@/globals.css"

export const metadata: Metadata = {
  title: "Goals",
  description: ""
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className="px-[2vw]">{children}</body>
    </html>
  )
}
