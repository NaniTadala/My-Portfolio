import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
    light: {
      colors: {
        background: "#FFFFFF", // or DEFAULT
        foreground: "#11181C", // or 50 to 900 DEFAULT
        primary: {
          //... 50 to 900
          foreground: "#FFFFFF",
          DEFAULT: "#7828c8",
        },
        secondary: {
          foreground: '#FFFFFF',
          DEFAULT: '#f4f4f5'
        },
        // ... rest of the colors
      },
    },
    dark: {
      colors: {
        background: "#000000", // or DEFAULT
        foreground: "#ECEDEE", // or 50 to 900 DEFAULT
        primary: {
          //... 50 to 900
          foreground: "#FFFFFF",
          DEFAULT: "#9353d3",
        },
        secondary: {
          foreground: '#FFFFFF',
          DEFAULT: '#18181b'
        }
      },
      // ... rest of the colors
    },
  },
})],
}
export default config
