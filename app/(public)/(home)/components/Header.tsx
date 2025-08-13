"use client"
import React from "react"
import { navLinks } from "@/constants/header-links"
import RegularHeader from "@/app/(public)/(home)/_shared/header/RegularHeader"
import MobileHeader from "@/app/(public)/(home)/_shared/header/MobileHeader"

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
