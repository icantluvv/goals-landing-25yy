import vk from "@/public/footer/vk.svg"
import tg from "@/public/footer/telegram.svg"

export const links = [
  { title: "О нас", href: "/#about" },
  { title: "Бизнесу", href: "/#forbusiness" },
  { title: "Тарифы", href: "/#tariffs" },
  { title: "FAQ", href: "/#FAQ" },
  { title: "Связаться", href: "/#connect" },
  { title: "Новости", href: "/news" },
  { title: "Пользователям Goals", href: "/GoalsForUser" }
]

export const rightLinks = [
  { title: "Политика сервиса", href: "/privacy" },
  { title: "Лицензионное соглашение", href: "/license" }
]

export const socialLinks = [
  { icon: tg, alt: "tg", url: "https://t.me/dogoals" },
  { icon: vk, alt: "vk", url: "https://vk.com/dogoals" }
]
