"use client"
import CheckBox from "@/ui/core/CheckBox/CheckBox"
import Typography from "@/ui/core/Typography/Typography"
import Link from "next/link"
import React from "react"

type ApproveLicenseButtonProps = {
  approve: boolean
  setApprove: React.Dispatch<React.SetStateAction<boolean>>
}

const ApproveLicenseButton = ({ approve, setApprove }: ApproveLicenseButtonProps) => {
  const handleChange = () => setApprove(!approve)

  return (
    <div className="flex items-center my-6 gap-3">
      <CheckBox checked={approve} onChange={handleChange} />
      <Typography className="text-gray-500" variants="p">
        Даю согласие на обработку{" "}
        <Link href="/license" className="border-b hover:text-PrimaryBlack border-gray-400">
          персональных данных
        </Link>
      </Typography>
    </div>
  )
}

export default ApproveLicenseButton
