/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
        secondary: '#f9f7f2',
        'site-bg': '#f9f3f3',
        'new-bg': '#f9f9f9',
        accent: '#8B8B8B',
        'pink-light': '#f5f5f5',
        'pink-lighter': '#e8e8e8',
        'official': '#f9f7f2',
        'mouse-gray': '#8B8B8B',
      },
      fontFamily: {
        'sharp': ['Sharp Grotesk Light 15'],
        'sharp-medium': ['Sharp Grotesk Medium 25'],
        'sharp-bold': ['Sharp Grotesk Bold 25'],
        'sharp-book': ['Sharp Grotesk Book 25'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'paneuropa': ['Paneuropa Road', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 