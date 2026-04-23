/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Syne', 'sans-serif'],
        'serif': ['Fraunces', 'serif'],
        'syne': ['Syne', 'sans-serif'],
        'fraunces': ['Fraunces', 'serif'],
      },
      colors: {
        'black': '#0A0A0A',
        'off': '#F5F0E8',
        'warm': '#EDE4D4',
        'gold': '#D4A017',
        'gold-l': '#F0C040',
        'gold-pale': '#FBF5E0',
        'green': '#1B4D3E',
        'green-l': '#2A7A5E',
        'rust': '#B84A1A',
        'muted': '#6B6050',
        'mid': '#3A3028',
        'white': '#FFFFFF',
      },
      spacing: {
        '13': '52px',
        '15': '60px',
        '18': '72px',
        '20': '80px',
        '25': '100px',
      },
      animation: {
        'slideUp': 'slideUp 1s ease both',
        'marquee': 'marquee 28s linear infinite',
        'pulse': 'pulse 2.5s infinite',
      },
      keyframes: {
        slideUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(36px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        marquee: {
          'from': {
            transform: 'translateX(0)',
          },
          'to': {
            transform: 'translateX(-50%)',
          },
        },
        pulse: {
          '0%, 100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.3',
            transform: 'scale(0.7)',
          },
        },
      },
    },
  },
  plugins: [],
}
