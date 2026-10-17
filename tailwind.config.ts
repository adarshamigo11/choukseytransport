import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#0B2545", light: "#1E3A8A", dark: "#071a33" },
        accent: { DEFAULT: "#E65100", strong: "#D84315" },
        paper: "#F8FAFC",
        ink: "#0F172A",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        pulseRing: {
          "0%": { boxShadow: "0 0 0 0 rgba(230,81,0,0.6)" },
          "70%": { boxShadow: "0 0 0 14px rgba(230,81,0,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(230,81,0,0)" },
        },
      },
      animation: { pulseRing: "pulseRing 2s infinite" },
    },
  },
  plugins: [],
};

export default config;
