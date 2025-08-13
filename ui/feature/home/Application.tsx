import Image from "next/image"
import phone from "@/public/phone.png"
import Typography from "@/ui/core/Typography/Typography"
import ApplicationRequestErrorModal from "@/app/(public)/(home)/_shared/modals/ApplicationRequestErrorModal"
import ApplicationInputs from "@/app/(public)/(home)/_shared/request/ApplicationInputs"

const Application = () => {
  return (
    <>
      <section
        id="connect"
        className="container scroll-mt-[200px] relaive flex flex-col xl:flex-row w-full items-center justify-start xl:gap-[80px] mb-[40px] xl:mb-[80px]"
      >
        <form className="flex w-full md:max-w-[70vw] lg:max-w-auto flex-col items-center xl:items-start xl:w-full gap-[24px]">
          <div className="flex flex-col text-center xl:text-start gap-[6px]">
            <Typography color="black" variants="h2">
              Оставьте заявку!
            </Typography>

            <Typography color="black" variants="accent">
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
            className="absolute top-[-10rem] right-0"
            alt="phone"
          />
        </div>
      </section>

      <ApplicationRequestErrorModal />
    </>
  )
}

export default Application
