"use client"
import Image from "next/image"
import React, { useState } from "react"
import logo from "@/public/logo.svg"

const baseButtonStyles = "backdrop-blur-md bg-white/30 border border-white/20"

const Header = () => {
  return (
    <header className="fixed rounded-[75px] w-[90vw] items-center flex gap-x-[1vw] my-[3vh] z-[5000]">
      <Logo />
      <Navigation />
    </header>
  )
}

export default Header

const Logo = () => {
  return (
    <button
      className={`relative py-3 px-[24px] flex gap-x-3 active:bg-[#E6E4EB] transition-colors cursor-pointer font-bold text-[1.5rem] rounded-[75px] ${baseButtonStyles}`}
    >
      <Image src={logo} width={24} height={24} alt={"logo"} />
      Do-Goals
    </button>
  )
}

const Navigation = () => {
  const [selected, setSelected] = useState("home")
  return (
    <nav className="flex gap-x-4 flex-1">
      <div
        className={`py-2 px-2 flex-1 gap-x-4 flex rounded-[75px] ${baseButtonStyles}`}
      >
        {[
          { id: "home", label: "О нас" },
          { id: "business", label: "Бизнесу" },
          { id: "client", label: "Клиентам" },
          { id: "contacts", label: "Новости" }
        ].map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setSelected(id)}
            className={`${
              selected === id
                ? "bg-white border-darkBlue/10 text-darkBlue"
                : "bg-transparent border-transparent text-darkBlue"
            } border text-[1rem] py-3 px-[24px] rounded-[30px] transition-colors cursor-pointer`}
          >
            {label}
          </button>
        ))}
      </div>

      <button
        onClick={() => setSelected("contacts")}
        className={`py-3 px-[24px] flex gap-x-3 active:bg-[#E6E4EB] transition-colors cursor-pointer items-center rounded-[75px] ${baseButtonStyles}`}
      >
        Связь с нами
      </button>
    </nav>
  )
}
