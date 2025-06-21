import Image from "next/image"
import dark_arrow from "@/public/dark_arrow.svg"
import goals from "@/public/first/GOALS.png"
import Link from "next/link"

const FirstSection = () => {
  return (
    <section
      id="about"
      className="bg-gradient-custom w-full h-[70svh] lg:h-[100svh] flex flex-col relative overflow-hidden items-center lg:pt-[100px] scroll-mt-[100px]"
    >
      <div
        className="w-[700px] h-[700px] md:w-[1200px] md:h-[1200px] 
      xl:w-[2000px] xl:h-[2000px] rounded-[50%] left-[-70vw] top-[-75vh] absolute bg-[#4A69A3]/76 blur-[100px] move-slow"
      ></div>
      <div
        className="w-[500px] h-[500px] md:w-[1000px] md:h-[1000px] 
      xl:w-[1560px] xl:h-[1560px] rounded-[50%] lg:left-[30vw] lg:top-[-100vh] absolute bg-[#627DB1]/46 blur-[100px] lg:move-medium"
      ></div>
      <div
        className="w-[500px] h-[500px] md:w-[750px] md:h-[750px] 
      xl:w-[1283px] xl:h-[1283px] rounded-[50%] left-[calc(70%-641px)] top-[-50vh] absolute bg-[#8EA8DB]/40 blur-[100px] move-fast"
      ></div>

      <div className="flex flex-col items-center flex-1 justify-center gap-[24px] z-10">
        <div className="w-full flex flex-col items-center gap-y-[24px]">
          <h1 className="text-[48px] leading-18 lg:text-[80px] font-bold text-WhiteText text-center ">
            Cистема лояльности
          </h1>
          <p className="text-[1.25rem] hidden md:flex leading-7 lg:text-[1.5rem] lg:leading-8 text-center w-[80vw] xl:w-[60vw] text-WhiteText">
            Ваши клиенты уже рассказывают о заведениях — пора управлять этим
            и извлекать выгоду!
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
