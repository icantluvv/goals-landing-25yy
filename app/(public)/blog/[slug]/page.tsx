import Typography from "@/ui/core/Typography/Typography"
import PageWrapper from "@/ui/shared/page-wrapper/page-wrapper"
import React from "react"
import Image from "next/image"

const ArticlePage = ({ params }: { params: { slug: string } }) => {
  return (
    <PageWrapper>
      <div className="my-32">
        <div className="w-full lg:max-w-[60vw] xl:w-[45vw] xl:max-w-[800px]">
          <div className="w-full h-52 sm:h-72 md:h-80 xl:h-96 relative border rounded-xl">
            <Image fill src={"/"} alt={"article_image"}></Image>
          </div>

          <Typography className="mt-8" variants={"h1"}>
            Статья №{params.slug}
          </Typography>
          <Typography variants="h2" className="mt-8">
            Заголовок статьи
          </Typography>
          <Typography className="mt-4" variants="p">
            описание описание описание описание описание описание описание описание
          </Typography>
          <Typography variants="h3" className="mt-8">
            Заголовок статьи 2
          </Typography>
        </div>
      </div>
    </PageWrapper>
  )
}

export default ArticlePage
