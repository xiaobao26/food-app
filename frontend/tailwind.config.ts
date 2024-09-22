import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Include app directory
    './components/**/*.{js,ts,jsx,tsx}', // Include components directory
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
