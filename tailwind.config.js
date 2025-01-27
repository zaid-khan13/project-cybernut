/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '320px',
        // => @media (min-width: 640px) { ... }

        'mm': '375px',
        // => @media (min-width: 768px) { ... }

        'ml': '425px',
        // => @media (min-width: 1024px) { ... }

        'md': '768px',
        // => @media (min-width: 1280px) { ... }

        'lg': '1024px',
        'xl': '1440px',
        '2xl': '1728px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
};
