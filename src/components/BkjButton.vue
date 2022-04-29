<template>
  <button
    :class="[
      { disabled: disabled, 'dark-mode': isDarkModeEnabled },
      'bkj-button',
    ]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { useDarkMode } from '@/observables/darkMode'

const { isDarkModeEnabled } = useDarkMode()

defineProps<{
  disabled: boolean
}>()
</script>

<style lang="scss" scoped>
.bkj-button.dark-mode {
  background-color: $dm-secondary;
  color: #222;
}
.bkj-button.dark-mode:hover {
  background-color: #333;
  color: #ddd;
}
.bkj-button.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.bkj-button {
  align-self: flex-start;
  font-size: 16px;
  border: none;
  background-color: $secondary;
  color: #fff;
  padding: 20px 30px;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
}
.bkj-button:hover {
  background-color: #333;
  transition: 0.3s all ease-in-out;
}
</style>
