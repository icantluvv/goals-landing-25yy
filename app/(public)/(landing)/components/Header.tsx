"use client"
import React from "react"
import MobileHeader from "@/app/(public)/(landing)/_shared/header/MobileHeader"
import RegularHeader from "@/app/(public)/(landing)/_shared/header/RegularHeader"

const baseButtonStyles = "backdrop-blur-md bg-white/30"

const navLinks = [
  { id: "/#about", label: "О нас" },
  { id: "/#forbusiness", label: "Бизнесу" },
  { id: "/#tariffs", label: "Тарифы" },
  { id: "/#FAQ", label: "FAQ" },
  { id: "/#connect", label: "Связаться" }
]

const Header = () => {
  return (
    <>
      <RegularHeader navLinks={navLinks} baseButtonStyles={baseButtonStyles} />
      <MobileHeader navLinks={navLinks} />
    </>
  )
}

export default Header
