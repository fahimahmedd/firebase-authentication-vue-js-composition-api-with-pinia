/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes:{
      light: {
        colors: {
          primary: '#4C7766', // Default primary color
          secondary: '#D4846D', // Default secondary color
        },
      },
      dark: {
        colors: {
          primary: '#90CAF9', // Different primary for dark mode
          secondary: '#FFCA28', // Different secondary for dark mode
        },
      },
    }
  },
})
