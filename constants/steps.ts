export const steps: Step[] = [
    {
        id: 1,
        title: "Регистрация",
        description: "Оставьте заявку, и мы свяжемся с вами"
    },
    {
        id: 2,
        title: "Создание профиля",
        description: "Оформите свой уникальный профиль",
        icon: "/images/svg/person_card.svg"
    },
    {
        id: 3,
        title: "Первый Голс!",
        description: "Придумайте задание или вызов своему посетителю",
        icon: "/images/svg/start_card.svg"
    }
]

export type Step = {
    id: number
    title: string
    description: string
    icon?: string
}
