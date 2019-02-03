import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: colors.red.lighten2,
    accent: colors.deepOrange.lighten1,
    secondary: colors.deepOrange.lighten2,
    info: colors.deepOrange.lighten4,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.blueGrey.darken3
  }
})
