import apiClient from "../../axios/axios.client"
import type { Article } from "./type"
import { AxiosError } from "axios"

export async function getArticleById(id: number): Promise<Article> {
    try {
        const response = await apiClient.getInstance().get<Article>(`/blog/${id}`)
        return response.data
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            const status = error.response.status

            switch (status) {
                case 404:
                    throw new Error(
                        `Статья с ID ${id} не найдена: ${error.response.data?.message || "Not Found"}`
                    )
                case 500:
                    throw new Error(
                        `Внутренняя ошибка сервера: ${error.response.data?.message || "Internal Server Error"}`
                    )
                case 502:
                    throw new Error(
                        `Ошибка шлюза: ${error.response.data?.message || "Bad Gateway"}`
                    )
                case 504:
                    throw new Error(
                        `Таймаут шлюза: ${error.response.data?.message || "Gateway Timeout"}`
                    )
                default:
                    throw new Error(
                        `Ошибка сервера ${status}: ${error.response.data?.message || error.message}`
                    )
            }
        } else if (error instanceof AxiosError && error.request) {
            throw new Error("Сервер не отвечает. Проверьте подключение к интернету.")
        } else {
            const message = error instanceof Error ? error.message : "Неизвестная ошибка"
            throw new Error(`Ошибка запроса: ${message}`)
        }
    }
}
