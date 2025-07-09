import Typography from "@/ui/core/Typography/Typography"
import Link from "next/link"
import React from "react"

const LinksGroup = ({
  title,
  items
}: {
  title: string
  items: { title: string; href: string }[]
}) => (
  <div className="flex flex-col gap-4">
    <h4 className="text-PrimaryBlack">{title}</h4>
    <div className="flex flex-col xl:flex-row gap-x-[100px]">
      <div className="flex flex-col gap-y-3">
        {items.map(({ title, href }) => (
          <Link key={title} href={href} className="hover:text-PrimaryBlack ">
            <Typography variants="p">{title}</Typography>
          </Link>
        ))}
      </div>
    </div>
  </div>
)

export default LinksGroup
