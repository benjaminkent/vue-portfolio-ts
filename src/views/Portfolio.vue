<template lang="pug">
  .portfolio-container
    .portfolio-content
      .message
        h3 MY WORK
        h2 A Couple Of My Recent Projects
      Project
      Project
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Project from '@/components/portfolio/Project.vue'

@Component({
  components: {
    Project
  }
})
export default class Portfolio extends Vue {}
</script>

<style lang="scss" scoped>
.portfolio-container {
  background-color: #f7f7f7;
  padding-bottom: 50px;
  margin-bottom: 500px;
  h1 {
    margin: 0;
  }
}
.message {
  margin-bottom: 20px;
  h3 {
    margin: 0;
    font-weight: 100;
    color: $grey-text;
    letter-spacing: 3px;
    font-size: 16px;
  }
  h2 {
    margin: 3px 0;
    font-size: 32px;
    color: $accents;
  }
}

@media (max-width: 550px) {
  .portfolio-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .portfolio-content {
    padding-top: 50px;
    width: 90%;
  }
}
</style>

