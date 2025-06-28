import Image from "next/image"
import phone from "@/public/phone.png"
import Typography from "@/ui/core/Typography/Typography"
import Input from "@/ui/core/Input/Input"
import CheckBox from "@/ui/core/CheckBox/CheckBox"

const Application = () => {
    return (
        <section
            id="connect"
            className="scroll-mt-[200px] relaive flex flex-col xl:flex-row w-full items-center lg:max-w-[60vw] xl:max-w-[1400px] justify-start xl:gap-[80px] mb-[40px] xl:mb-[80px] px-[4vw] lg:px-0"
        >
            <form className="flex w-full  md:max-w-[70vw] lg:max-w-auto flex-col items-center xl:items-start xl:w-full gap-[24px]">
                <div className="flex flex-col text-center xl:text-start gap-[6px]">
                    <Typography variants="h5">Оставьте заявку!</Typography>

                    <Typography variants="h5">
                        Мы с вами свяжемся для продолжения регистрации
                    </Typography>
                </div>

                <div className="flex w-full gap-[48px]">
                    <Input placeholder="Телефон" className="flex-1" type={"number"} />
                    <Input placeholder="Почта" className="flex-1" type="email" />
                </div>

                <div className="flex w-full flex-col gap-[24px]">
                    <Input placeholder="ФИО" type="text" />
                    <Input placeholder="ИНН Организации" type="text" />
                </div>

                <div className="flex items-center gap-[8px]">
                    <CheckBox />

                    <Typography className="text-gray-500" variants="p">
                        Даю согласие на обработку персональных данных
                    </Typography>
                </div>

                <div>
                    <button
                        className="px-[48px] py-[18px] font-semibold text-WhiteText bg-PrimaryBlack 
          rounded-[48px] active:bg-PrimaryBlack/75   "
                    >
                        <Typography color="white" variants="button">
                            Отправить
                        </Typography>
                    </button>
                </div>
            </form>

            <div className="hidden xl:flex w-1/2 justify-center relative">
                <Image
                    src={phone}
                    width={358}
                    height={728}
                    className="absolute top-[-10rem] right-0 "
                    alt="phone"
                />
            </div>
        </section>
    )
}

export default Application
