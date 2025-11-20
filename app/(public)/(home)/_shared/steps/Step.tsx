import Typography from "@/ui/core/Typography/Typography"
import React from "react"

import type { Step } from "@/constants/steps"

type StepProps = {
    step: Step
}

import Image from "next/image"
const Step = ({ step }: StepProps) => {
    return (
        <div className="w-full shadow-sm min-w-[350px] lg:min-w-auto bg-darkBlue/5 lg:rounded-[35px] rounded-[25px] p-3 md:p-6 xl:p-12 flex flex-col gap-6 md:gap-8 xl:gap-12">
            <div className={"flex items-center justify-between"}>
                <div className="xl:w-[75px] xl:h-[75px] md:w-[50px] md:h-[50px] w-[35px] h-[35px] rounded-full md:border-4 border-3 border-darkBlue flex justify-center items-center">
                    <Typography className="text-darkBlue" variants="accent">
                        {step.id}
                    </Typography>
                </div>

                <div className={"w-10 h-10 min-w-10 relative"}>
                    <Image src={step.icon} fill alt={step.id.toString()} />
                </div>
            </div>

            <div className="flex flex-col gap-y-[12px]">
                <Typography color="black" variants="h5">
                    {step.title}
                </Typography>

                <Typography color="black" variants="accent">
                    {step.description}
                </Typography>
            </div>
        </div>
    )
}

export default Step
