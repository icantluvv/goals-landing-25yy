import React from "react"
import ArticleCard from "@/ui/feature/blog/ArticleCard"
import { Article } from "@/app/(public)/blog/types"

export type ArticlesArrayProps = {
    articles: Article[]
}

function ArticlesArray({ articles }: ArticlesArrayProps) {
    return (
        <div className="flex flex-wrap gap-4 sm:gap-6 xl:gap-8 my-8">
            {articles.map((item) => {
                return (
                    <ArticleCard
                        key={item.id}
                        id={item.id}
                        content={item.content}
                        title={item.title}
                    />
                )
            })}
        </div>
    )
}

export default ArticlesArray
