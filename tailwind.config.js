/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2D3142', // Dark slate blue
        secondary: '#4F5D75', // Medium slate blue
        accent: '#E27D60', // Coral
        'accent-dark': '#C86A51', // Darker coral
        neutral: {
          50: '#F9F5F0', // Light cream
          100: '#E8E4DF', // Cream
          200: '#D1C9C2', // Light beige
          300: '#B9AFA8', // Beige
          400: '#97897F', // Medium beige
          500: '#766A62', // Dark beige
          600: '#5A5046', // Brown
          700: '#3E372F', // Dark brown
          800: '#2A251F', // Very dark brown
          900: '#151210', // Almost black
        },
        success: '#9BC53D', // Lime green
        warning: '#FFC857', // Yellow
        error: '#E55934', // Red
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      spacing: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};