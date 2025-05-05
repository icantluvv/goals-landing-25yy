import Footer from "@/components/footer/Footer"
import Header from "@/components/header/Header"
import Main from "@/components/main/Main"

export default function LandingPage() {
  return (
    <div className="flex items-center flex-col gap-y-10">
      <Header />
      <Main></Main>
      <Footer />
    </div>
  )
}
