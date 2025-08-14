import React from "react"
import Header from "@/ui/shared/header/header"
import Footer from "@/ui/shared/footer/footer"
import MobileHeader from "@/ui/shared/mobile-header/MobileHeader"

const DefaultLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="block relative">
      <Header />
      <MobileHeader />
      <main className="w-full min-h-[100svh]">{children}</main>
      <Footer />
    </div>
  )
}

export default DefaultLayout
