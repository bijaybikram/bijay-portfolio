/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fdfbef',
          100: '#fbf6d6',
          200: '#f5eeb8',
          300: '#ebe1a0',
          400: '#ddd07a',
          500: '#c9b855',
          600: '#a89537',
          700: '#7d6e25',
          800: '#4a4117',
          900: '#2d2810',
        },
        ink: {
          DEFAULT: '#1a1610',
          soft: '#3a3225',
          muted: '#6a6048',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      animation: {
        'blob': 'blob 22s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(40px, -60px) scale(1.08)' },
          '66%': { transform: 'translate(-30px, 30px) scale(0.95)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
