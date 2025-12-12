import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    env: {
        BASE_API_HOST: process.env.BASE_API_HOST,
        FEATURE_SLIDER: process.env.FEATURE_SLIDER,
        NEXT_PUBLIC_BASE_API_HOST: process.env.NEXT_PUBLIC_BASE_API_HOST,
        NEXT_PUBLIC_BASE_IMAGE_URL: process.env.NEXT_PUBLIC_BASE_IMAGE_URL,
        SMTP_HOST: process.env.SMTP_HOST,
        SMTP_PORT: process.env.SMTP_PORT,
        SMTP_USER: process.env.SMTP_USER,
        SMTP_PASSWORD: process.env.SMTP_PASSWORD,
        SMTP_FROM_EMAIL: process.env.SMTP_FROM_EMAIL
    },
    cleanDistDir: true,
    // allowedDevOrigins: ["localhost", process.env.NEXT_PUBLIC_FRONT_URL as string],
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "do-goals.online"
            }
        ]
    }
}

export default nextConfig
