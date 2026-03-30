/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        clementine: 'var(--clementine)',
        coffee: 'var(--coffee)',
        'paper-white': 'var(--paper-white)',
        'muted-olive': 'var(--muted-olive)',
        'line-soft': 'var(--line-soft)',
      },
    },
  },
  plugins: [],
};
