"use client"

import { useState } from "react"

type InputProps = {
    placeholder: string
    className?: string
    type: string
}

const Input = ({ placeholder, className, type }: InputProps) => {
    const [value, setValue] = useState("")
    const [isFocused, setIsFocused] = useState(false)

    const isActive = isFocused || value.length > 0

    return (
        <div className="relative w-full">
            <input
                type={type}
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

export default Input
