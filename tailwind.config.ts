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
        pastel: {
          pink: "#f9a8d4",
          rose: "#fb7fb8",
          lilac: "#c4b5fd",
          peach: "#fdba74",
          mint: "#6ee7b7",
          sky: "#93c5fd",
          butter: "#fde68a",
          cream: "#fff9f2",
          plum: "#5b3b57",
          ink: "#6b4a5f",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        cute: ["var(--font-cute)", "system-ui", "sans-serif"],
        hand: ["var(--font-hand)", "cursive"],
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
        floaty: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-22px) rotate(6deg)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.35", transform: "scale(0.85)" },
          "50%": { opacity: "1", transform: "scale(1.15)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(4deg)" },
        },
        bob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pop-in": {
          "0%": { opacity: "0", transform: "scale(0.8) translateY(20px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        "grid-fade": "grid-fade 8s ease-in-out infinite",
        floaty: "floaty 6s ease-in-out infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        wiggle: "wiggle 2.5s ease-in-out infinite",
        bob: "bob 4s ease-in-out infinite",
        "pop-in": "pop-in 0.6s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
