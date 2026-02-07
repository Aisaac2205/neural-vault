/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': '#000000',
        'card-bg': '#0a0a0a',
        'card-border': '#333333',
        'text-color': '#e5e5e5',
        'text-muted': '#a3a3a3',
        'accent-color': '#ffffff',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        pixel: ['Pixelify Sans', 'cursive'],
      },
      fontSize: {
        'fluid-xs': ['clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)', { lineHeight: '1.5' }],
        'fluid-sm': ['clamp(0.875rem, 0.8rem + 0.35vw, 1rem)', { lineHeight: '1.6' }],
        'fluid-base': ['clamp(1rem, 0.9rem + 0.5vw, 1.125rem)', { lineHeight: '1.7' }],
        'fluid-lg': ['clamp(1.125rem, 1rem + 0.6vw, 1.25rem)', { lineHeight: '1.6' }],
        'fluid-xl': ['clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)', { lineHeight: '1.5' }],
        'fluid-2xl': ['clamp(1.5rem, 1.3rem + 1vw, 2rem)', { lineHeight: '1.3' }],
        'fluid-3xl': ['clamp(1.875rem, 1.5rem + 1.5vw, 2.5rem)', { lineHeight: '1.2' }],
        'fluid-4xl': ['clamp(2.25rem, 1.8rem + 2vw, 3.5rem)', { lineHeight: '1.1' }],
        'fluid-5xl': ['clamp(3rem, 2.2rem + 3vw, 5rem)', { lineHeight: '1.05' }],
        'fluid-6xl': ['clamp(3.5rem, 2.5rem + 4vw, 6rem)', { lineHeight: '1' }],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'scroll': 'scroll 20s linear infinite', // Speed updated
      },
      keyframes: {
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(2deg)' },
          '100%': { transform: 'translateY(0px) rotate(0deg)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
