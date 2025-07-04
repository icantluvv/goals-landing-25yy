import React, { ReactNode } from "react"
import clsx from "clsx"

const defaultButtons = "flex gap-[12px] items-center"

const variantsButton = {
  center: " w-full justify-center  text-center",

  size: {
    default:
      "w-full gap-x-[12px] px-[18px] lg:px-[24px] py-[12px] lg:py-[18px] justify-center select-none cursor-pointer" as const,
    custom: ""
  },

  color: {
    darkBlue: "bg-darkBlue active:bg-darkBlue/75",
    white: "bg-white text-darkBlue active:opacity-80",
    green: "bg-brandGreen active:bg-GreenActive",
    black: "bg-PrimaryBlack active:bg-PrimaryBlack/75 ",
    empty: "bg-transparent"
  },
  variant: {
    primary: "rounded-full w-full ",
    secondary: "rounded-[12px]"
  }
} as const

type ButtonVariants = keyof typeof variantsButton.variant
type ButtonColors = keyof typeof variantsButton.color
type ButtonSize = keyof typeof variantsButton.size

type ButtonProps = {
  children: ReactNode
  className?: string
  type?: "button" | "submit" | "reset"
  variant?: ButtonVariants
  center?: boolean
  color?: ButtonColors
  size?: ButtonSize
  as?: keyof React.JSX.IntrinsicElements
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
}

const Button = ({
  children,
  className,
  type = "button",
  variant = "primary",
  center,
  size,
  color,
  as,
  onClick,
  disabled
}: ButtonProps) => {
  const Tag = as || "button"

  return (
    <button
      type={Tag === "button" ? type : undefined}
      className={clsx(
        defaultButtons,
        color && variantsButton.color[color],
        size && variantsButton.size[size],
        variantsButton.variant[variant],
        center && variantsButton.center,
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
