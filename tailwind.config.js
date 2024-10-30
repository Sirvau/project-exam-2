/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        base: ['Inria Sans', 'Inter', 'Avenir'],
        header: ['Inria Serif', 'sans-serif']
      },

      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        modal: 'var(--color-bg-modal)',
        tBase: 'var(--color-text-base)',
        overlayLight: 'var(--color-overlay-light)',
        overlayLighter: 'var(--color-overlay-lighter)'
      }
    }
  },
  plugins: [require('daisyui')]
};
