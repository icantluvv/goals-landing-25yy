import RegularNavigation from "@/app/(public)/(landing)/_shared/header/RegularNavigation"
import HeaderLogo from "./HeaderLogo"

type RegularHeaderProps = {
  navLinks: { id: string; label: string }[]
  baseButtonStyles: string
}

const RegularHeader = ({ navLinks, baseButtonStyles }: RegularHeaderProps) => {
  return (
    <div className="fixed top-0 px-[6vw] z-[5000] hidden lg:block w-full">
      <header
        className={`transition-all duration-300 w-full inline-flex items-center gap-[56px] rounded-full mt-[24px] px-[4vw] "max-w-full"
        } ${baseButtonStyles}`}
      >
        <HeaderLogo />
        <RegularNavigation navLinks={navLinks} />
      </header>
    </div>
  )
}

export default RegularHeader
