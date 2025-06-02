import Image from "next/image"
import biglogo from "@/public/big_logo.svg"
import dark_arrow from "@/public/dark_arrow.svg"

const FirstSection = () => {
  return (
    <section
      id="about"
      className="bg-gradient-custom w-full md:h-[100svh] xl:h-[80svh] 2xl:max-h-[700px] relative overflow-hidden flex justify-between items-center md:px-[6.5vw] scroll-mt-[100px]"
    >
      <Image
        alt="biglogo"
        src={biglogo}
        className="w-[950px] h-[950px] absolute top-[-10vh] right-0 2xl:scale-[1]"
      ></Image>

      <div className="z-[10] flex flex-col gap-y-[24px] w-full px-[3vw] xl:px-0 py-[64px]">
        <h1 className="text-[3rem] lg:text-[4rem] font-semibold text-white text-center lg:text-start">
          Goals — <br />
          система лояльности
        </h1>
        <p className="text-[2rem] text-BrandDarkBlue">
          Ваши клиенты уже рассказывают <br />
          о заведениях - пора управлять этим <br />
          и извлекать выгоду!
        </p>

        <div className="flex flex-row gap-x-2">
          <a
            href="#connect"
            className="p-[12px] md:px-[24px] md:p-[18px] rounded-[48px] flex flex-1 items-center justify-center gap-x-[10px] font-semibold cursor-pointer text-white bg-darkBlue
          active:bg-darkBlue/75 transition-colors"
          >
            <span>Подключить</span>
          </a>
          <a
            href="#forbusiness"
            className="flex-1 px-[24px] py-[18px] rounded-[48px] flex gap-x-[10px] bg-white text-darkBlue font-semibold cursor-pointer
          active:bg-white/75 transition-colors"
          >
            <span>Как это работает?</span>
            <Image width={24} height={24} src={dark_arrow} alt="arrow"></Image>
          </a>
        </div>
      </div>
    </section>
  )
}

export default FirstSection
