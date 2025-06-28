import Image from "next/image"
import dark_arrow from "@/public/dark_arrow.svg"
import goals from "@/public/first/GOALS.png"
import Link from "next/link"
import BackgroundCircles from "@/app/(public)/(landing)/_shared/hero/BackgroundCircles"

const FirstSection = () => {
  return (
    <section
      id="about"
      className="bg-gradient-custom w-full h-[70svh] lg:h-[100svh] flex flex-col relative overflow-hidden items-center lg:pt-[100px] scroll-mt-[100px]"
    >
      <BackgroundCircles />

      <div className="flex flex-col items-center flex-1 justify-center gap-[24px] z-10">
        <div className="w-full flex flex-col items-center gap-y-[24px]">
          <h1 className="text-[48px] leading-18 lg:text-[80px] font-bold text-WhiteText text-center ">
            Cистема лояльности
          </h1>
          <p
            className="text-[1.25rem] hidden md:flex leading-7 lg:text-[1.5rem] lg:leading-8 text-center w-[80vw] xl:w-[60vw] text-WhiteText">
            Ваши клиенты уже рассказывают о заведениях — пора управлять этим
            и извлекать выгоду!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          <Link
            href="#connect"
            className="px-[24px] py-[18px] rounded-full flex items-center justify-center gap-x-[10px] 
            font-semibold cursor-pointer text-white bg-darkBlue
          active:bg-darkBlue/75 "
          >
            Подключить
          </Link>
          <Link
            href="#forbusiness"
            className="px-[24px] py-[18px] rounded-full flex gap-x-[12px] bg-white text-darkBlue font-semibold
          active:bg-white/75 "
          >
            Как это работает?
            <Image width={24} height={24} src={dark_arrow} alt="arrow"></Image>
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
