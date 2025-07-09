"use client"
import React from "react"
import MobileHeader from "@/app/(public)/(landing)/_shared/header/MobileHeader"
import RegularHeader from "@/app/(public)/(landing)/_shared/header/RegularHeader"
import { navLinks } from "@/constants/header-links"

const baseButtonStyles = "backdrop-blur-md bg-white/30"

const Header = () => {
  return (
    <>
      <RegularHeader navLinks={navLinks} baseButtonStyles={baseButtonStyles} />
      <MobileHeader navLinks={navLinks} />
    </>
  )
}

export default Header
