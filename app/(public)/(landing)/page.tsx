import Footer from "@/app/(public)/(landing)/components/Footer"
import Header from "@/app/(public)/(landing)/components/Header"
import FirstSection from "@/app/(public)/(landing)/components/FirstSection"
import Solution from "@/app/(public)/(landing)/components/Solution"
import Steps from "@/app/(public)/(landing)/components/Steps"
import Tariff from "@/app/(public)/(landing)/components/Tariffs"
import FAQ from "@/app/(public)/(landing)/components/FAQ"
import Application from "@/app/(public)/(landing)/components/Application"
import MessageModal from "@/app/(public)/(landing)/components/MessageModal"

export default function LandingPage() {
  return (
    <div className="flex items-center flex-col">
      <Header />

      <div className="w-full  flex flex-col gap-y-[40px] lg:gap-y-[80px]">
        <FirstSection></FirstSection>

        <div className="flex flex-col gap-y-[40px] lg:gap-y-[80px] lg:items-center xl:px-[6.5vw]">
          <Solution></Solution>
          <Steps></Steps>
          <Tariff></Tariff>
          <FAQ></FAQ>
          <Application />
        </div>

        <MessageModal></MessageModal>
      </div>

      <Footer />
    </div>
  )
}
