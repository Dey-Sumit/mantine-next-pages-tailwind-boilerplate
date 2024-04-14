import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      fontFamily: {
        sans: ["var(--font-inter)"],
        tiroBangla: ["var(--font-tiro-bangla)", "var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
export default config;
