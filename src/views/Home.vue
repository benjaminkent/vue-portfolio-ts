<template>
<div class="home-container" id="home">
    <AppHeader />
    <Jumbotron />
    <About />
    <Toolset />
    <Portfolio />
    <ContactMe />
    <AppFooter />
    <DarkModeFab />
</div>
</template>

<script setup lang="ts">
import AppHeader from '@components/Header.vue'
import Jumbotron from '@components/Jumbotron.vue'
import About from '@views/About.vue'
import Toolset from '@views/Toolset.vue'
import Portfolio from '@views/Portfolio.vue'
import ContactMe from '@views/ContactMe.vue'
import AppFooter from '@components/Footer.vue'
import DarkModeFab from '@components/DarkModeFab.vue'
</script>
