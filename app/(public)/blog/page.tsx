import React from "react"
import PageWrapper from "@/ui/shared/page-wrapper/page-wrapper"
import Typography from "@/ui/core/Typography/Typography"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { PageSchema } from "@/constants/constants"
import { Metadata } from "next"
import { getStaticMeta } from "@/utils/getStaticMeta"

export const metadata: Metadata = { ...getStaticMeta("/blog") }

const BlogPage = () => {
  const articles = [
    { id: 1, title: "Article 1", content: "Content of article 1" },
    { id: 2, title: "Article 2", content: "Content of article 2" },
    { id: 3, title: "Article 3", content: "Content of article 3" },
    { id: 4, title: "Article 4", content: "Content of article 4" },
    { id: 5, title: "Article 4", content: "Content of article 4" },
    { id: 6, title: "Article 4", content: "Content of article 4" },
    { id: 7, title: "Article 4", content: "Content of article 4" }
  ]

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

        <div className="flex flex-wrap gap-4 sm:gap-6 xl:gap-8 my-8">
          {articles.map((item) => {
            return (
              <Link
                key={item.id}
                className="group w-full md:w-[calc(50%-24px)] xl:w-[calc(33%-32px)] md:max-w-[460px]"
                href={`/blog/${item.id}`}
              >
                <div className="relative bg-PrimaryBlack/5 rounded-lg min-h-[168px] sm:min-h-[200px] xl:min-h-[240px] group-hover:shadow-md transition-shadow duration-300">
                  <Image src={"/"} alt={"image-article"} fill />
                </div>

                <div className="mt-3 md:mt-4 group-hover:text-GreenActive transition-colors duration-300">
                  <Typography variants="h6">{item.title}</Typography>
                </div>

                <div className="mt-2">
                  <Typography variants="p">{item.content}</Typography>
                </div>
              </Link>
            )
          })}
        </div>
      </PageWrapper>
    </>
  )
}

export default BlogPage
