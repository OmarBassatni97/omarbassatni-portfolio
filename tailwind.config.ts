import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#21272f',
        secondary: '#00bd95'
      },
      fontFamily: {
        sans: ['var(--font-raleway)', 'sans-serif']
      }
    },
  },
  plugins: [],
}

export default config
