/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-purple': 'var(--dark-purple)',
        'light-purple': 'var(--light-purple)',
        'dark-gray': 'var(--dark-gray)',
        'middle-gray': 'var(--middle-gray)',
        gray: 'var(--gray)',
        'light-gray': 'var(--light-gray)',
        green: 'var(--green)',
      },
    },
  },
  plugins: [],
}
