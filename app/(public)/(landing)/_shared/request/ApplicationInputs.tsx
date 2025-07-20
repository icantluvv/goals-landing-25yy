"use client"

import { useState } from "react"
import Input from "@/ui/core/Input/Input"
import ApproveLicenseButton from "@/app/(public)/(landing)/_shared/request/ApproveLicenseButton"
import Button from "@/ui/core/Button/Button"
import Typography from "@/ui/core/Typography/Typography"
import axios from "axios"
import { useApplicationErrorModalStore } from "@/store/ApplicationErrorStore"
import { applicationSchema } from "@/schemas/applicationSchema"

const ApplicationInputs = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [orgCode, setOrgCode] = useState("")
  const [phone, setPhone] = useState("")
  const [approve, setApprove] = useState(false)

  const [loading, setLoading] = useState(false)

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    orgCode: false
  })

  const { addModal } = useApplicationErrorModalStore()

  const handleSubmit = async () => {
    if (!approve) return

    const result = applicationSchema.safeParse({
      phone,
      email,
      fullName: name,
      inn: orgCode
    })

    if (!result.success) {
      const formatted = result.error.format()
      setErrors({
        name: !!formatted.fullName?._errors?.length,
        email: !!formatted.email?._errors?.length,
        phone: !!formatted.phone?._errors?.length,
        orgCode: !!formatted.inn?._errors?.length
      })
      return
    }

    setErrors({ name: false, email: false, phone: false, orgCode: false })

    try {
      setLoading(true)
      const response = await axios.post("/api/contact", {
        name,
        email,
        orgCode,
        phone
      })

      if (response.status === 200) {
        window.location.reload()
      }
    } catch {
      addModal()
    }
  }

  return (
    <>
      <div className="flex w-full gap-[48px]">
        <Input
          placeholder="Телефон"
          type="text"
          mask="+{7} (000) 000-00-00"
          value={phone}
          className={`${errors.phone ? "border-red-500" : ""}`}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Input
          placeholder="Почта"
          type="email"
          value={email}
          className={`${errors.email ? "border-red-500" : ""}`}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex w-full flex-col gap-[24px]">
        <Input
          placeholder="ФИО"
          type="text"
          value={name}
          className={`${errors.name ? "border-red-500" : ""}`}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="ИНН Организации"
          type="text"
          mask="0000000000"
          value={orgCode}
          className={`${errors.orgCode ? "border-red-500" : ""}`}
          onChange={(e) => setOrgCode(e.target.value)}
        />
      </div>

      <ApproveLicenseButton setApprove={setApprove} approve={approve} />

      <div className="w-full xl:w-auto flex items-center">
        <Button
          size="default"
          color={approve && !loading ? "black" : "disable"}
          variant={approve && !loading ? "primary" : "disabled"}
          onClick={approve && !loading ? handleSubmit : undefined}
          disabled={!approve || loading}
        >
          <Typography color="white" variants="button">
            Отправить
          </Typography>
        </Button>
      </div>
    </>
  )
}

export default ApplicationInputs
