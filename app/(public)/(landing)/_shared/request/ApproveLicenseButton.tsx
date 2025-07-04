"use client"

import Button from "@/ui/core/Button/Button"
import CheckBox from "@/ui/core/CheckBox/CheckBox"
import Typography from "@/ui/core/Typography/Typography"
import React, { useState } from "react"

const ApproveLicenseButton = () => {
  const [check, setCheck] = useState(false)

  function handleApprove() {
    setCheck((prev) => !prev)
  }

  return (
    <Button type="button" onClick={handleApprove} size="custom">
      <CheckBox checked={check}  />
      <Typography className="text-gray-500" variants="p">
        Даю согласие на обработку персональных данных
      </Typography>
    </Button>
  )
}

export default ApproveLicenseButton
