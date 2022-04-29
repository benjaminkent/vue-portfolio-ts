import { computed, ref } from 'vue'

const darkModeState = ref({
  enabled: false,
  backgroundColor: '#222',
})

export const useDarkMode = () => {
  function setDarkModePreference(preference: boolean) {
    darkModeState.value.enabled = preference
  }

  function disableDarkMode() {
    darkModeState.value.enabled = false
  }

  return {
    setDarkModePreference,
    disableDarkMode,
    isDarkModeEnabled: computed(() => darkModeState.value.enabled),
    darkModeBackgroundColor: computed(() => darkModeState.value.backgroundColor)
  }
}
