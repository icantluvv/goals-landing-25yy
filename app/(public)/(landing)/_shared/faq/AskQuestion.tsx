"use client"

import Image from "next/image"
import big_logo from "@/public/big_logo.svg"
import { useMessageModalStore } from "@/store/messageModalStore"

const AskQuestion = () => {
  const { setMessageModalOpen } = useMessageModalStore()
  return (
    <div
      className="flex-1 bg-gradient-custom rounded-[25px] lg:rounded-[35px] md:min-h-[320px] xl:min-w-[500px] h-[350px] p-[24px] md:p-[48px]
         flex flex-col justify-between relative gap-[24px] shadow-md"
    >
      <div className="flex flex-col gap-y-[12px] w-[60%] z-[1000]">
        <h4 className="text-[1.25rem] md:text-[1.5rem] text-WhiteText font-semibold select-none">
          Напишите нам!
        </h4>
        <p className="text-WhiteText text-[0.875rem] md:text-[1rem] select-none">
          Вы можете задать свой вопрос нам лично! Отправьте письмо,
          а мы постараемся ответить
        </p>
      </div>

      <div className="w-full z-[1000] flex">
        <button
          onClick={() => setMessageModalOpen()}
          className="w-full py-[20px] md:py-[24px] text-[1rem] rounded-[25px] bg-white text-darkBlue font-semibold cursor-pointer 
            active:bg-darkBlue/40 active:text-WhiteText select-none"
        >
          Задать вопрос в Goals
        </button>
      </div>

      <Image
        src={big_logo}
        alt="big_logo"
        className="absolute w-[110px] h-[110px] md:w-[130px] md:h-[130px] right-[24px] md:right-[48px] top-[12px] md:top-[36px]"
      />
    </div>
  )
}

export default AskQuestion
