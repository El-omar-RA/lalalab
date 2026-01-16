import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        base: "var(--color-base)",
        surface: "var(--color-surface)",
        primary: "var(--color-primary)",
        accent: "var(--color-accent)",
        secondary: "var(--color-secondary)",
        text: "var(--color-text)",
        muted: "var(--color-muted)",
        border: "var(--color-border)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(37, 99, 235, 0.35)",
        card: "0 12px 40px rgba(2, 8, 20, 0.55)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(600px 300px at 20% 0%, rgba(37, 99, 235, 0.35), transparent), radial-gradient(500px 300px at 80% 10%, rgba(37, 99, 235, 0.2), transparent)",
      },
    },
  },
  plugins: [],
};

export default config;