import Image from "next/image"
import header_logo from "@/public/header/header_logo.svg"
import RegularNavigation from "./RegularNavigation"
import Link from "next/link"

const RegularHeader = ({ navLinks, baseButtonStyles }: RegularHeaderProps) => {
  return (
    <header
      className={`fixed top-0 left-0 h-[64px] w-full px-[10vw] items-center gap-10 z-[5000] hidden lg:flex ${baseButtonStyles} `}
    >
      <Logo />
      <RegularNavigation navLinks={navLinks} />
    </header>
  )
}

export default RegularHeader

const Logo = () => {
  return (
    <Link className={` gap-x-3 `} href={"/"}>
      <Image src={header_logo} className="h-[50px] w-auto" alt="logo" />
    </Link>
  )
}

interface RegularHeaderProps {
  navLinks: { id: string; label: string }[]
  baseButtonStyles: string
}
