import Typography from "@/ui/core/Typography/Typography"
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
      key={tariff.id}
      className="relative min-h-[200px] md:min-h-[350px] xl:min-h-[450px] flex flex-col bg-darkBlue/5 p-4 lg:p-6 xl:p-8 rounded-[24px]"
    >
      <Typography variants={"h5"}>{tariff.title}</Typography>
      <Typography className="mt-1" variants={"h6"}>
        {tariff.price}
      </Typography>
      <Typography className="text-Purple text-[16px] mt-2" variants="p">
        {tariff.subtext}
      </Typography>

      <Typography
        className="max-h-[65px] lg:max-h-[110px] mt-3 lg:mt-6 overflow-y-auto no-scrollbar text-xs lg:text-base xl:text-lg"
        variants="custom"
      >
        {tariff.description}
      </Typography>

      <div className="w-full h-[1px] bg-darkBlue/20 mt-2 lg:my-4" />

      <ul className="block  flex-1 border-darkBlue/20 lg:mt-4">
        {tariff.features.map((feature, index) => (
          <TariffFeature feature={feature} key={index} />
        ))}
      </ul>

      <Link href="/#connect" className="mt-4 xl:mt-8">
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
