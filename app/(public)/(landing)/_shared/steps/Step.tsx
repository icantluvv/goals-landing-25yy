import Typography from "@/ui/core/Typography/Typography"
import React from "react"

type Step = {
    id: number
    title: string
    description: string
}

type StepProps = {
    step: Step
}

const Step = ({ step }: StepProps) => {
    return (
        <div
            className="w-full lg:w-[calc(50%-12px)] bg-darkBlue/5 lg:rounded-[35px] rounded-[25px] p-[24px] lg:p-[48px] flex flex-col 
            gap-y-[24px] lg:gap-y-[48px] min-w-[300px] md:min-w-[400px] xl:min-w-auto"
        >
            <div className="md:w-[70px] md:h-[70px] w-[55px] h-[55px] rounded-full md:border-4 border-3 border-darkBlue flex justify-center items-center">
                <Typography className="text-darkBlue" variants="accent">
                    {step.id}
                </Typography>
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
