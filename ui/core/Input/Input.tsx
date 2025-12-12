"use client"

import { ChangeEvent, MouseEvent } from "react"
import MaskedInput from "./MaskedInput"
import clsx from "clsx"

type InputProps = {
    placeholder?: string
    className?: string
    type: string
    mask?: string
    value?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    onClick?: (e: MouseEvent<HTMLInputElement>) => void
    readOnly?: boolean
}

const Input = ({
    placeholder = "",
    readOnly = false,
    className,
    type,
    mask,
    value = "",
    onChange,
    onClick
}: InputProps) => {
    const inputClassNames = `w-full px-3 py-3 border-b placeholder:text-gray-500 placeholder:font-poppins border-PrimaryBlack/25 focus:outline-none `

    if (mask) {
        return (
            <MaskedInput
                mask={mask}
                value={value}
                onChange={(val) =>
                    onChange?.({ target: { value: val } } as ChangeEvent<HTMLInputElement>)
                }
                className={className}
                placeholder={placeholder ? placeholder : ""}
            />
        )
    }

    return (
        <input
            readOnly={readOnly}
            type={type}
            value={value}
            onChange={onChange}
            onClick={onClick}
            className={clsx(inputClassNames, className)}
            placeholder={placeholder}
        />
    )
}

export default Input
