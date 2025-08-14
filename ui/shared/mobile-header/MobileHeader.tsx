"use client"

import { useMobileHeaderStore } from "@/store/mobileHeaderStore"
import { useBodyLock } from "@/hooks/useBodyLockScroll"
import Button from "@/ui/core/Button/Button"
import MobileNavigation from "@/ui/shared/mobile-header/MobileNavigation"

const navLinks = [
  { id: "/", label: "Главная" },
  // { id: "/clients", label: "Клиентам" },
  { id: "/blog", label: "Блог" }
  // { id: "/contacts", label: "Контакты" }
]

const MobileHeader = () => {
  const openHeader = useMobileHeaderStore((state) => state.openHeader)
  const setOpenHeader = useMobileHeaderStore((state) => state.setOpenHeader)

  useBodyLock(openHeader)

  function handleOpenHeader() {
    setOpenHeader()
  }

  return (
    <>
      <header
        className={`h-[64px] fixed left-0 top-0 w-full z-[9000] px-[4vw] flex justify-end items-center lg:hidden`}
      >
        <div className="w-[54px]">
          <Button
            onClick={handleOpenHeader}
            type="button"
            variant="primary"
            className="w-[54px] h-[54px] flex flex-col items-center justify-center gap-[8px] relative"
          >
            <div
              className={`w-[22px] absolute h-[1.5px] transition-all bg-PrimaryBlack ${
                openHeader ? "rotate-45" : "mt-[-10px]"
              }`}
            />
            <div
              className={`w-[22px] absolute h-[1.5px] transition-all bg-PrimaryBlack ${
                openHeader ? "rotate-[-45deg]" : "mt-[10px]"
              }`}
            />
          </Button>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-black/60 z-[8000] transition-opacity duration-300 ${
          openHeader ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={handleOpenHeader}
      />

      <MobileNavigation navLinks={navLinks} />
    </>
  )
}

export default MobileHeader
