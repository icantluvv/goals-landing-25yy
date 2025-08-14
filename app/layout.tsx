import "@/globals.css"
import { inter, montserrat } from "@/public/fonts/fonts"
import DefaultLayout from "@/ui/shared/default-layout/default-layout"
import { Metadata } from "next"

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" }
    ]
  }
}
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  )
}
