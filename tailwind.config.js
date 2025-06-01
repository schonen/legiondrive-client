/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}", // Adaptez en fonction de votre framework (React, Vue, Svelte, etc.)
  ],
  theme: {
    extend: {}, // Vous pouvez étendre les styles par défaut ici
  },
  plugins: [], // Ajoutez des plugins Tailwind si nécessaire
}