import React from "react"
import clsx from "clsx"

const variantsTypography = {
  family: {
    default: "font-montserrat"
  },
  variant: {
    h1: "text-4xl font-bold",
    h2: "text-3xl font-semibold",
    h3: "text-2xl font-medium",
    h4: "text-xl font-medium",
    h5: "text-lg font-medium",
    p: "text-base",
    span: "text-sm"
  }
} as const

type TypographyVariants = keyof typeof variantsTypography.variant

type TypographyProps = {
  children: React.ReactNode
  className?: string
  variants: TypographyVariants
  as?: keyof React.JSX.IntrinsicElements
}

const baseTypographyStyles = "text-black"

function Typography({ children, className, variants, as }: TypographyProps) {
  const Tag = as || variants

  return (
    <Tag
      className={clsx(
        baseTypographyStyles,
        variantsTypography.family.default,
        variantsTypography.variant[variants],
        className
      )}
    >
      {children}
    </Tag>
  )
}

export default Typography