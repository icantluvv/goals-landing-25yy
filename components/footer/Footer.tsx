import Image from "next/image"
import React from "react"
import copyright from "@/public/copyright.svg"
import email from "@/public/email.svg"
import phone from "@/public/phone.svg"

import inst from "@/public/inst.svg"
import tg from "@/public/tg.svg"
import vk from "@/public/vk.svg"

const Footer = () => {
  return (
    <footer className="w-[90vw] flex py-8 justify-between">
      <div className="flex flex-col gap-y-[24px]">
        <div>
          <h4 className="font-semibold text-[1.125rem]">Разделы</h4>
        </div>
        <div className="flex gap-x-[100px] text-[0.875rem]">
          <div className="flex flex-col gap-y-[12px]">
            <div>
              <a href="#about">О нас</a>
            </div>
            <div>
              <a href="#business">Бизнесу</a>
            </div>
            <div>
              <a href="#client">Клиенту</a>
            </div>
            <div>
              <a href="#news">Новости</a>
            </div>
          </div>
          <div className="flex flex-col gap-y-[12px]">
            <div>
              <a href="#faq">FAQ</a>
            </div>
            <div>
              <a href="#contacts">Контакты</a>
            </div>
            <div>
              <a href="">Правила политики</a>
            </div>
            <div>
              <a href="">Соглашение</a>
            </div>
          </div>
        </div>
        <div className="flex gap-x-3">
          <Image src={copyright} alt={"copyright"} width={20} height={20} />
          <p>2025 Goals. Все права защищены</p>
        </div>
      </div>

      <div className="flex flex-col gap-y-[24px]">
        <div>
          <h4 className="font-semibold text-[1.125rem]">Конакты</h4>
        </div>
        <div className="flex flex-col gap-y-[12px] text-[0.875rem]">
          <div className="flex items-center gap-x-[12px]">
            <Image src={phone} width={24} height={24} alt="phone"></Image>
            <a>+7(XXX)XXX-XX-XX</a>
          </div>
          <div className="flex items-center gap-x-[12px]">
            <Image src={email} width={24} height={24} alt="phone"></Image>
            <a>do_goals@gmail.com</a>
          </div>
        </div>
        <div className="flex gap-x-[12px]">
          <div className="w-[40px] h-[40px] bg-darkBlue rounded-[50%] flex items-center justify-center">
            <a>
              <Image src={tg} alt={""} width={20} height={20} />
            </a>
          </div>
          <div className="w-[40px] h-[40px] bg-darkBlue rounded-[50%] flex items-center justify-center">
            <a>
              <Image src={inst} alt={""} width={20} height={20} />
            </a>
          </div>
          <div className="w-[40px] h-[40px] bg-darkBlue rounded-[50%] flex items-center justify-center">
            <a>
              <Image src={vk} alt={""} width={20} height={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
