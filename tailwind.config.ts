import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        padding: {
            DEFAULT: "12px",
        },
        extend: {
            fontFamily: {
                body: ["Josefin Sans, sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
