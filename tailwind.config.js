/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // צבעים סמנטיים דרך משתני CSS (ראו index.css)
        surface: 'rgb(var(--c-bg) / <alpha-value>)',
        elevated: 'rgb(var(--c-elev) / <alpha-value>)',
        content: 'rgb(var(--c-text) / <alpha-value>)',
        // פאנל כהה (קונטקט)
        ink: {
          DEFAULT: '#0B1220',
          900: '#0B1220',
        },
        // פלטת המותג — כחול/סגול/ורוד
        brand: {
          blue: '#0E7CFF',
          blue2: '#4A9DFF',
          purple: '#7C5CFF',
          pink: '#D6409F',
          cyan: '#4FD8FF', // אקסנט על כהה
          violet: '#9D7BFF', // אקסנט על כהה
        },
      },
      fontFamily: {
        sans: ['Heebo', 'system-ui', 'sans-serif'],
        display: ['Heebo', 'system-ui', 'sans-serif'],
        grotesk: ['"Space Grotesk"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        // גרדיאנט כפתורים
        'brand-gradient': 'linear-gradient(120deg, #0E7CFF, #4A9DFF)',
      },
      boxShadow: {
        card: '0 4px 24px rgba(11,18,32,.05)',
        'card-hover': '0 24px 60px rgba(14,124,255,.16)',
        cta: '0 12px 36px rgba(14,124,255,.35)',
        'cta-hover': '0 18px 48px rgba(14,124,255,.5)',
        nav: '0 12px 40px rgba(11,18,32,.08)',
      },
      keyframes: {
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
        float: 'float 7s ease-in-out infinite',
        marquee: 'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
}
