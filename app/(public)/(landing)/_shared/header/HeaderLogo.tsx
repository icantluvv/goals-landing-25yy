import Link from "next/link"
import Image from "next/image"
import header_logo from "@/public/header/header_logo.svg"

import React from "react"

const HeaderLogo = () => {
  return (
    <Link className={`gap-x-3 `} href={"/"}>
      <Image src={header_logo} className="h-[50px] w-auto" alt="logo" />
    </Link>
  )
}

export default HeaderLogo
