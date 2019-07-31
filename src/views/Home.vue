<template lang="pug">
  .home-container
    AppHeader
    Jumbotron
    .about-section
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppHeader from '../components/Header.vue'
import Jumbotron from '../components/Jumbotron.vue'

@Component({
  components: {
    AppHeader,
    Jumbotron
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.about-section {
  height: 2000px;
}
</style>

