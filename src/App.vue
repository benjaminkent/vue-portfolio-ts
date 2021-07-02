<template>
  <div class="app-container">
    <router-view />
    <toast />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Toast from '@/components/BkjToast.vue'

export default Vue.extend({
  name: 'App',
  components: {
    Toast,
  },
})
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
