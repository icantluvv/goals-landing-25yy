import Button from "@/ui/core/Button/Button"
import Typography from "@/ui/core/Typography/Typography"
import Link from "next/link"
import React from "react"

const AnalysisButton = () => {
    return (
        <Link href={"/#application"} className="flex w-full md:max-w-[250px] z-10">
            <Button variant="primary" size="default" color="green">
                <Typography color="black" variants="button">
                    Подключить
                </Typography>
            </Button>
        </Link>
    )
}

export default AnalysisButton
