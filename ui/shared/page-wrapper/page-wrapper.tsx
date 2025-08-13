import React from "react"

type PageWrapperProps = {
  children: React.ReactNode
  scroll?: boolean
}

function PageWrapper({ children, scroll }: PageWrapperProps) {
  return (
    <div
      className={`w-full flex justify-center ${scroll ? "p-0 lg:p-[30px] xl:p-[60px]" : "px-[15px] md:px-[30px] xl:px-[60px]"}`}
    >
      <div className="max-w-[1400px] w-full">{children}</div>
    </div>
  )
}

export default PageWrapper
