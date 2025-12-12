import Typography from "@/ui/core/Typography/Typography"
import ApplicationRequestErrorModal from "@/ui/shared/modals/ApplicationRequestErrorModal"
import ApplicationInputs from "@/ui/shared/request/ApplicationInputs"
import PageWrapper from "@/ui/shared/page-wrapper/page-wrapper"

function Application() {
    return (
        <PageWrapper>
            <section id="application" className="scroll-mt-[200px] xl:flex relative mb-8 xl:mb-16">
                <form className="block md:max-w-full lg:max-w-[80vw] xl:max-w-[60vw]">
                    <div className="block">
                        <Typography color="black" variants="h2">
                            Оставьте заявку!
                        </Typography>

                        <Typography color="black" className="my-3" variants="accent">
                            Мы с вами свяжемся для продолжения регистрации
                        </Typography>
                    </div>

                    <ApplicationInputs />
                </form>
            </section>

            <ApplicationRequestErrorModal />
        </PageWrapper>
    )
}

export default Application
