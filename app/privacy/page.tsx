import Footer from "@/components/footer/Footer"
import Header from "@/components/header/Header"
import React from "react"

import { extractAndParsePrivacy } from "@/scripts/generatePrivacy"

export default async function LicensePage() {
  const licenseContent = await extractAndParsePrivacy()

  return (
    <div className="flex flex-col w-full items-center">
      <Header />
      <main className="min-h-screen flex flex-col px-[5vw] lg:px-[15vw] py-[150px] gap-[40px]">
        <h2 className="font-semibold text-[3rem]">
          Политика в отношении обработки персональных данных
        </h2>

        <h3 className="text-[24px] font-semibold text-black">
          Общие положения
        </h3>

        <p className="text-[0.75rem]">
          Настоящая политика обработки персональных данных составлена в
          соответствии с требованиями Федерального закона от 27.07.2006. №
          152-ФЗ «О персональных данных» (далее — Закон о персональных данных) и
          определяет порядок обработки персональных данных и меры по обеспечению
          безопасности персональных данных, предпринимаемые ООО "Актнау" (далее
          — Оператор). Оператор ставит своей важнейшей целью и условием
          осуществления своей деятельности соблюдение прав и свобод человека и
          гражданина при обработке его персональных данных, в том числе защиты
          прав на неприкосновенность частной жизни, личную и семейную тайну.
          Настоящая политика Оператора в отношении обработки персональных данных
          (далее — Политика) применяется ко всей информации, которую Оператор
          может получить о посетителях веб-сайта https://do-goals.ru.
        </p>

        {licenseContent.map((section, idx) => (
          <section key={idx} className="flex flex-col gap-4">
            <h3 className="text-[24px] font-semibold text-black">
              {section.title}
            </h3>
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
