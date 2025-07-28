export const IMAGE_HOST = process.env.NEXT_PUBLIC_CONTENT_URL || ""
export const getExternalLink = (relativePath: string) => IMAGE_HOST + relativePath
