/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    /* container:{
      center:true,
      padding:"2rem",      
    }, */
    extend: {
      fontFamily:{
        body:['Poetsen One'],
        body1:['Radio Canada Big'],
        body2:['Yeseva One']
      }
    },
  },
  plugins: [],
}

