import Typography from "@/ui/core/Typography/Typography"
import Tariff from "../../../app/(public)/(home)/_shared/tariffs/Tariff"
import PageWrapper from "@/ui/shared/page-wrapper/page-wrapper"

import { tariffs } from "@/constants/tariffs"

const Tariffs = () => {
  return (
    <PageWrapper>
      <section id="tariffs" className="scroll-mt-[100px]">
        <div>
          <Typography color="black" center variants="h2">
            Выберите тариф <br />
            для своего бизнеса
          </Typography>

          <Typography
            center
            className="px-[10vw] mt-[24px] text-gray-600"
            variants="accent"
          >
            Учитывайте количество открытых заведений, текущие задачи и этапы
            развития вашего бизнеса. Выберите тариф, который соответствует вашим
            целям — от базового тестирования инструментов до масштабной работы
            с аудиторией и продвинутой аналитики.
          </Typography>
        </div>

        <ul className="grid mt-[40px] md:mt-[60px] lg:mt-[80px] grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 xl:gap-8 align-center">
          {tariffs.map((tariff) => {
            return <Tariff key={tariff.id} tariff={tariff} />
          })}
        </ul>
      </section>
    </PageWrapper>
  )
}

export default Tariffs
