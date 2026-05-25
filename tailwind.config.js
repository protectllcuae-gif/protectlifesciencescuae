export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0a192f',
          gold: '#d4af37',
          light: '#f8f9fa',
          dark: '#020c1b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(to right bottom, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
      }
    },
  },
  plugins: [],
}
