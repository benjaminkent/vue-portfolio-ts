import Vue from 'vue'

const darkModeState = Vue.observable({
  enabled: false,
  backgroundColor: '#222',
})

export const actions = {
  setDarkModePreference(preference: boolean) {
    darkModeState.enabled = preference
  },
  disableDarkMode() {
    darkModeState.enabled = false
  },
}

export const getters = {
  isDarkModeEnabled: () => darkModeState.enabled,
  darkModeBackgroundColor: () => darkModeState.backgroundColor,
}
