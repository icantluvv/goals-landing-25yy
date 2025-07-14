import Image from "next/image"
import phone from "@/public/phone.png"
import Typography from "@/ui/core/Typography/Typography"
import Input from "@/ui/core/Input/Input"
import ApproveLicenseButton from "../_shared/request/ApproveLicenseButton"
import Button from "@/ui/core/Button/Button"

const Application = () => {
  return (
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
        <div className="flex w-full gap-[48px]">
          <Input placeholder="Телефон" type="text" mask="+{7} (000) 000-00-00" />
          <Input placeholder="Почта" className="flex-1" type="email" />
        </div>
        <div className="flex w-full flex-col gap-[24px]">
          <Input placeholder="ФИО" type="text" />
          <Input placeholder="ИНН Организации" type="text" />
        </div>
        <ApproveLicenseButton />

        <div className="w-full xl:w-auto">
          <Button size="default" color="black" variant="primary">
            <Typography color="white" variants="button">
              Отправить
            </Typography>
          </Button>
        </div>
      </form>

      <div className="hidden xl:flex w-1/2 justify-center relative">
        <Image
          src={phone}
          width={358}
          height={728}
          className="absolute top-[-10rem] right-0 "
          alt="phone"
        />
      </div>
    </section>
  )
}

export default Application
