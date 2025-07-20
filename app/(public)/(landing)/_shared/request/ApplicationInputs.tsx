"use client"

import { useState } from "react"
import Input from "@/ui/core/Input/Input"
import ApproveLicenseButton from "@/app/(public)/(landing)/_shared/request/ApproveLicenseButton"
import Button from "@/ui/core/Button/Button"
import Typography from "@/ui/core/Typography/Typography"
import axios from "axios"
import { useApplicationErrorModalStore } from "@/store/ApplicationErrorStore"

const ApplicationInputs = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [orgCode, setOrgCode] = useState("")
  const [phone, setPhone] = useState("")
  const [approve, setApprove] = useState(false)

  const { addModal } = useApplicationErrorModalStore()

  const handleSubmit = async () => {
    if (!approve) return

    try {
      const response = await axios.post("/api/contact", {
        name,
        email,
        orgCode,
        phone
      })

      if (response.status === 200) {
        setName("")
        setPhone("")
        setEmail("")
        setOrgCode("")
      }
    } catch {
      addModal()
    } finally {
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
          onChange={(e) => setPhone(e.target.value)}
        />
        <Input
          placeholder="Почта"
          className="flex-1"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex w-full flex-col gap-[24px]">
        <Input
          placeholder="ФИО"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="ИНН Организации"
          type="text"
          value={orgCode}
          onChange={(e) => setOrgCode(e.target.value)}
        />
      </div>

      <ApproveLicenseButton setApprove={setApprove} approve={approve} />

      <div className="w-full xl:w-auto flex items-center">
        <Button
          size={"default"}
          color={approve ? "black" : "disable"}
          variant={approve ? "primary" : "disabled"}
          onClick={approve ? handleSubmit : undefined}
          disabled={!approve}
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
