import { useMobileHeaderStore } from "@/store/mobileHeaderStore"
import Link from "next/link"

const MobileNavigation = ({ navLinks }: MobileNavigationProps) => {
  const openHeader = useMobileHeaderStore((state) => state.openHeader)
  return (
    <nav
      className={`w-full h-full bg-white fixed left-0 top-[64px] z-[9000] flex flex-col items-start px-[4vw] gap-6 pt-5 lg:hidden transition-transform duration-300 ${
        openHeader ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {navLinks.map(({ id, label }) => (
        <Link
          key={id}
          href={id}
          className="text-[1rem] text-PrimaryBlack font-medium"
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}

export default MobileNavigation

interface MobileNavigationProps {
  navLinks: { id: string; label: string }[]
}
