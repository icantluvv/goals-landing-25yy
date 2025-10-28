import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    cleanDistDir: true,
    allowedDevOrigins: ["localhost", process.env.NEXT_PUBLIC_FRONT_URL as string],
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "do-goals.online"
            }
        ]
    }
}

export default nextConfig
