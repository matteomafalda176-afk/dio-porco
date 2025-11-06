/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Premium Black Theme - Pure Black Backgrounds
        // Hex: #000000 | RGB: 0, 0, 0 - Pure black dominant
        'brand-black': '#000000',

        // Hex: #0A0A0A | RGB: 10, 10, 10 - Zinc-950 alternate sections
        'brand-zinc-950': '#0A0A0A',

        // Hex: #18181B | RGB: 24, 24, 27 - Zinc-900 elevated cards
        'brand-zinc-900': '#18181B',

        // Text Colors - Maximum Contrast
        // Hex: #FFFFFF | RGB: 255, 255, 255 - Pure white titles (21:1 contrast)
        'brand-white': '#FFFFFF',

        // Hex: #D1D5DB | RGB: 209, 213, 219 - Gray-300 body text (14:1 contrast)
        'brand-gray': '#D1D5DB',

        // Hex: #9CA3AF | RGB: 156, 163, 175 - Gray-400 secondary text (8:1 contrast)
        'brand-gray-light': '#9CA3AF',

        // Vibrant Accents - Colors that "Pop" on Black
        // Hex: #F97316 | RGB: 249, 115, 22 - Orange-500 for CTAs with glow
        'brand-orange': '#F97316',

        // Hex: #22D3EE | RGB: 34, 211, 238 - Cyan-400 high-tech accent
        'brand-cyan': '#22D3EE',

        // Hex: #06B6D4 | RGB: 6, 182, 212 - Cyan-500 darker cyan
        'brand-cyan-dark': '#06B6D4',

        // Hex: #FACC15 | RGB: 250, 204, 21 - Yellow-400 metallic gold
        'brand-gold': '#FACC15',

        // Hex: #A855F7 | RGB: 168, 85, 247 - Purple-500 tertiary accent
        'brand-purple': '#A855F7',

        // Hex: #C084FC | RGB: 192, 132, 252 - Purple-400 lighter purple
        'brand-purple-light': '#C084FC',
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
