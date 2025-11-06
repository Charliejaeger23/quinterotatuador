// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
    "./lib/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    container: { center: true, padding: "1rem", screens: { "2xl": "1200px" } },
    extend: {
      colors: {
        ink: {
          black: "#000000",
          dark: "#0B0B0B",
          soft: "#141414",
          white: "#F8F8F8",
          gray: "#A7A7A7",
          red:  "#7A0E0E",
        },
      },
      fontFamily: {
        cinzel: ["var(--font-cinzel)"],
        poppins: ["var(--font-poppins)"],
      },
      boxShadow: {
        soft: "0 6px 24px rgba(0,0,0,.35)",
      },
    },
  },
  plugins: [],
};

export default config;
