/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'dark-bg': '#0a0a0a',
        'dark-surface': '#1a1a1a',
        'dark-text': '#ffffff',
        'dark-text-secondary': '#a0a0a0',
        'light-bg': '#ffffff',
        'light-surface': '#f8f9fa',
        'light-text': '#1a1a1a',
        'light-text-secondary': '#6b7280',
        'light-border': '#e5e7eb',
        'light-hover': '#f3f4f6',
      }
    },
  },
  plugins: [],
}
