import Typography from "@/ui/core/Typography/Typography"
import React from "react"

type TariffFeatureProps = {
  feature: string
}

const TariffFeature = ({ feature }: TariffFeatureProps) => {
  return (
    <li className="flex items-center gap-[8px]">
      <span className="w-[6px] h-[6px] rounded-full bg-darkBlue"></span>
      <Typography className="text-darkBlue" variants="p">
        {feature}
      </Typography>
    </li>
  )
}

export default TariffFeature
