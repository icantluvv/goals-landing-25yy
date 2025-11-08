"use client"

import { useMessageModalStore } from "@/store/messageModalStore"
import Button from "@/ui/core/Button/Button"
import Input from "@/ui/core/Input/Input"
import Typography from "@/ui/core/Typography/Typography"
import { useState } from "react"
import ApproveLicenseButton from "../request/ApproveLicenseButton"
import { messageSchema } from "@/schemas/messageSchema"
import axios from "axios"
import { useApplicationErrorModalStore } from "@/store/ApplicationErrorStore"

const MessageModal = () => {
    const { openMessageModal, setMessageModalOpen } = useMessageModalStore()
    const { addModal } = useApplicationErrorModalStore()

    const [form, setForm] = useState({
        email: "",
        message: ""
    })

    const [approve, setApprove] = useState(false)
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState<Record<string, boolean>>({})

    const handleChange =
        (key: keyof typeof form) =>
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setForm({ ...form, [key]: e.target.value })
        }

    const getInputClass = (field: string) => (errors[field] ? "border-red-500" : "")

    const sendMessage = async () => {
        if (!approve) return

        const result = messageSchema.safeParse(form)

        if (!result.success) {
            const formatted = result.error.format()

            setErrors({
                email: !!formatted.email?._errors?.length,
                message: !!formatted.message?._errors?.length
            })

            console.log("Validation errors:", formatted)
            return
        }

        setErrors({})

        try {
            setLoading(true)
            const response = await axios.post("/api/send-message", {
                email: form.email,
                message: form.message
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

    if (!openMessageModal) return null

    return (
        <div className="w-full fixed z-[9000] bg-PrimaryBlack/30 h-screen flex items-center justify-center">
            <form className="bg-white fixed rounded-[24px] p-[24px] xl:p-[48px] w-[90vw] md:w-[70vw] xl:w-[50vw] flex flex-col gap-[24px]">
                <Typography variants="h5" color="black">
                    Задайте Ваш вопрос
                </Typography>

                <Input
                    placeholder="Почта"
                    type="email"
                    value={form.email}
                    className={`border-[1.5px] border-lightGray rounded-[12px] focus:outline-none ${getInputClass(
                        "email"
                    )}`}
                    onChange={handleChange("email")}
                />

                <textarea
                    onChange={handleChange("message")}
                    value={form.message}
                    className={`resize-none placeholder:text-[16px] rounded-[12px] border-[1.5px] h-[200px] p-[12px] focus:outline-none ${
                        errors.message ? "border-red-500" : "border-lightGray"
                    }`}
                    placeholder="Ваш вопрос (не менее 100 символов)"
                ></textarea>

                <ApproveLicenseButton setApprove={setApprove} approve={approve} />

                <div className="flex w-full justify-end">
                    <Button
                        onClick={approve && !loading ? sendMessage : undefined}
                        variant={approve && !loading ? "secondary" : "disabled"}
                        color={approve && !loading ? "black" : "disable"}
                        size="default"
                        disabled={!approve || loading}
                    >
                        <Typography variants="button" color="white">
                            Отправить
                        </Typography>
                    </Button>
                </div>

                <div className="absolute right-[5%] top-[5%]">
                    <Button
                        type="button"
                        variant="secondary"
                        color="empty"
                        onClick={setMessageModalOpen}
                        className="relative w-[18px] h-[18px]"
                    >
                        <div className="w-[18px] h-[1px] bg-PrimaryBlack rotate-45 absolute" />
                        <div className="w-[18px] h-[1px] bg-PrimaryBlack rotate-135 absolute" />
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default MessageModal
