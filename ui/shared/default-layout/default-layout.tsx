import React from "react"
import Header from "@/ui/shared/header/header"
import Footer from "@/ui/shared/footer/footer"

const DefaultLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="my-[100px] w-full md:mt-[140px] min-h-[100svh]">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default DefaultLayout
