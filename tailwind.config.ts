import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        espresso: "#352016",
        terracotta: "#A65338",
        sand: "#F1E5D5",
        taupe: "#C7A783"
      },
      fontFamily: {
        heading: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Montserrat", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};
export default config;
