<template>
  <div class="app-container">
    <router-view />
    <toast />
  </div>
</template>

<script setup lang="ts">
import Toast from '@components/BkjToast.vue'
</script>

<style lang="scss">
.app-container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #222;
}

body,
html {
  margin: 0;
  height: 100%;
  position: relative;
}
</style>
