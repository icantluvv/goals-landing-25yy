import PageWrapper from "@/ui/shared/page-wrapper/page-wrapper"
import Typography from "@/ui/core/Typography/Typography"
import Script from "next/script"
import { PageSchema } from "@/constants/constants"
import { Metadata } from "next"
import { getStaticMeta } from "@/utils/getStaticMeta"
import { articles } from "@/app/(public)/blog/constants"
import ArticlesArray from "@/ui/feature/blog/ArticlesArray"

export const metadata: Metadata = { ...getStaticMeta("/blog") }

const BlogPage = () => {
    return (
        <>
            <Script
                id="breadcrumb-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(PageSchema)
                }}
            />
            <PageWrapper>
                <Typography className="mt-32" variants={"h1"}>
                    Статьи
                </Typography>
                <ArticlesArray articles={articles} />
            </PageWrapper>
        </>
    )
}

export default BlogPage
