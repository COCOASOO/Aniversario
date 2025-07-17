/** @type {import('tailwindcss').Config} */
const defaultConfig = require("tailwindcss/defaultConfig")

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dancing: ["var(--font-dancing)"],
        kalam: ["var(--font-kalam)"],
      },
      colors: {
        // Colores kawaii inspirados en los animes
        kawaii: {
          pink: "#ffb6c1",
          lavender: "#e6e6fa",
          mint: "#f0ffff",
          ocean: "#b0e0e6",
          cherry: "#ffb7c5",
          pearl: "#fff8dc",
        },
        // Colores de The Apothecary Diaries
        apothecary: {
          jade: "#2d5a27",
          gold: "#daa520",
          sage: "#8fbc8f",
          crimson: "#dc143c",
          ivory: "#fffff0",
        },
        // Colores de Oshi no Ko
        oshi: {
          purple: "#4b0082",
          violet: "#9370db",
          star: "#ffd700",
          night: "#191970",
          shine: "#f0f8ff",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      animation: {
        "bounce-slow": "bounce 2s infinite",
        "pulse-slow": "pulse 3s infinite",
        "spin-slow": "spin 3s linear infinite",
      },
      backdropBlur: {
        xs: "2px",
      },
      borderWidth: {
        3: "3px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
