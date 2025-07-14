import Typography from "@/ui/core/Typography/Typography"
import React from "react"
import TariffFeature from "./TariffFeature"
import Link from "next/link"
import Button from "@/ui/core/Button/Button"

type Tariff = {
  id: number
  price: string
  title: string
  description: string
  subtext: string
  features: string[]
}

type TariffProps = {
  tariff: Tariff
}

const Tariff = ({ tariff }: TariffProps) => {
  return (
    <li
      className="grid grid-rows-[auto_1fr] lg:grid-rows-none lg:grid-cols-[30%_65%] gap-4 lg:gap-8
bg-darkBlue/5 p-[24px] lg:p-[32px] rounded-[24px]"
    >
      <div className="min-w-[25%] flex flex-col md:justify-between">
        <div>
          <Typography variants={"h5"}>{tariff.title}</Typography>
          <Typography variants={"h6"}>{tariff.price}</Typography>
          <Typography className="text-Purple text-[16px]" variants="p">
            {tariff.subtext}
          </Typography>
        </div>

        <Link href="/#connect" className=" mt-4 xl:mt-8">
          <Button variant="primary" size="default" color="darkBlue">
            <Typography color="white" variants="button">
              Подключить
            </Typography>
          </Button>
        </Link>
      </div>

      <div>
        <Typography
          className="max-h-[120px] overflow-y-auto no-scrollbar text-[16px] xl:text-[18px]"
          variants="custom"
        >
          {tariff.description}
        </Typography>

        <ul className="flex flex-col gap-3 border-t border-darkBlue/20 pt-[16px]">
          {tariff.features.map((feature, index) => (
            <TariffFeature feature={feature} key={index} />
          ))}
        </ul>
      </div>
    </li>
  )
}

export default Tariff
