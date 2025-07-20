"use client"

import { IMaskInput } from "react-imask"

type InputProps = {
  placeholder: string
  className?: string
  type: string
  mask?: string
  value?: string
  onChange?: (e: any) => void
}

const Input = ({ placeholder, className = "", type, mask, value = "", onChange }: InputProps) => {
  const inputClassNames = `w-full px-1.5 py-3 border-b placeholder:text-gray-500 placeholder:font-poppins border-PrimaryBlack/25 focus:outline-none ${className}`

  return (
    <div className="relative w-full">
      {mask ? (
        <IMaskInput
          mask={mask}
          value={value}
          onAccept={(val: string) => {
            onChange?.({ target: { value: val } })
          }}
          className={inputClassNames}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          className={inputClassNames}
          placeholder={placeholder}
        />
      )}
    </div>
  )
}

export default Input