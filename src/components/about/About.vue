<template lang="pug">
  .about-container
    Headshot
    Philosophy
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Headshot from './Headshot.vue'
import Philosophy from './Philosophy.vue'

@Component({
  components: {
    Headshot,
    Philosophy
  }
})
export default class About extends Vue {}
</script>

<style lang="scss" scoped>
.about-container {
  margin-bottom: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

