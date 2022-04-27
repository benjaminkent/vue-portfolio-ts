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

  const isDarkModeEnabled = computed(() => darkModeState.value.enabled)
  const darkModeBackgroundColor = computed(() => darkModeState.value.backgroundColor)

  return {
    setDarkModePreference,
    disableDarkMode,
    isDarkModeEnabled,
    darkModeBackgroundColor
  }
}
