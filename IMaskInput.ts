import { ComponentProps } from "react"

export interface IMaskInputProps extends Omit<ComponentProps<"input">, "onChange"> {
    mask: string | RegExp
    value?: string
    onAccept?: (value: string, mask: unknown) => void
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}
