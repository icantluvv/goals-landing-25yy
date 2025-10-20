import { faqData } from "@/constants/faqData"
import AskQuestion from "../../../app/(public)/(home)/_shared/faq/AskQuestion"
import AccordionItem from "@/app/(public)/(home)/_shared/faq/AccordionItem"
import PageWrapper from "@/ui/shared/page-wrapper/page-wrapper"

const FAQ = () => {
    return (
        <PageWrapper>
            <section
                id="faq"
                className="w-full flex flex-col items-center xl:items-start xl:flex-row md:gap-y-[40px] gap-[24px] scroll-mt-[200px]"
            >
                <ul className="flex flex-col flex-2 gap-y-[12px]">
                    {faqData.map(({ id, question, answer }) => (
                        <AccordionItem key={id} id={id} question={question} answer={answer} />
                    ))}
                </ul>
                <AskQuestion />
            </section>
        </PageWrapper>
    )
}

export default FAQ
