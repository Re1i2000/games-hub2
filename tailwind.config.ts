import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          900: '#0f172a',
        },
        purple: {
          900: '#581c87',
        },
        cyan: {
          300: '#06b6d4',
          400: '#06b6d4',
          500: '#0891b2',
          600: '#0891b2',
        },
      },
    },
  },
  plugins: [],
}
export default config
