/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#3d3fa5",
        
"secondary": "#6b4cc9",
        
"accent": "#ff4245",
        
"neutral": "#181C21",
        
"base-100": "#fff",
        
"info": "#4885CB",
        
"success": "#42D17B",
        
"warning": "#FBD051",
        
"error": "#EA331F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

