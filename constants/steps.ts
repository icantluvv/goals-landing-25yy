export const steps: Step[] = [
    {
        id: 1,
        title: "Регистрация",
        description: "Оставьте заявку, и мы свяжемся с вами",
        icon: "/images/svg/WritingHand.svg"
    },
    {
        id: 2,
        title: "Создание профиля",
        description: "Оформите свой уникальный профиль",
        icon: "/images/svg/BustInSilhouette.svg"
    },
    {
        id: 3,
        title: "Первый Голс!",
        description: "Придумайте задание или вызов своему посетителю",
        icon: "/images/svg/Trophy.svg"
    }
]

export type Step = {
    id: number
    title: string
    description: string
    icon: string
}
