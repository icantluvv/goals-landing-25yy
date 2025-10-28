import React from "react"
import Link from "next/link"
import Typography from "@/ui/core/Typography/Typography"
import type { ArticleSummarySchema } from "@/packages/api/codegen"
import Image from "next/image"

type ArticleCardProps = {
    article: ArticleSummarySchema
}
function ArticleCard({ article }: ArticleCardProps) {
    return (
        <Link
            className="group w-full md:w-[calc(50%-24px)] xl:w-[calc(33%-32px)] md:max-w-[460px]"
            href={`/blog/${article.slug}`}
        >
            <div className="relative bg-PrimaryBlack/5 rounded-lg min-h-[168px] sm:min-h-[200px] xl:min-h-[240px] group-hover:shadow-md transition-shadow duration-300">
                <Image src={article.image || ""} alt="image-article" fill />
            </div>

            <div className="mt-3 md:mt-4 group-hover:text-GreenActive transition-colors duration-300">
                <Typography variants="h6">{article.title}</Typography>
            </div>

            <div className="mt-2">
                <Typography variants="p">{article.summary}</Typography>
            </div>
        </Link>
    )
}

export default ArticleCard
