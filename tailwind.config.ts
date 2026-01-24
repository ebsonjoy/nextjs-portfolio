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
          DEFAULT: '#5CA275', // Primary Accent
          hover: '#6EB78A',   // Hover Bg
          foreground: '#0F1A14' // Text on Primary
        },
        navy: {
          DEFAULT: '#0F1A14', // Main Background (Deep green-black)
          light: '#16261D',   // Section Background
          alt: '#1E3327',     // Alt Background (hover/dividers)
        },
        accent: {
          from: '#3E7A56', // Accent Dark
          to: '#7FBE98',   // Accent Light
        },
        text: {
          primary: '#EAF5EF',   // Heading Text (Soft white)
          secondary: '#BFDCCD', // Body Text (Muted green-gray)
          muted: '#8FB8A2',     // Muted Text (Low emphasis)
        },
        link: {
          DEFAULT: '#7FBE98',
          hover: '#5CA275',
        }
      },
      boxShadow: {
        'card': '0 18px 36px rgba(0,0,0,0.45)',
        'glow': '0 0 20px rgba(92,162,117,0.25)',
      },
      borderRadius: {
        'card': '16px',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
