import type { Metadata } from "next"
import "@/globals.css"
import { inter, montserrat } from "@/public/fonts/fonts"
import DefaultLayout from "@/ui/shared/default-layout/default-layout"

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
    <html lang="ru" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="block relative">
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  )
}
