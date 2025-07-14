"use client"
import CheckBox from "@/ui/core/CheckBox/CheckBox"
import Typography from "@/ui/core/Typography/Typography"
import Link from "next/link"
import React, { useState, useCallback } from "react"

const ApproveLicenseButton = () => {
  const [check, setCheck] = useState(false)

  const handleApprove = useCallback(() => {
    setCheck((prev) => !prev)
  }, [])

  return (
    <div className="flex items-center gap-3">
      <CheckBox checked={check} onChange={handleApprove} />
      <Typography className="text-gray-500" variants="p">
        Даю согласие на обработку{" "}
        <Link href="/license " className="border-b hover:text-PrimaryBlack border-gray-400">
          персональных данных
        </Link>
      </Typography>
    </div>
  )
}

export default ApproveLicenseButton
