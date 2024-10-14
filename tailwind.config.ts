import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        "search-shadow":
          "-2px 0px 10px 0 rgba(0, 0, 0, 0.2), -2px 1px 20px 0 rgba(0, 0, 0, 0.19)",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
