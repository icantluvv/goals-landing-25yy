// tailwind.config.ts
import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./app/**/*.{ts,tsx,js,jsx}",
        "./components/**/*.{ts,tsx,js,jsx}",
        "./pages/**/*.{ts,tsx,js,jsx}",
        "./src/**/*.{ts,tsx,js,jsx}"
    ],
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        h1: {
                            fontSize: "40px",
                            lineHeight: "120%",
                            fontWeight: "700",
                            fontFamily: "var(--font-inter)",
                            "@screen md": {
                                fontSize: "64px"
                            },
                            "@screen lg": {
                                fontSize: "80px"
                            }
                        },
                        h2: {
                            fontSize: "28px",
                            lineHeight: "120%",
                            fontWeight: "700",
                            fontFamily: "var(--font-inter)",
                            "@screen lg": {
                                fontSize: "56px"
                            }
                        },
                        h3: {
                            fontSize: "24px",
                            lineHeight: "140%",
                            fontWeight: "700",
                            fontFamily: "var(--font-inter)",
                            "@screen lg": {
                                fontSize: "52px"
                            }
                        },
                        p: {
                            fontSize: "12px",
                            fontFamily: "var(--font-poppins)",
                            "@screen lg": {
                                fontSize: "16px"
                            }
                        }
                    }
                }
            }
        }
    },
    plugins: [require("@tailwindcss/typography")]
}

export default config
