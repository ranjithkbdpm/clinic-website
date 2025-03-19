/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'], // Add Roboto or your chosen font
      },
      colors: {
        primary: '#5D9CEC',  /* Soft Blue */
        secondary: '#6BCB77',/* Light Green */
        neutralWhite: '#FFFFFF',   /* White */
        neutralGrey: '#F4F4F4',    /* Light Grey */
        accentDarkBlue: '#223D6A', /* Dark Blue */
        primaryBlue: '#1783a1'
      },
    },
  },
  plugins: [require("tailgrids/plugin")],
};
