import { faqData } from "@/constants/faqData"
import AskQuestion from "../_shared/faq/AskQuestion"
import AccordionItem from "@/app/(public)/(landing)/_shared/faq/AccordionItem"

const FAQ = () => {
  return (
    <section
      id="FAQ"
      className="w-full flex flex-col xl:flex-row md:gap-y-[40px] gap-[24px] px-[4vw] xl:px-0 scroll-mt-[100px]"
    >
      <ul className="flex flex-col flex-2 gap-y-[12px]">
        {faqData.map(({ id, question, answer }) => (
          <AccordionItem key={id} id={id} question={question} answer={answer} />
        ))}
      </ul>
      <AskQuestion />
    </section>
  )
}

export default FAQ
