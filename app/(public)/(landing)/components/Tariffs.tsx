import { tariffs } from "@/constants/tariffs"
import Tariff from "../_shared/tariffs/Tariff"
import Typography from "@/ui/core/Typography/Typography"

const Tariffs = () => {
  return (
    <section id="tariffs" className="container scroll-mt-[100px]">
      <div>
        <Typography color="black" center variants="h2">
          Выберите тариф <br />
          для своего бизнеса
        </Typography>

        <Typography center className="px-[10vw] mt-[24px] text-gray-600" variants="accent">
          Учитывайте количество открытых заведений, текущие задачи и этапы развития вашего бизнеса.
          Выберите тариф, который соответствует вашим целям — от базового тестирования инструментов
          до масштабной работы с аудиторией и продвинутой аналитики.
        </Typography>
      </div>

      <ul className="flex flex-col mt-[40px] gap-[24px] w-full overflow-x-auto xl:overflow-hidden no-scrollbar xl:px-[5vw]">
        {tariffs.map((tariff) => (
          <Tariff tariff={tariff} key={tariff.id} />
        ))}
      </ul>
    </section>
  )
}

export default Tariffs
