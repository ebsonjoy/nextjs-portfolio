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
        primary: {
          DEFAULT: '#38BDF8', // Electric Cyan
          hover: '#0EA5E9',   // Vivid Sky Blue
          foreground: '#0B0F19' // Deep dark contrast text
        },
        navy: {
          DEFAULT: '#0B0F19', // Main Dark Canvas (Midnight Slate)
          light: '#111827',   // Card Surface Background
          alt: '#1E293B',     // Highlight/Divider Surface
          border: 'rgba(255, 255, 255, 0.08)',
        },
        accent: {
          from: '#38BDF8', // Cyan 400
          via: '#6366F1',  // Indigo 500
          to: '#A855F7',   // Purple 500
        },
        text: {
          primary: '#F8FAFC',   // Heading Text (Pure Crisp White)
          secondary: '#CBD5E1', // Body Text (Soft Slate)
          muted: '#94A3B8',     // Muted Text (Low emphasis)
        },
        link: {
          DEFAULT: '#38BDF8',
          hover: '#818CF8',
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      boxShadow: {
        'card': '0 20px 40px -15px rgba(0,0,0,0.7)',
        'glow': '0 0 25px rgba(56,189,248,0.25)',
        'glow-purple': '0 0 25px rgba(168,85,247,0.25)',
      },
      borderRadius: {
        'card': '20px',
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
