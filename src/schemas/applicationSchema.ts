import { z } from "zod"

export const applicationSchema = z.object({
    phone: z
        .string()
        .min(1, "Введите телефон")
        .refine(
            (val) =>
                /^(\+7\s?)?\(?\d{3}\)?\s?\d{3}-?\d{2}-?\d{2}$/.test(val) ||
                /^\+7\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$/.test(val),
            { message: "Введите корректный номер телефона" }
        ),
    email: z.string().min(1, "Введите email").email("Введите корректный email"),

    fullName: z
        .string()
        .min(1, "Введите ФИО")
        .refine((val) => /^[А-Яа-яЁёA-Za-z\s-]+$/.test(val), {
            message: "ФИО должно содержать только буквы, пробелы и дефисы"
        })
        .refine((val) => val.trim().split(/\s+/).length >= 3, {
            message: "Введите имя, фамилию и отчество (минимум 3 слова)"
        }),

    inn: z
        .string()
        .length(10, "ИНН должен содержать ровно 10 цифр")
        .refine((val) => /^\d{10}$/.test(val), {
            message: "ИНН должен содержать только цифры"
        })
})

export type ApplicationSchema = z.infer<typeof applicationSchema>
