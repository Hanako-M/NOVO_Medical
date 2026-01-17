/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    screens:{
      sm:"340px",
      md:"540px",
      lg:"768px",
      xl:"1180px"
    },
    extend: {},
   fontFamily: {
        inter: ['Inter', 'sans-serif'],
        opensans: ['"Open Sans"', 'sans-serif'],
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"12px",
          md:"32px"
        }
      }
  },
  plugins: [],
}