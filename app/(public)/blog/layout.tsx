import DefaultLayout from "@/ui/shared/default-layout/default-layout"
import React from "react"

const BlogLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return <DefaultLayout>{children}</DefaultLayout>
}

export default BlogLayout
