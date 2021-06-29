import Vue from 'vue'

const darkModeState = Vue.observable({
  enabled: false,
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
}
