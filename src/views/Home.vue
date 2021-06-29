<template lang="pug">
  .home-container(id='home')
    AppHeader
    Jumbotron
    About
    Toolset
    Portfolio
    ContactMe
    AppFooter
    fab
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppHeader from '@/components/Header.vue'
import Jumbotron from '@/components/Jumbotron.vue'
import About from '@/views/About.vue'
import Toolset from '@/views/Toolset.vue'
import Portfolio from '@/views/Portfolio.vue'
import ContactMe from '@/views/ContactMe.vue'
import AppFooter from '@/components/Footer.vue'
import Fab from '@/components/FloatingActionButton.vue'

Component.registerHooks(['metaInfo'])

@Component({
  components: {
    AppHeader,
    Jumbotron,
    About,
    Toolset,
    Portfolio,
    ContactMe,
    AppFooter,
    Fab,
  },
})
export default class Home extends Vue {
  public metaInfo() {
    return {
      title: 'Ben Jehl',
      titleTemplate: '%s | Software Engineer',
      meta: [
        {
          name: 'description',
          content:
            "Ben Jehl's portfolio website. Created from scratch with Vue.js and Typescript. Check out the repository on Github at https://github.com/benjaminkent/vue-portfolio-ts.",
        },
        { property: 'og:title', content: 'Ben Jehl | Software Engineer' },
        { property: 'og:site_name', content: 'Ben Jehl' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://benkent.io' },
        {
          property: 'og:description',
          content:
            "Ben Jehl's portfolio website. Created from scratch with Vue.js and Typescript. Check out the repository on Github at https://github.com/benjaminkent/vue-portfolio-ts.",
        },
        { name: 'twitter:card', content: "Ben Jehl's portfolio website." },
        { name: 'twitter:site', content: 'https://benkent.io' },
        { name: 'twitter:title', content: 'Ben Jehl | Software Engineer' },
        {
          name: 'twitter:description',
          content:
            "Ben Jehl's portfolio website. Created from scratch with Vue.js and Typescript. Check out the repository on Github at https://github.com/benjaminkent/vue-portfolio-ts.",
        },
        { name: 'twitter:creator', content: '@BenjaminJehl' },
        { itemprop: 'name', content: 'Ben Jehl | Software Engineer' },
        {
          itemprop: 'description',
          content:
            "Ben Jehl's portfolio website. Created from scratch with Vue.js and Typescript. Check out the repository on Github at https://github.com/benjaminkent/vue-portfolio-ts.",
        },
      ],
      link: [{ rel: 'canonical', href: 'https://benkent.io' }],
    }
  }
}
</script>

<style lang="scss" scoped></style>
