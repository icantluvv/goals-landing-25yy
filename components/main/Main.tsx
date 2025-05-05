import Image from "next/image"
import React from "react"
import biglogo from "@/public/big_logo.svg"
import arrow from "@/public/arrow.svg"
import dark_arrow from "@/public/dark_arrow.svg"

const Main = () => {
  return (
    <main className="w-full flex flex-col gap-y-10 mt-[12vh]">
      <section className="bg-gradient-custom w-full h-[60vh] rounded-[50px] relative overflow-hidden flex justify-between items-center p-[56px] shadow-xl">
        <Image
          alt="biglogo"
          src={biglogo}
          className="absolute top-[-18vh] left-[27vw]"
          width={950}
          height={950}
        ></Image>

        <div className="z-[10] flex flex-col gap-y-[24px] max-w-[30vw]">
          <h1 className="text-[3rem] font-bold text-white">
            Goals. <br />
            Do-Goals. Goals.
          </h1>
          <p className="text-white text-[1rem]">
            Это описание Это описание Это описание Это описание Это описание Это
            описание Это описание Это описание
          </p>

          <div className="flex gap-x-2">
            <button className="p-[18px] border-2 rounded-[48px] border-darkBlue flex gap-x-[10px] font-semibold cursor-pointer text-darkBlue">
              JOIN THE GOALS
            </button>
            <button className="p-[18px] border-2 rounded-[48px] border-darkBlue flex gap-x-[10px] text-white font-semibold cursor-pointer">
              <Image
                width={24}
                height={24}
                src={dark_arrow}
                alt="arrow"
              ></Image>
            </button>
          </div>
        </div>

        <div className="w-1/4 z-[10] flex flex-col gap-y-[24px] h-full">
          <div className="bg-white rounded-[55px] w-full flex-1 flex"></div>
          <div className="flex flex-wrap gap-x-2 justify-end">
            <button className="p-[18px] border-2 rounded-[48px] border-white flex gap-x-[10px] text-white font-semibold cursor-pointer items-center">
              Бизнесу
              <Image src={arrow} alt="arrow"></Image>
            </button>
            <button className="p-[18px] border-2 rounded-[48px] border-white flex gap-x-[10px] text-white font-semibold cursor-pointer items-center">
              Клиенту
              <Image src={arrow} alt="arrow"></Image>
            </button>
          </div>
        </div>
      </section>

      <section></section>

      <section className="w-full flex gap-6 flex-wrap">
        <div className="bg-branGreen basis-[calc(20%-1rem)] h-[50vh] rounded-[70px] shadow-xl"></div>
        <div className="bg-lightGray basis-[calc(20%-1rem)] h-[50vh] rounded-[70px] shadow-xl"></div>
        <div className="bg-darkBlue basis-[calc(60%-1rem)] h-[50vh] rounded-[70px] shadow-xl"></div>
        <div className="bg-[#2EC5B6] basis-[calc(60%-1rem)] h-[50vh] rounded-[70px] shadow-xl"></div>
        <div className="bg-[#FF9D60] basis-[calc(40%-1rem)] h-[50vh] rounded-[70px] shadow-xl"></div>
      </section>
    </main>
  )
}

export default Main