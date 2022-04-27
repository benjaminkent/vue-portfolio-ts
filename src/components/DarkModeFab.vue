<template>
  <div
    v-if="darkModeEnabled && darkModeLoaded"
    :class="[{ 'dark-mode': isDarkModeEnabled }, 'fab-button']"
    @click="fabClicked"
  >
    <transition name="fade" mode="out-in">
      <fa-icon
        v-if="isDarkModeEnabled"
        class="light-off"
        :icon="['fad', 'lightbulb-slash']"
        key="light-off"
      />
      <fa-icon
        v-else
        class="light-on"
        :icon="['fad', 'lightbulb-on']"
        key="light-on"
      />
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useDarkMode } from '@/observables/darkMode'
import { featureFlags } from '@/observables/featureFlags'
import { toastController } from '@/classes/toastController'

const { setDarkModePreference, disableDarkMode, isDarkModeEnabled } = useDarkMode()

const isDarkModeSelected = ref(false)
const darkModeLoaded = ref(false)

const darkModeEnabled = computed(() => featureFlags.darkModeEnabled)

onMounted(() => {
  initDarkModePreference()
  darkModeLoaded.value = true
})

function fabClicked(): void {
  isDarkModeSelected.value = !isDarkModeSelected.value

  window.localStorage.setItem(
    'darkModeEnabled',
    `${isDarkModeSelected.value}`
  )

  setDarkModePreference(isDarkModeSelected.value)

  if (isDarkModeSelected.value) {
    toastController.activateToast({ message: 'Dark mode activated!' })
    return
  }

  toastController.activateToast({ message: 'Dark mode turned off' })
}

function initDarkModePreference(): void {
  const savedDarkModePreference = window.localStorage.getItem(
    'darkModeEnabled'
  )

  if (!savedDarkModePreference || !darkModeEnabled) {
    isDarkModeSelected.value = false
    disableDarkMode()
    return
  }

  isDarkModeSelected.value = JSON.parse(savedDarkModePreference)
  setDarkModePreference(JSON.parse(savedDarkModePreference))
}
</script>

.<style lang="scss" scoped>
.fab-button.dark-mode {
  .light-off {
    border: 3px solid #000;
    background-color: #cccccc80;
  }
}
.fab-button {
  position: fixed;
  bottom: 50px;
  right: 40px;
  z-index: 1010;
  .light-on,
  .light-off {
    background-color: #ffffff90;
    border-radius: 50%;
    border: 3px solid #555;
    cursor: pointer;
    padding: 1.25rem 1rem;
    font-size: 40px;
  }
  .light-on {
    color: $secondary;
  }
  .light-off {
    color: #1a1a1a;
  }
}

.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-leave-active {
  transition: all 0.3s ease-in;
}
.fade-enter,
.fade-leave-to {
  transform: rotateY(90deg);
}

@media (max-width: 550px) {
  .fab-button {
    bottom: 20px;
    right: 20px;
    .light-on,
    .light-off {
      font-size: 30px;
      padding: 0.9rem 0.75rem;
    }
  }
}
</style>
