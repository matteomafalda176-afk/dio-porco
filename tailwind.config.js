/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary Black - Dominant Background (80% usage)
        // Hex: #0B0D12 | RGB: 11, 13, 18
        'brand-black': '#0B0D12',

        // Neutral Gray - Light text on dark, alternating sections
        // Hex: #F5F7FA | RGB: 245, 247, 250
        'brand-white': '#F5F7FA',

        // Medium Gray - Borders, dividers, subtle accents
        // Hex: #6B7280 | RGB: 107, 114, 128
        'brand-gray': '#6B7280',

        // Light Gray - Hover states, secondary backgrounds
        // Hex: #9CA3AF | RGB: 156, 163, 175
        'brand-gray-light': '#9CA3AF',

        // CTA Orange - EXCLUSIVE for Call-to-Action elements ONLY
        // Hex: #ff6a00 | RGB: 255, 106, 0
        // USE ONLY FOR: Primary buttons, submit buttons, key action elements
        'brand-orange': '#ff6a00',
      },
      fontFamily: {
        'sans': ['Montserrat', 'system-ui', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 1s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
};