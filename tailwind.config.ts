import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050608",
          900: "#0a0c10",
          800: "#12151c",
          700: "#1b1f28",
          600: "#2a2f3a",
        },
        accent: {
          DEFAULT: "#a78bfa", // purple
          soft: "#c4b5fd",
          violet: "#8b5cf6",
        },
        gold: {
          DEFAULT: "#c9a24b",
          deep: "#a67c1e",
          soft: "#e6cf94",
        },
        cream: {
          DEFAULT: "#faf6ef",
          200: "#f2ead9",
          ink: "#2b2118",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "grid-fade": {
          "0%, 100%": { opacity: "0.25" },
          "50%": { opacity: "0.4" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        "grid-fade": "grid-fade 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
