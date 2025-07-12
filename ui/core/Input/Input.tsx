"use client"

import { useState } from "react"
import { IMaskInput } from "react-imask"

type InputProps = {
  placeholder: string
  className?: string
  type: string
  mask?: string
}

const Input = ({ placeholder, className, type, mask }: InputProps) => {
  const [value, setValue] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  const isActive = isFocused || value.length > 0

  const inputClassNames = `w-full px-1.5 py-3 border-b placeholder:text-gray-500 placeholder:font-poppins border-PrimaryBlack/25 focus:outline-none ${className}`

  return (
    <div className="relative w-full">
      {mask ? (
        <IMaskInput
          mask={mask}
          value={value}
          onAccept={(val: string) => setValue(val)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={inputClassNames}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={inputClassNames}
          placeholder={placeholder}
        />
      )}

      {/* <label
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
            </label> */}
    </div>
  )
}

export default Input
