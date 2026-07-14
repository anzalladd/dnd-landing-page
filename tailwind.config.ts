import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,ts,tsx}',
    './components/**/*.{vue,ts,tsx}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        bagoss: ['Bagoss Standard', 'Inter', 'sans-serif'],
        sfpro: ['SF Pro Display', 'SF Pro', 'Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        basis: ['Basis Grotesque Arabic Pro', 'Inter', 'sans-serif'],
      },
      colors: {
        secondary: {
          900: '#000000',
          500: '#000000',
          300: '#545454',
          200: '#8A8A8A',
          100: '#B0B0B0',
          50: '#E6E6E6',
        },
        cream: '#F8F6F3',
        white: {
          DEFAULT: '#FFFFFF',
          50: '#FDFDFD',
        },
        'page-bg': '#F7F6F6',
        'dark-text': '#091416',
        'hero-heading': '#121212',
        'muted-text': '#A8A8A8',
        'green-badge': '#66E27D',
        'section-bg': '#E8E8DD',
      },
      maxWidth: {
        '8xl': '1440px',
      },
      spacing: {
        '15': '60px',  // px-[60px]
        '43': '172px', // px-[172px] (About section)
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
