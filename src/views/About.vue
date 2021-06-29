<template lang="pug">
  .about-container(id='about' :style="backgroundColor")
    Headshot
    Philosophy
</template>

<script lang="ts">
import Vue from 'vue'
import { getters as darkModeGetters } from '@/observables/darkMode'
import Headshot from '@/components/about/Headshot.vue'
import Philosophy from '@/components/about/Philosophy.vue'

export default Vue.extend({
  name: 'About',
  components: {
    Headshot,
    Philosophy,
  },
  computed: {
    ...darkModeGetters,
    backgroundColor(): string {
      if (this.isDarkModeEnabled) {
        return `background-color: ${this.darkModeBackgroundColor};`
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.about-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
