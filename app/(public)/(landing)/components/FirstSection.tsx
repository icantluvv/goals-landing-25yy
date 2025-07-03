import Image from "next/image"
import dark_arrow from "@/public/dark_arrow.svg"
import goals from "@/public/first/GOALS.png"
import Link from "next/link"
import BackgroundCircles from "@/app/(public)/(landing)/_shared/hero/BackgroundCircles"
import Typography from "@/ui/core/Typography/Typography"
import Button from "@/ui/core/Button/Button"

const FirstSection = () => {
  return (
    <section
      id="about"
      className="bg-gradient-custom w-full h-[70svh] lg:h-[100svh] flex flex-col relative overflow-hidden items-center lg:pt-[100px] scroll-mt-[100px]"
    >
      <BackgroundCircles />

      <div className="flex flex-col items-center flex-1 justify-center gap-[24px] z-10">
        <div className="w-full flex flex-col items-center gap-y-[24px]">
          <Typography center color={"white"} variants={"h1"}>
            Cистема лояльности
          </Typography>

          <div className={"w-[60vw]"}>
            <Typography center color={"white"} variants={"accent"} className={"hidden md:flex"}>
              Ваши клиенты уже рассказывают о заведениях — пора управлять этим и извлекать выгоду!
            </Typography>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          <Link href="/#connect">
            <Button
              size="default"
              type="button"
              className="gap-x-[10px] px-[24px] py-[18px]"
              color="darkBlue"
              variant="primary"
            >
              <Typography color="white" variants="button">
                Подключить
              </Typography>
            </Button>
          </Link>

          <Link href="/#forbusiness">
            <Button variant="primary" size="default" color="white">
              <Typography className="text-darkBlue" variants="button">
                Как это работает?
              </Typography>
              <Image width={24} height={24} src={dark_arrow} alt="arrow"></Image>
            </Button>
          </Link>
        </div>
      </div>
      <div className="w-[100vw] max-w-none z-10">
        <Image src={goals} alt={"goals"} className="scale-150 md:scale-100" />
      </div>
    </section>
  )
}

export default FirstSection
