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
        amber: {
          50: '#fff9ed',
          100: '#ffeed3',
          200: '#fed8a5',
          300: '#febb6d',
          400: '#fea216', // Logo Orange Base
          500: '#f98607',
          600: '#dd6202',
          700: '#b84406',
          800: '#94340c',
          900: '#7a2d0f',
          950: '#451505',
        },
        red: {
          50: '#fff0ec',
          100: '#ffded6',
          200: '#ffc1b2',
          300: '#ff977f',
          400: '#ff6142',
          500: '#fd3711', // Logo Bright Red
          600: '#ef2400',
          700: '#c71900',
          800: '#aa012e', // Logo Dark Crimson
          900: '#85121b',
          950: '#480409',
        },
        brand: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
          amber: "#fea216",
          amberDark: "#dd6202",
          amberLight: "#fff9ed",
          amberBorder: "#fed8a5",
          cyan: "#0284c7",
          cyanLight: "#e0f2fe",
          whatsapp: "#25D366",
          whatsappHover: "#1ebe57",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        heading: ["var(--font-plus-jakarta)", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 8px -1px rgba(0, 0, 0, 0.06), 0 1px 3px -1px rgba(0, 0, 0, 0.04)",
        "card-hover": "0 12px 24px -4px rgba(0, 0, 0, 0.08), 0 4px 8px -2px rgba(0, 0, 0, 0.04)",
        dock: "0 -4px 20px -2px rgba(0, 0, 0, 0.1), 0 2px 6px -1px rgba(0, 0, 0, 0.06)",
        glow: "0 0 25px -3px rgba(245, 158, 11, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
