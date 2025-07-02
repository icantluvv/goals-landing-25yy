import Footer from "@/app/(public)/(landing)/components/Footer"
import Header from "@/app/(public)/(landing)/components/Header"
import React from "react"

import { extractAndParseLicense } from "@/scripts/generateLicense"
import Typography from "@/ui/core/Typography/Typography"

export default async function LicensePage() {
    const licenseContent = await extractAndParseLicense()

    return (
        <div className="flex flex-col w-full items-center">
            <Header />
            <main className="min-h-screen flex flex-col px-[5vw] lg:px-[15vw] py-[150px] gap-[40px]">
                <p className="text-[0.75rem]">
                    ВАЖНО! Перед началом любого использования указанных ниже Программ для ЭВМ
                    внимательно ознакомьтесь с условиями ее использования, содержащимися в настоящем
                    Соглашении. Установка, запуск или иное начало использования Программы означает
                    надлежащее заключение настоящего Соглашения и Ваше полное согласие со всеми его
                    условиями. Если Вы не согласны безоговорочно принять условия настоящего
                    Соглашения, Вы не имеете права использовать Программу.
                </p>

                <Typography variants="h2">ЛИЦЕНЗИОННОЕ СОГЛАШЕНИЕ</Typography>

                <p className="text-[1rem]">
                    Данное Лицензионное соглашение применяется к Программе для ЭВМ: «Goals»
                </p>

                {licenseContent.map((section, idx) => (
                    <section key={idx} className="flex flex-col gap-4">
                        <Typography variants="h3" color="black">
                            {section.title}
                        </Typography>

                        <div className="flex flex-col gap-3">
                            {section.content.map((line, i) => {
                                if (/^\d+\./.test(line)) {
                                    return (
                                        <p
                                            key={i}
                                            className="text-[18px] font-medium text-black leading-[1.4] mt-6"
                                        >
                                            {line}
                                        </p>
                                    )
                                } else {
                                    return (
                                        <p
                                            key={i}
                                            className="text-[16px] font-normal text-black leading-[1.4]"
                                        >
                                            {line}
                                        </p>
                                    )
                                }
                            })}
                        </div>
                    </section>
                ))}
            </main>
            <Footer />
        </div>
    )
}
