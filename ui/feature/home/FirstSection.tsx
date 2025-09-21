import Image from "next/image"
import dark_arrow from "@/public/dark_arrow.svg"
import goals from "@/public/first/GOALS.png"
import Link from "next/link"
import Typography from "@/ui/core/Typography/Typography"
import Button from "@/ui/core/Button/Button"
import BackgroundCircles from "@/app/(public)/(home)/_shared/hero/BackgroundCircles"
import GradientBackground from "@/app/(public)/(home)/_shared/hero/GradientBackground"

const FirstSection = () => {
    return (
        <section
            id="about"
            className=" w-full h-[100svh] px-[15px] lg:h-[100svh] flex flex-col relative overflow-hidden items-center lg:pt-[100px] scroll-mt-[100px]"
        >
            <GradientBackground />
            <BackgroundCircles />

            <div className="flex flex-col items-center flex-1 justify-center gap-[12px] z-10">
                <div className="w-full flex flex-col items-center gap-y-[24px]">
                    <Typography center color={"white"} variants={"h1"}>
                        Cистема лояльности
                    </Typography>

                    <div className={"w-[60vw]"}>
                        <Typography
                            center
                            color={"white"}
                            variants={"accent"}
                            className={"hidden md:flex"}
                        >
                            Ваши клиенты уже рассказывают о заведениях — пора управлять этим и
                            извлекать выгоду!
                        </Typography>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-4">
                    <Link href="/#connect">
                        <Button size="default" type="button" color="darkBlue" variant="primary">
                            <Typography color="white" variants="button">
                                Подключить
                            </Typography>
                        </Button>
                    </Link>

                    <Link href="/#forbusiness">
                        <Button variant="primary" size="default" color="white">
                            <Typography className="text-darkBlue" variants="button">
                                Как это работает?
                            </Typography>
                            <Image width={24} height={24} src={dark_arrow} alt="arrow"></Image>
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="w-[100vw] max-w-none z-10">
                <Image src={goals} alt={"goals"} />
            </div>
        </section>
    )
}

export default FirstSection
