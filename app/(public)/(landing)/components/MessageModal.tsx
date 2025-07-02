"use client"

import { useMessageModalStore } from "@/store/messageModalStore"
import Typography from "@/ui/core/Typography/Typography"

const MessageModal = () => {
    const { openMessageModal, setMessageModalOpen } = useMessageModalStore()

    if (openMessageModal) {
        return (
            <div className="w-full fixed z-[9000] bg-PrimaryBlack/30 h-screen flex items-center justify-center">
                <form className="bg-white fixed rounded-[24px] p-[24px] xl:p-[48px] w-[90vw] md:w-[70vw] xl:w-[50vw] flex flex-col gap-[24px]">
                    <Typography variants="h5" color="black">
                        Задайте Ваш вопрос
                    </Typography>

                    <input
                        type="email"
                        className="border-[1.5px] border-lightGray rounded-[12px] p-[12px] focus:outline-none"
                        placeholder="Ваша почта"
                    />

                    <textarea
                        className="resize-none placeholder:text-[16px] rounded-[12px] border-[1.5px] h-[200px] border-lightGray p-[12px] focus:outline-none"
                        placeholder="Ваш вопрос"
                    ></textarea>
                    <div className="flex w-full justify-end">
                        <button
                            type="submit"
                            className="bg-PrimaryBlack active:bg-PrimaryBlack/80 px-[28px] py-[12px] rounded-full text-WhiteText text-[14px] xl:text-[16px]"
                        >
                            <Typography variants="button">Отправить</Typography>
                        </button>
                    </div>

                    <div className="absolute right-[5%] top-[5%]">
                        <button
                            type="button"
                            onClick={setMessageModalOpen}
                            className="relative w-[18px] h-[18px]"
                        >
                            <div className="w-[18px] h-[1px] bg-PrimaryBlack rotate-45 absolute" />
                            <div className="w-[18px] h-[1px] bg-PrimaryBlack rotate-135 absolute" />
                        </button>
                    </div>
                </form>
            </div>
        )
    } else {
        return <></>
    }
}

export default MessageModal
