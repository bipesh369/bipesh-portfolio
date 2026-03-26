/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",   // toggle via .dark on <html>
  theme: {
    extend: {
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body:    ["'Inter'", "sans-serif"],
        mono:    ["'Fira Code'", "monospace"],
      },
      colors: {
        blue: {
          50:  "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        navy: {
          800: "#0d1b2a",
          900: "#07111c",
          950: "#030d16",
        },
      },
      animation: {
        "blink":    "blink 1s step-end infinite",
        "float":    "float 8s ease-in-out infinite",
        "float-slow":"float 12s ease-in-out infinite reverse",
        "fade-up":  "fadeUp .6s ease forwards",
        "slide-in": "slideIn .35s cubic-bezier(.4,0,.2,1) forwards",
      },
      keyframes: {
        blink: {
          "0%,100%": { opacity: "1" },
          "50%":     { opacity: "0" },
        },
        float: {
          "0%,100%": { transform: "translateY(0) scale(1)" },
          "50%":     { transform: "translateY(-18px) scale(1.03)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          from: { transform: "translateX(-100%)" },
          to:   { transform: "translateX(0)" },
        },
      },
      boxShadow: {
        "card":      "0 2px 16px rgba(37,99,235,0.08)",
        "card-hover":"0 8px 36px rgba(37,99,235,0.18)",
        "glow":      "0 0 32px rgba(37,99,235,0.3)",
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [],
};