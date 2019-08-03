<template lang="pug">
  .home-container
    AppHeader
    Jumbotron
    About
    Toolset
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppHeader from '@/components/Header.vue'
import Jumbotron from '@/components/Jumbotron.vue'
import About from '@/views/About.vue'
import Toolset from '@/views/Toolset.vue'

@Component({
  components: {
    AppHeader,
    Jumbotron,
    About,
    Toolset
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.about-section {
  height: 2000px;
}
</style>

