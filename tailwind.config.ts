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
        'dark-blue': 'hsl(240, 38%, 20%)',
        'grayish-blue': 'hsl(240, 18%, 77%)',
      },
    },
  },
  plugins: [],
}
export default config
