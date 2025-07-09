import RegularNavigation from "@/app/(public)/(landing)/_shared/header/RegularNavigation"
import HeaderLogo from "./HeaderLogo"
import TryButton from "./TryButton"

type RegularHeaderProps = {
  navLinks: { id: string; label: string }[]
  baseButtonStyles: string
}

const RegularHeader = ({ navLinks, baseButtonStyles }: RegularHeaderProps) => {
  return (
    <header
      className={`fixed top-0 h-[64px] w-[88vw] rounded-[64px] mt-[24px] pl-[4vw] pr-4 items-center gap-[56px] z-[5000] hidden lg:flex ${baseButtonStyles} `}
    >
      <HeaderLogo />
      <RegularNavigation navLinks={navLinks} />
      <TryButton />
    </header>
  )
}

export default RegularHeader
