<template lang="pug">
  .about-container
    Headshot
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Headshot from './Headshot.vue'

@Component({
  components: {
    Headshot
  }
})
export default class About extends Vue {}
</script>

<style lang="scss" scoped>
.about-container {
  margin-bottom: 1000px;
  display: flex;
  justify-content: center;
}
</style>

