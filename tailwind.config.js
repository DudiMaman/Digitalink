/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // צבעים סמנטיים שמתחלפים בין כהה/בהיר דרך משתני CSS (ראו index.css)
        surface: 'rgb(var(--c-bg) / <alpha-value>)',
        elevated: 'rgb(var(--c-elev) / <alpha-value>)',
        content: 'rgb(var(--c-text) / <alpha-value>)',
        // בסיס כהה בגוון צפחה-טורקיז, נגזר מצבע הלוגו (#3C4A47)
        ink: {
          DEFAULT: '#0A1311',
          800: '#0F1B18',
          700: '#16261F',
          600: '#1E332B',
        },
        slate: {
          brand: '#3C4A47', // צבע הלוגו המקורי
        },
        brand: {
          cyan: '#22D3EE',
          teal: '#14B8A6',
          emerald: '#10B981',
        },
      },
      fontFamily: {
        sans: ['Heebo', 'system-ui', 'sans-serif'],
        display: ['Rubik', 'Heebo', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient':
          'linear-gradient(120deg, #22D3EE 0%, #14B8A6 50%, #10B981 100%)',
      },
      keyframes: {
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-24px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'gradient-pan': 'gradient-pan 8s ease infinite',
        float: 'float 7s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
}
