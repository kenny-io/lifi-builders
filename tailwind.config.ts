import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          DEFAULT: "#F7C2FF",
          hover: "#FFD4FF",
          dark: "#E5A3F0",
        },
        blue: {
          DEFAULT: "#5C67FF",
          hover: "#6E78FF",
        },
        "bg-default": "#0A0A0F",
        "bg-paper": "#12121A",
        "bg-elevated": "#1A1A24",
        "bg-card": "#16161F",
        "text-primary": "#F4F4F5",
        "text-secondary": "#9CA3AF",
        border: "#2A2A35",
        "border-subtle": "#1F1F28",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
