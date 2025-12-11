import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0a0a0a',
        'brand-charcoal': '#1a1a1a',
        'brand-red': '#B22222',
        'brand-dark-red': '#8B0000',
        'brand-light-red': '#DC143C',
        'brand-gray': '#8a8a8a',
        'brand-light-gray': '#d1d1d1',
      },
      fontFamily: {
         sans: ['Inter', 'sans-serif'],
         syne: ['var(--font-syne)', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-green': 'pulse-green 2s infinite cubic-bezier(0.66, 0, 0, 1)',
        'scroll': 'scroll 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-green': {
          '0%': { width: '100%', height: '100%', opacity: '0.7' },
          '100%': { width: '300%', height: '300%', opacity: '0' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;