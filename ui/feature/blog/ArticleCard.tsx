import React from "react"
import Link from "next/link"
import Image from "next/image"
import Typography from "@/ui/core/Typography/Typography"
import { Article } from "@/app/(public)/blog/types"

function ArticleCard({ id, title, content }: Article) {
    return (
        <Link
            key={id}
            className="group w-full md:w-[calc(50%-24px)] xl:w-[calc(33%-32px)] md:max-w-[460px]"
            href={`/blog/${id}`}
        >
            <div className="relative bg-PrimaryBlack/5 rounded-lg min-h-[168px] sm:min-h-[200px] xl:min-h-[240px] group-hover:shadow-md transition-shadow duration-300">
                <Image src={"/"} alt={"image-article"} fill />
            </div>

            <div className="mt-3 md:mt-4 group-hover:text-GreenActive transition-colors duration-300">
                <Typography variants="h6">{title}</Typography>
            </div>

            <div className="mt-2">
                <Typography variants="p">{content}</Typography>
            </div>
        </Link>
    )
}

export default ArticleCard
