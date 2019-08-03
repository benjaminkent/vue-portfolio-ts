<template lang="pug">
  .home-container(id='home')
    AppHeader
    Jumbotron
    About
    Toolset
    Portfolio
    ContactMe
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppHeader from '@/components/Header.vue'
import Jumbotron from '@/components/Jumbotron.vue'
import About from '@/views/About.vue'
import Toolset from '@/views/Toolset.vue'
import Portfolio from '@/views/Portfolio.vue'
import ContactMe from '@/views/ContactMe.vue'

@Component({
  components: {
    AppHeader,
    Jumbotron,
    About,
    Toolset,
    Portfolio,
    ContactMe
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
</style>

