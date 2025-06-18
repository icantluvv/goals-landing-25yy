"use client"

import { useMessageModalStore } from "@/store/messageModalStore"

const MessageModal = () => {
  const { openMessageModal, setMessageModalOpen } = useMessageModalStore()

  if (openMessageModal) {
    return (
      <div className="w-full fixed z-[9000] bg-PrimaryBlack/30 h-screen flex items-center justify-center">
        <form className="bg-white fixed rounded-[24px] p-[24px] xl:p-[48px] w-1/3 flex flex-col gap-[24px]">
          <h5 className="text-PrimaryBlack text-[24px] font-medium">
            Задайте Ваш вопрос
          </h5>
          <input
            type="email"
            className="border-[1.5px] border-lightGray  rounded-[12px] p-[12px]"
            placeholder="Ваша почта"
          />
          <textarea
            className="resize-none placeholder:text-[16px] rounded-[12px] border-[1.5px] h-[200px] border-lightGray p-[12px]"
            placeholder="Ваш вопрос"
            name=""
            id=""
          ></textarea>
          <div className="flex w-full justify-end">
            <button
              type="submit"
              className="bg-PrimaryBlack active:bg-PrimaryBlack/80 px-[28px] py-[12px] rounded-full text-WhiteText text-[14px] xl:text-[16px]"
            >
              Отправить
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
