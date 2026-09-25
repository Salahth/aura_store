import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a5f",
        "primary-light": "#2c4f7a",
        whatsapp: "#25D366",
        "whatsapp-dark": "#1ebe5c",
      },
    },
  },
  plugins: [],
};

export default config;