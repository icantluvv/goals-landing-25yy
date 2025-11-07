import PageWrapper from "@/ui/shared/page-wrapper/page-wrapper"
import React from "react"
import Image from "next/image"
import { getArticleBlogApiArticlesSlugGet } from "@/packages/api/codegen"

import parse from "html-react-parser"
import { sanitizeHtmlContent } from "@/utils/sanitizeHtmlContent"

interface PageProps {
    params: Promise<{ slug: string }>
}

export default async function ArticlePage({ params }: PageProps) {
    const { slug } = await params
    const article = await getArticleBlogApiArticlesSlugGet(slug)
    const sanitizedContent = sanitizeHtmlContent(article.content_html)

    return (
        <PageWrapper>
            <div className="my-32">
                <div className="w-full lg:max-w-[60vw] xl:w-[45vw] xl:max-w-[800px]">
                    <div className="w-full h-52 sm:h-72 md:h-80 xl:h-96 relative border rounded-xl">
                        <Image
                            fill
                            src={"/"}
                            alt=""
                            unoptimized
                            className="object-cover rounded-xl"
                        />
                    </div>

                    <div className="mt-8 prose max-w-none">{parse(sanitizedContent)}</div>
                </div>
            </div>
        </PageWrapper>
    )
}
