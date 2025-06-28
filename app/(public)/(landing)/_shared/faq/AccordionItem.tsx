"use client"

import { useAccordionStore } from "@/store/accordionStore"
import Image from "next/image"
import hide_show from "@/public/hide_show.svg"

const AccordionItem = ({
  id,
  question,
  answer
}: {
  id: number
  question: string
  answer: string
}) => {
  const { openAccordion, setOpenAccordion } = useAccordionStore()
  const isOpen = openAccordion === id

  const toggleAccordion = () => {
    setOpenAccordion(isOpen ? null : id)
  }

  return (
    <div
      onClick={toggleAccordion}
      className={`border border-darkBlue/10 rounded-[24px] w-full p-[24px] flex flex-col cursor-pointer  ${
        isOpen ? "gap-y-[24px]" : "gap-y-0"
      } transition-all duration-300 select-none`}
    >
      <button className="flex items-center justify-between flex-1 cursor-pointer">
        <p className="font-semibold w-[85%] text-[1rem] md:text-[1.25rem] text-start cursor-pointer">
          {question}
        </p>
        <Image
          src={hide_show}
          alt="hide_show"
          className={`${
            isOpen ? "rotate-45" : "rotate-0"
          } transition-transform duration-200 w-[24px] h-[24px] md:w-[32x] md:h-[32px] cursor-pointer`}
        />
      </button>
      <div
        className={`${
          isOpen ? "h-auto opacity-100" : "h-0 opacity-0"
        } overflow-hidden transition-all`}
      >
        <p className="text-[0.875rem] md:text-[1rem] whitespace-pre-line lg:max-w-[95%]">
          {answer}
        </p>
      </div>
    </div>
  )
}

export default AccordionItem
