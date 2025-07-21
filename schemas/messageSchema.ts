import { z } from "zod"

export const messageSchema = z.object({
  email: z.string().min(1, "Введите email").email("Введите корректный email"),
  message: z.string().min(100, "Сообщение должно содержать не менее 100 символов")
})
