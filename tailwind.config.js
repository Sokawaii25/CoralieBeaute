import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#FFF5F5',
        'pink-soft': '#FFE4E6',
        'pink-medium': '#FFC0CB',
        'pink-dark': '#E91E63',
      },
      fontFamily: {
        'serif': ['Georgia'],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        coraliebeaute: {
          "primary": "#000000",
          "secondary": "#FFC0CB",
          "accent": "#FFE4E6",
          "neutral": "#2a2a2a",
          "base-100": "#FFF5F5",
          "info": "#93c5fd",
          "success": "#86efac",
          "warning": "#fde047",
          "error": "#fca5a5",
        },
      },
    ],
  },
}
