/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#265C4B',
        moss: '#265C4B',
        sunset: '#E6A75E',
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
