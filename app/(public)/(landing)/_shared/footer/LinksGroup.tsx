import Typography from "@/ui/core/Typography/Typography"
import clsx from "clsx"
import Link from "next/link"
import React from "react"

type Links = {
  title: string
  href: string
}

type LinksGroupProps = {
  className?: string
  title: string
  items: Links[]
}

const LinksGroup = ({ title, items, className }: LinksGroupProps) => (
  <div className={clsx("flex flex-col gap-4", className)}>
    <Typography variants="h6">{title}</Typography>

    <div className="flex flex-col gap-3">
      {items.map(({ title, href }) => (
        <Link key={title} href={href} className="hover:scale-105">
          <Typography variants="p">{title}</Typography>
        </Link>
      ))}
    </div>
  </div>
)

export default LinksGroup
