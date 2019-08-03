<template lang="pug">
  .portfolio-container
    .message
      h3 MY WORK
      h2 A Couple Of My Recent Projects
    .portfolio-content
      .portfolio-content-cards
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
  margin-bottom: 25px;
  margin-top: 50px;
  width: 90%;
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

@media (max-width: 650px) {
  .portfolio-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .portfolio-content-cards {
      width: 90%;
    }
  }
}

@media (min-width: 651px) {
  .portfolio-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .portfolio-content-cards {
    width: 500px;
  }
  .message {
    margin-top: 75px;
  }
}

@media (min-width: 1000px) {
  .message {
    width: 1000px;
  }
  .portfolio-content {
    width: 1050px;
    .portfolio-content-cards {
      display: flex;
      flex-direction: row;
      width: 100%;
    }
  }
}
</style>

