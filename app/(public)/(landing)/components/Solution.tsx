import { solutionsData } from "@/constants/solutionsData"
import Feature from "@/app/(public)/(landing)/_shared/solution/Feature"
import Typography from "@/ui/core/Typography/Typography"

const Solution = () => (
  <section
    id="forbusiness"
    className="container w-full flex flex-col items-center gap-y-[40px] scroll-mt-[100px]"
  >
    <div>
      <Typography color="black" center variants={"h2"}>
        Маркетинг, аналитика и лояльность <br /> в одном решении
      </Typography>

      <Typography className="text-gray-600 mt-[24px]" center variants={"accent"}>
        Мост между вашим бизнесом и клиентами. <br /> Ваши гости – лояльные инфлюенсеры.
      </Typography>
    </div>

    <div className="flex flex-col 2xl:flex-row gap-[24px] w-full no-scrollbar">
      {solutionsData.map((item, index) => (
        <Feature key={index} icon={item.icon} title={item.title} text={item.text} />
      ))}
    </div>
  </section>
)

export default Solution
