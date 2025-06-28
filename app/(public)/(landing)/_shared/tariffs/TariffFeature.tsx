import React from "react"

type TariffFeatureProps = {
    feature: string
}

const TariffFeature = ({ feature }: TariffFeatureProps) => {
    return (
        <li className="flex items-center gap-[8px] text-[0.875rem] md:text-[1rem] text-darkBlue">
            <span className="w-[6px] h-[6px] rounded-full bg-darkBlue"></span>
            {feature}
        </li>
    )
}

export default TariffFeature
