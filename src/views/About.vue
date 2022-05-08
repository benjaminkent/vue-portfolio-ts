<template>
<div :class="['about-container', { 'dark-container': isDarkModeEnabled}]" id="about">
    <Headshot></Headshot>
    <Philosophy></Philosophy>
</div>
</template>

<script setup lang="ts">
import { useDarkMode } from '@observables'
import Headshot from '@components/about/Headshot.vue'
import Philosophy from '@components/about/Philosophy.vue'

const { isDarkModeEnabled } = useDarkMode()
</script>

<style lang="scss" scoped>
.about-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.dark-container {
  background-color: #222;
}
</style>
