import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8F7F3',
        surface: {
          DEFAULT: '#111216',
          subtle: '#16181D',
          elevated: '#1D1F26',
        },
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.08)',
          strong: 'rgba(255, 255, 255, 0.16)',
        },
        primary: {
          DEFAULT: '#BE492C',
          hover: '#0EA5E9',
          foreground: '#F8F7F3',
          muted: 'rgba(56, 189, 248, 0.12)',
        },
        accent: {
          indigo: '#818CF8',
          emerald: '#34D399',
          amber: '#FBBF24',
        },
        text: {
          primary: '#252621',
          secondary: '#64665F',
          muted: '#72746C',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config;
