import React from "react"
import like from "@/public/like.png"
import Image from "next/image"
import trend from "@/public/trend.svg"
import Link from "next/link"
import { steps } from "@/constants/steps"
import Typography from "@/ui/core/Typography/Typography"
import Step from "../_shared/steps/Step"

const Steps = () => {
    return (
        <section
            id="steps"
            className="flex w-full gap-[24px] flex-row py-2 overflow-x-auto px-[4vw] no-scrollbar xl:px-0"
        >
            <div className="flex-1 select-none">
                <div
                    className="w-full h-full bg-Purple rounded-[25px] lg:rounded-[35px] flex flex-col gap-y-[24px] p-[24px] lg:p-[48px] 
        min-w-[300px] md:min-w-[400px] xl:min-w-auto shadow-md"
                >
                    <div className="w-[75px] h-[75px] md:w-[100px] md:h-[100px] rounded-[50%] border-3 md:border-4 border-white flex justify-center items-center">
                        <Image
                            src={like}
                            alt={"like"}
                            objectFit="cover"
                            className="scale-75 lg:scale-100"
                        ></Image>
                    </div>

                    <Typography color="white" variants="h3">
                        Всего несколько шагов до старта!
                    </Typography>
                </div>
            </div>

            <div className="flex-2  select-none flex xl:flex-wrap gap-[24px] ">
                {steps.map((step) => (
                    <Step key={step.id} step={step} />
                ))}

                <div
                    className="w-full lg:w-[calc(50%-12px)] bg-darkBlue rounded-[25px] lg:rounded-[35px] p-[24px] lg:p-[48px] flex flex-col 
        justify-between gap-y-[96px] lg:gap-y-[48px] relative min-w-[300px] md:min-w-[400px] xl:min-w-auto overflow-hidden"
                >
                    <Image
                        src={trend}
                        alt={"trend"}
                        className="absolute bottom-0 right-[48px]"
                    ></Image>

                    <Typography color="white" variants="h5">
                        Анализируйте результат
                    </Typography>

                    <div className="z-[10] w-full">
                        <Link
                            href={"/#connect"}
                            className="inline-flex bg-branGreen px-[32px] font-semibold md:px-[48px] py-[20px] md:py-[24px] rounded-[48px]  
            active:bg-GreebActive"
                        >
                            <Typography color="black" variants="button">
                                Подключить
                            </Typography>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Steps
