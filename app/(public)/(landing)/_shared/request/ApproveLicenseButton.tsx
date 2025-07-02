"use client"

import CheckBox from "@/ui/core/CheckBox/CheckBox"
import Typography from "@/ui/core/Typography/Typography"
import React, { useState } from "react"

const ApproveLicenseButton = () => {
    const [check, setCheck] = useState(false)

    function handleApprove() {
        setCheck((prev) => !prev)
    }

    return (
        <button type="button" onClick={handleApprove} className="flex items-center gap-[8px]">
            <CheckBox checked={check} onChange={handleApprove} />
            <Typography className="text-gray-500" variants="p">
                Даю согласие на обработку персональных данных
            </Typography>
        </button>
    )
}

export default ApproveLicenseButton
