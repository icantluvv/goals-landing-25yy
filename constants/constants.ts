export const PageSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ООО «Актнау»",
    url: "https://do-goals.online/",
    image: "https://sun9-57.userapi.com/s/v1/ig2/mVybOW8l9Cpx_7-0EAExCjJL4PUKNpJL6Bj6digI5wBMa1ljaGvYtB8FdM-HiGONY5CfMdHw25pWaTKD6IV6535W.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,600x600&from=bu&cs=600x0",
    telephone: "+7 928 629-33-13",
    address: {
        "@type": "PostalAddress",
        streetAddress: "ул. Ленина, д. 211, кв. 21, ком. 1",
        addressLocality: "г. Батайск",
        addressRegion: "Ростовская область",
        postalCode: "346882",
        addressCountry: "RU"
    },
    founder: {
        "@type": "Person",
        name: "Калюжный Сергей Александрович"
    }
}

export type PictureSlidesType = {
    id: number
    title: string
    image: string
    description: string
}

export const PictureSlides: PictureSlidesType[] = [
    {
        id: 1,
        title: "Ваш профиль",
        image: "/images/png/phone_pic1.png",
        description:
            "Здесь будет страница вашего заведения — с адресом, уровнем скидок и активностью гостей. Клиенты могут отслеживать свой прогресс, оставлять отзывы и получать бонусы"
    },
    {
        title: "Лента Голсов",
        id: 2,
        description:
            "Гости участвуют в интерактивных заданиях — “Голсах”. Вы можете создавать мероприятия, акции и челленджи, мотивируя клиентов рассказывать о вас в соцсетях и возвращаться снова",
        image: "/images/png/phone_pic2.png"
    },
    {
        title: "Лента отзывов",
        id: 3,
        description:
            "Ваши клиенты получают скидки за живые отзывы — привлекайте новых клиентов увлекательными историями в ленте от постоянных гостей!",
        image: "/images/png/phone_pic3.png"
    },
    {
        title: "Карта с заведениями",
        id: 4,
        description:
            "Разместим ваше заведение на нашей карте — приложение само ненавязчиво уведомит ближайших клиентов об интересном месте или событии",
        image: "/images/png/phone_pic4.png"
    }
]
