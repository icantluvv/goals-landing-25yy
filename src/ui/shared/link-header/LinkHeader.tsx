import React from "react"
import Link from "next/link"

type LinkHeaderProps = {
    title: string
    href: string
}

function LinkHeader({ title, href }: LinkHeaderProps) {
    return (
        <Link className="opacity-70 hover:opacity-100 transition-opacity duration-300" href={href}>
            {title}
        </Link>
    )
}

export default LinkHeader
