import { Metadata } from "next"

import metaData from "@/lib/data/meta.json"

export const getBasicPath = (path: string) => {
  return `${process.env.NEXT_PUBLIC_FRONT_URL || ""}${path}`
}

export const getStaticMeta = (pageName: keyof typeof metaData): Metadata => {
  const meta = metaData[pageName]

  const baseUrl = process.env.NEXT_PUBLIC_FRONT_URL || ""

  return {
    title: meta.title,
    icons: {
      icon: [
        { url: "/favicon.ico", type: "image/x-icon" },
        { url: "/favicon.svg", type: "image/svg+xml" }
      ],
      apple: [{ url: "/apple-touch-icon.png" }]
    },
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      siteName: meta.title,
      type: "website",
      url: getBasicPath(pageName),
      images:
        "https://sun9-57.userapi.com/s/v1/ig2/mVybOW8l9Cpx_7-0EAExCjJL4PUKNpJL6Bj6digI5wBMa1ljaGvYtB8FdM-HiGONY5CfMdHw25pWaTKD6IV6535W.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,600x600&from=bu&cs=600x0"
    },
    twitter: {
      card: "summary",
      title: meta.title,
      description: meta.description,
      images:
        "https://sun9-57.userapi.com/s/v1/ig2/mVybOW8l9Cpx_7-0EAExCjJL4PUKNpJL6Bj6digI5wBMa1ljaGvYtB8FdM-HiGONY5CfMdHw25pWaTKD6IV6535W.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,600x600&from=bu&cs=600x0"
    },
    metadataBase: new URL("/", baseUrl),
    alternates: {
      canonical: `${baseUrl}${pageName}`
    }
  }
}
