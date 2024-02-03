/** @type {import('tailwindcss').Config} */
import { theme, color } from './src/Theme';
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          'h1' : theme.primaryH1,
          'h2' : theme.primaryH2,
          'h3' : theme.primaryH3,
          'h4' : theme.primatyH4,

          'b1' : theme.primaryB1,
          'b2' : theme.primaryB2,
          'b3' : theme.primaryB3,
          'b4' : theme.primaryB4,
          ...theme.primary

        },
        secondary:{
          'h1' : theme.secondaryH1,
          'h2' : theme.secondaryH2,
          'h3' : theme.secondaryH3,
          'h4' : theme.secondaryH4,
          'h5' : theme.secondaryH4,
          'h6' : theme.secondaryH4,
        }, 

        base :{
          'b0' : theme.baseB0,
          'b1' : theme.baseB1,
          'b2' : theme.baseB2,
          'b3' : theme.baseB3,
          'b4' : theme.baseB4,
        },

        gray : color.gray,
        warmGray : color.warmGray,
        success : theme.success,
        warning : theme.warning,
        error : theme.error
      },

    },
  },
  plugins: [],
}

