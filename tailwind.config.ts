import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          DEFAULT: '#F16F63',
          soft: '#FCE4E1',
          dark: '#D85A4E',
        },
        ink: '#171717',
        cream: '#FFFDFC',
        neutral: '#F7F4F2',
        muted: '#716A67',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'hero-zoom': 'heroZoom 12s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        heroZoom: {
          from: { transform: 'scale(1.06)' },
          to: { transform: 'scale(1)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      letterSpacing: {
        wider: '0.12em',
        widest: '0.22em',
        brand: '0.35em',
      },
    },
  },
  plugins: [],
}

export default config
