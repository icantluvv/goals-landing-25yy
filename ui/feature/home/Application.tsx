import Typography from "@/ui/core/Typography/Typography"
import ApplicationRequestErrorModal from "@/app/(public)/(home)/_shared/modals/ApplicationRequestErrorModal"
import ApplicationInputs from "@/app/(public)/(home)/_shared/request/ApplicationInputs"
import PageWrapper from "@/ui/shared/page-wrapper/page-wrapper"
import Image from "next/image"

import phone from "@/public/phone.png"

function Application() {
  return (
    <PageWrapper>
      <section id="connect" className="scroll-mt-[200px] xl:flex relative mb-8 xl:mb-16">
        <form className="block md:max-w-full lg:max-w-[80vw] xl:max-w-[60vw]">
          <div className="block">
            <Typography color="black" variants="h2">
              Оставьте заявку!
            </Typography>

            <Typography color="black" className="my-3" variants="accent">
              Мы с вами свяжемся для продолжения регистрации
            </Typography>
          </div>

          <ApplicationInputs />
        </form>

        <div className="hidden xl:flex w-1/2 justify-center relative">
          <Image
            src={phone}
            width={358}
            height={728}
            className="absolute top-[0rem] right-0"
            alt="phone"
          />
        </div>
      </section>

      <ApplicationRequestErrorModal />
    </PageWrapper>
  )
}

export default Application
