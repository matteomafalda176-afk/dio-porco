/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary Light Background - Dominant (80% usage)
        // Hex: #FAFAF8 | RGB: 250, 250, 248 - Warm off-white/cream
        'brand-white': '#FAFAF8',

        // Text Color - Dark charcoal for excellent contrast
        // Hex: #2B2B2B | RGB: 43, 43, 43
        'brand-black': '#2B2B2B',

        // Medium Gray - Borders, dividers, subtle text
        // Hex: #9CA3AF | RGB: 156, 163, 175
        'brand-gray': '#9CA3AF',

        // Light Gray - Hover states, secondary backgrounds
        // Hex: #E5E7EB | RGB: 229, 231, 235
        'brand-gray-light': '#E5E7EB',

        // CTA Orange - EXCLUSIVE for Call-to-Action elements ONLY
        // Hex: #ff6a00 | RGB: 255, 106, 0
        'brand-orange': '#ff6a00',

        // Pastel Accents - From design references
        // Lilac: #E8D5F5 | RGB: 232, 213, 245
        'brand-lilac': '#E8D5F5',

        // Dusty Rose: #C9A7A5 | RGB: 201, 167, 165
        'brand-rose': '#C9A7A5',

        // Teal/Blue: #5BA4A4 | RGB: 91, 164, 164
        'brand-teal': '#5BA4A4',

        // Mocha: #8B7355 | RGB: 139, 115, 85
        'brand-mocha': '#8B7355',

        // Dark Section Background: #3A3A3A | RGB: 58, 58, 58
        'brand-dark': '#3A3A3A',
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
