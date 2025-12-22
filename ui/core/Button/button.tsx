import { Slot, Slottable } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { type ButtonHTMLAttributes, ComponentType, forwardRef, HTMLProps } from "react"

type ButtonSize = "large" | "medium" | "small"

type ButtonVariant = "accent" | "default" | "ghost" | "white" | "outlined" | "rounded" | "shaded"

type ButtonProps = {
    asChild?: boolean
    componentType?: ButtonVariant
    full?: boolean
    size?: ButtonSize
    RightIcon?: ComponentType<HTMLProps<SVGSVGElement>>
} & ButtonHTMLAttributes<HTMLButtonElement>

const buttonVariants = cva(
    "inline-flex cursor-pointer items-center justify-center tracking-normal transition-all disabled:pointer-events-none disabled:cursor-not-allowed",
    {
        defaultVariants: {
            componentType: "default",
            full: false,
            onlyIcon: false,
            size: "medium"
        },
        variants: {
            componentType: {
                accent: "bg-brandGreen active:bg-GreenActive text-text-inverted hover:bg-bg-accent-hover active:bg-bg-accent-active disabled:bg-bg-disabled",
                default:
                    "bg-darkBlue text-white hover:bg-darkBlue/90  active:bg-darkBlue/80 disabled:bg-darkBlue/50",
                ghost: "",
                white: "bg-white text-darkBlue hover:bg-white/90 active:bg-white/80 disabled:bg-white/50",
                outlined:
                    "text-text-label inset-ring-[1px] inset-ring-border-default hover:bg-bg-inverted-hover hover:text-text-inverted hover:inset-ring-bg-inverted-hover active:bg-bg-inverted-active active:text-text-inverted active:inset-ring-bg-inverted-active disabled:text-text-disabled disabled:inset-ring-border-disabled",
                rounded:
                    "!rounded-corner-endless bg-bg-inverted text-text-inverted hover:bg-bg-inverted-hover active:bg-bg-inverted-active disabled:bg-bg-disabled",
                shaded: "bg-bg-shade-less text-text-label hover:bg-bg-inverted-hover hover:text-text-inverted active:bg-bg-inverted-active active:text-text-inverted disabled:bg-bg-disabled disabled:text-text-inverted"
            },
            full: {
                true: "w-full"
            },
            onlyIcon: {
                true: ""
            },
            size: {
                large: "gap-3 px-10 py-4 max-h-12 lg:max-h-14 rounded-full",
                medium: "gap-2 px-6 py-3 max-h-12",
                small: "gap-1 px-4 py-2 max-h-10"
            }
        }
    }
)

const ICON_SIZE_MAP = {
    large: 24,
    medium: 20,
    small: 16,
    tiny: 12
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            asChild = false,
            children,
            className,
            RightIcon,
            componentType = "default",
            full,
            size = "medium",
            type = "button",
            ...props
        },
        ref
    ) => {
        const Comp = asChild ? Slot : "button"
        const iconSize = ICON_SIZE_MAP[size]

        const onlyIcon = false

        return (
            <Comp
                className={buttonVariants({
                    className,
                    componentType,
                    full,
                    onlyIcon,
                    size
                })}
                ref={ref}
                type={type}
                {...props}
            >
                {Boolean(children) && (
                    <Slottable>
                        {children}
                        {RightIcon || (RightIcon && onlyIcon) ? (
                            <RightIcon height={iconSize} width={iconSize} />
                        ) : null}
                    </Slottable>
                )}
            </Comp>
        )
    }
)

Button.displayName = "Button"

export { Button, type ButtonSize, type ButtonVariant }
