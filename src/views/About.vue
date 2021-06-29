<template lang="pug">
  .about-container(id='about')
    Headshot
    Philosophy
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Headshot from '@/components/about/Headshot.vue'
import Philosophy from '@/components/about/Philosophy.vue'

@Component({
  components: {
    Headshot,
    Philosophy,
  },
})
export default class About extends Vue {}
</script>

<style lang="scss" scoped>
.about-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
