"use client"

import { useState } from "react"
import Image from "next/image"
import map from "@/public/map.svg"

type InputFieldProps = {
  placeholder: string
  className?: string
}

const InputField = ({ placeholder, className = "" }: InputFieldProps) => {
  const [value, setValue] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  const isActive = isFocused || value.length > 0

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full px-1.5 py-3 border-b border-PrimaryBlack/25 focus:outline-none ${className}`}
      />
      <label
        className={`
          absolute z-[-1] left-0
          transition-all duration-200
          ${
            isActive
              ? "top-[-0.7rem] text-[12px] lg:text-[14px] text-PrimaryBlack"
              : "top-3 text-[14px] lg:text-[16px] text-PrimaryBlack/50"
          }
        `}
      >
        {placeholder}
      </label>
    </div>
  )
}

const Application = () => {
  return (
    <section
      id="connect"
      className="lg:rounded-[75px] scroll-mt-[100px] flex flex-col lg:flex-row gap-[40px] lg:gap-[80px] mb-[40px] lg:mb-[80px]"
    >
      <form className="flex flex-1 w-full md: px-[4vw] flex-col gap-[24px]">
        <div className="flex flex-col gap-[6px]">
          <h3 className="text-[24px] lg:text-[42px] font-semibold">
            Оставьте заявку!
          </h3>
          <p className="text-[14px] lg:text-[16px]">
            Мы с вами свяжемся для продолжения регистрации
          </p>
        </div>

        <div className="flex  gap-[12px]">
          <InputField placeholder="Телефон" className="flex-1" />
          <InputField placeholder="Почта" className="flex-1" />
        </div>

        <div className="flex flex-col gap-[24px]">
          <InputField placeholder="ФИО" />
          <InputField placeholder="ИНН Организации" />
        </div>

        <div>
          <button
            className="px-[48px] py-[18px] font-semibold text-WhiteText bg-PrimaryBlack 
          rounded-[48px] active:bg-PrimaryBlack/75   "
          >
            Отправить
          </button>
        </div>
      </form>

      <div className="hidden xl:flex xl:w-1/2 h-[70vh] relative p-[48px]">
        <Image
          src={map}
          alt="map"
          fill
          objectFit="cover"
          className="xl:rounded-[35px] object-cover"
        />
      </div>
    </section>
  )
}

export default Application
