"use client"

import { tariffs } from "@/constants/tariffs"
import Tariff from "../_shared/tariffs/Tariff"
import Typography from "@/ui/core/Typography/Typography"

const Tariffs = () => {
    return (
        <section
            id="tariffs"
            className="w-full flex flex-col items-center gap-y-[40px] lg:px-0 scroll-mt-[100px]"
        >
            <div className="flex flex-col items-center gap-y-[24px] text-center px-[3vw] xl:px-0">
                <Typography variants="h2">
                    Выберите тариф <br />
                    для своего бизнеса
                </Typography>

                <Typography
                    className="max-w-[85vw] xl:max-w-[60vw]  text-gray-600"
                    variants="accent"
                >
                    Учитывайте количество открытых заведений, текущие задачи и этапы развития вашего
                    бизнеса. Выберите тариф, который соответствует вашим целям — от базового
                    тестирования инструментов до масштабной работы с аудиторией и продвинутой
                    аналитики.
                </Typography>
            </div>

            <ul className="flex gap-[24px] w-full overflow-x-auto xl:overflow-hidden no-scrollbar px-[4vw] xl:px-0">
                {tariffs.map((tariff) => (
                    <Tariff tariff={tariff} key={tariff.id} />
                ))}
            </ul>
        </section>
    )
}

export default Tariffs
