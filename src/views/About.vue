<template>
<div class="about-container" id="about" :style="backgroundColor">
    <Headshot></Headshot>
    <Philosophy></Philosophy>
</div>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import { useDarkMode } from '@/observables/darkMode'
import Headshot from '@/components/about/Headshot.vue'
import Philosophy from '@/components/about/Philosophy.vue'

const { isDarkModeEnabled, darkModeBackgroundColor } = useDarkMode()

const backgroundColor = computed(() => {
  if (isDarkModeEnabled) {
        return `background-color: ${darkModeBackgroundColor};`
      }
})
</script>

<style lang="scss" scoped>
.about-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
