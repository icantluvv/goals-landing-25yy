import type { AxiosRequestHeaders } from "axios"
import axios, { AxiosInstance } from "axios"

interface ApiClientConfig {
    timeout?: number
    headers?: AxiosRequestHeaders
}

class ApiClient {
    private instance: AxiosInstance

    constructor(config: ApiClientConfig = {}) {
        const baseURL = process.env.BASE_API_HOST + "/api"

        this.instance = axios.create({
            baseURL,
            timeout: config.timeout || 10000,
            headers: {
                "Content-Type": "application/json",
                ...config.headers
            }
        })
    }
}

const apiClient = new ApiClient()

export default apiClient
export { ApiClient }
