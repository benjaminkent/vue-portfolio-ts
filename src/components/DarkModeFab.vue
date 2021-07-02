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

<script lang="ts">
import Vue from 'vue'
import {
  actions as darkModeActions,
  getters as darkModeGetters,
} from '@/observables/darkMode'
import { featureFlags } from '@/observables/featureFlags'
import { toastController } from '@/classes/toastController'

export default Vue.extend({
  name: 'FloatingActionButton',
  data() {
    return {
      isDarkModeSelected: false,
      darkModeLoaded: false,
    }
  },
  computed: {
    ...darkModeGetters,
    darkModeEnabled(): boolean {
      return featureFlags.darkModeEnabled
    },
  },
  mounted() {
    this.initDarkModePreference()
    this.darkModeLoaded = true
  },
  methods: {
    ...darkModeActions,
    fabClicked(): void {
      this.isDarkModeSelected = !this.isDarkModeSelected

      window.localStorage.setItem(
        'darkModeEnabled',
        `${this.isDarkModeSelected}`
      )

      this.setDarkModePreference(this.isDarkModeSelected)

      if (this.isDarkModeSelected) {
        toastController.activateToast({ message: 'Dark mode activated!' })
        return
      }

      toastController.activateToast({ message: 'Dark mode turned off' })
    },
    initDarkModePreference(): void {
      const savedDarkModePreference = window.localStorage.getItem(
        'darkModeEnabled'
      )

      if (!savedDarkModePreference || !this.darkModeEnabled) {
        this.isDarkModeSelected = false
        this.disableDarkMode()
        return
      }

      this.isDarkModeSelected = JSON.parse(savedDarkModePreference)
      this.setDarkModePreference(JSON.parse(savedDarkModePreference))
    },
  },
})
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
  z-index: 10;
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
