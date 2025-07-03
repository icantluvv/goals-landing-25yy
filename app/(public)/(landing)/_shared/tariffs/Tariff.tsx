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
      className="flex flex-col min-w-[300px] md:min-w-[450px] max-w-[80vw] xl:min-w-auto md:w-[calc(33.3333%-12px)]
bg-darkBlue/5 p-[24px] md:p-[48px] rounded-[25px] lg:rounded-[35px] md:min-h-[500px] gap-6 justify-between"
    >
      <div className="flex flex-col gap-[12px] md:gap-[24px]">
        <div>
          <Typography className="text-BrandDarkBlue" variants={"h5"}>
            {tariff.title}
          </Typography>
          <Typography className="text-BrandDarkBlue" variants={"h6"}>
            {tariff.price}
          </Typography>

          <Typography className="text-Purple " variants="accent">
            {tariff.subtext}
          </Typography>
        </div>

        <Typography
          className="text-BrandDarkBlue max-h-[120px] overflow-y-auto no-scrollbar"
          variants="p"
        >
          {tariff.description}
        </Typography>

        <ul className="flex flex-col gap-[12px] border-t border-darkBlue/20 pt-[16px]">
          {tariff.features.map((feature, index) => (
            <TariffFeature feature={feature} key={index} />
          ))}
        </ul>
      </div>

      <Link href="/#connect" className="flex w-full md:max-w-[200px]">
        <Button variant="primary" size="default" color="darkBlue">
          <Typography color="white" variants="button">
            Подключить
          </Typography>
        </Button>
      </Link>
    </li>
  )
}

export default Tariff
