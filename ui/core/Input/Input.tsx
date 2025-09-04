"use client"

import { ChangeEvent } from "react"
import MaskedInput from "./MaskedInput"

type InputProps = {
    placeholder: string
    className?: string
    type: string
    mask?: string
    value?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ placeholder, className, type, mask, value = "", onChange }: InputProps) => {
    const inputClassNames = `w-full px-1.5 py-3 border-b placeholder:text-gray-500 placeholder:font-poppins border-PrimaryBlack/25 focus:outline-none ${className}`

    if (mask) {
        return (
            <MaskedInput
                mask={mask}
                value={value}
                onChange={(val) =>
                    onChange?.({ target: { value: val } } as ChangeEvent<HTMLInputElement>)
                }
                className={className}
                placeholder={placeholder}
            />
        )
    }

    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            className={inputClassNames}
            placeholder={placeholder}
        />
    )
}

export default Input
