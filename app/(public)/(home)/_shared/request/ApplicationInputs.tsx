"use client"

import { useState } from "react"
import Input from "@/ui/core/Input/Input"
import Button from "@/ui/core/Button/Button"
import Typography from "@/ui/core/Typography/Typography"
import axios from "axios"
import { useApplicationErrorModalStore } from "@/store/ApplicationErrorStore"
import { applicationSchema } from "@/schemas/applicationSchema"
import ApproveLicenseButton from "@/app/(public)/(home)/_shared/request/ApproveLicenseButton"
import clsx from "clsx"

const ApplicationInputs = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        orgCode: "",
        phone: ""
    })

    const [errors, setErrors] = useState<Record<string, boolean>>({})
    const [approve, setApprove] = useState(false)
    const [loading, setLoading] = useState(false)

    const { addModal } = useApplicationErrorModalStore()

    const handleChange = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [key]: e.target.value })
    }

    const getInputClass = (field: string) => (errors[field] ? "border-red-500" : "")

    const handleSubmit = async () => {
        if (!approve) return

        const result = applicationSchema.safeParse({
            phone: form.phone,
            email: form.email,
            fullName: form.name,
            inn: form.orgCode
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

        setErrors({})

        try {
            setLoading(true)
            const response = await axios.post("/api/contact", {
                name: form.name,
                email: form.email,
                orgCode: form.orgCode,
                phone: form.phone
            })

            if (response.status === 200) {
                window.location.reload()
            }
        } catch {
            addModal()
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div className="flex w-full gap-[48px]">
                <Input
                    placeholder="Телефон"
                    type="text"
                    mask="+{7} (000) 000-00-00"
                    value={form.phone}
                    className={getInputClass("phone")}
                    onChange={handleChange("phone")}
                />
                <Input
                    placeholder="Почта"
                    type="email"
                    value={form.email}
                    className={getInputClass("email")}
                    onChange={handleChange("email")}
                />
            </div>

            <div className="block mt-4">
                <Input
                    placeholder="Как к вам обращаться?"
                    type="text"
                    value={form.name}
                    className={getInputClass("name")}
                    onChange={handleChange("name")}
                />
                <Input
                    placeholder="ИНН Организации"
                    type="text"
                    mask="0000000000"
                    value={form.orgCode}
                    className={clsx(getInputClass("orgCode"), "mt-2")}
                    onChange={handleChange("orgCode")}
                />
            </div>

            <ApproveLicenseButton setApprove={setApprove} approve={approve} />

            <div className="block md:max-w-1/3">
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
