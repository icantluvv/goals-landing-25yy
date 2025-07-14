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

  const inputClassNames = `w-full px-1.5 py-3 border-b placeholder:text-gray-500 placeholder:font-poppins border-PrimaryBlack/25 focus:outline-none ${className}`

  return (
    <div className="relative w-full">
      {mask ? (
        <IMaskInput
          mask={mask}
          value={value}
          onAccept={(val: string) => setValue(val)}
          className={inputClassNames}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={inputClassNames}
          placeholder={placeholder}
        />
      )}
    </div>
  )
}

export default Input
