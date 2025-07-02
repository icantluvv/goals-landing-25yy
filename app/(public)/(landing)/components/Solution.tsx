import analitic from "@/public/solution/analitic.svg"
import loyal from "@/public/solution/loyal.svg"
import marketing from "@/public/solution/marketing.svg"
import Feature from "@/app/(public)/(landing)/_shared/solution/Feature"
import Typography from "@/ui/core/Typography/Typography"

const Solution = () => (
    <section
        id="forbusiness"
        className="w-full flex flex-col items-center text-center gap-y-[40px] bg-white  scroll-mt-[100px] "
    >
        <div className="flex flex-col items-center gap-y-[24px] px-[4vw] xl:px-0">
            <Typography color="black" center variants={"h2"}>
                Маркетинг, аналитика и лояльность <br /> в одном решении
            </Typography>

            <Typography className={"max-w-[85vw] text-gray-600"} center variants={"accent"}>
                Мост между вашим бизнесом и клиентами. <br /> Ваши гости – лояльные инфлюенсеры.
            </Typography>
        </div>

        <div className="flex flex-col 2xl:flex-row gap-[24px] w-full md:w-[70vw] lg:max-w-[60vw] xl:max-w-[600px] 2xl:max-w-auto justify-center px-[4vw] lg:px-0 no-scrollbar ">
            <Feature
                icon={marketing}
                title={`Современный маркетинг`}
                text={
                    "Ваши гости становятся инфлюенсерами, а вы предлагаете им условия до первого чека. Никаких лишних инструментов, мы за простоту и эффективность!"
                }
            />
            <Feature
                icon={analitic}
                title={`Удобная аналитика`}
                text={
                    "Получайте информацию о предпочтениях гостей, их активности и вовлеченности. Теперь ваш посетитель полностью оцифрован!"
                }
            />
            <Feature
                icon={loyal}
                title={`Прогрессивная лояльность`}
                text={
                    "Гости получают персональную скидку в награду за “живые” отзывы, а также различные бонусы при участии в активностях вашего заведения."
                }
            />
        </div>
    </section>
)

export default Solution
