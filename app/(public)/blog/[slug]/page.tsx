import Typography from "@/ui/core/Typography/Typography"
import PageWrapper from "@/ui/shared/page-wrapper/page-wrapper"
import React from "react"

const ArticlePage = ({ params }: { params: { slug: string } }) => {
    return (
        <PageWrapper>
            <Typography variants={"h1"}>Статья №{params.slug}</Typography>
            <Typography variants="h2" className="mt-8">
                Заголовок статьи
            </Typography>
            <Typography className="mt-4" variants="p">
                описание описание описание описание описание описание описание
                описание
            </Typography>
            <Typography variants="h3" className="mt-8">
                Заголовок статьи 2
            </Typography>
        </PageWrapper>
    )
}

export default ArticlePage
