<template lang="pug">
  .jumbotron
    .background-box-container
      .background-style-box
    .name-box
      h1 Benjamin Kent
    .job-title-box
      h2 Software Engineer
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Jumbotron extends Vue {}
</script>

<style lang="scss" scoped>
.jumbotron {
  background-image: url('../assets/desk-one.jpeg');
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(5, 1fr);
  .background-box-container {
    grid-area: 2 / 1 / 4 / 6;
    justify-self: center;
    align-self: center;
  }
  .background-style-box {
    background-color: $orange;
    height: 70px;
    width: 300px;
    transform: rotate(-10deg);
    opacity: 0.8;
    z-index: 0;
  }
  .name-box {
    grid-area: 2 / 1 / 3 / 6;
    justify-self: center;
    align-self: end;
    z-index: 1;
    h1 {
      margin: 0;
    }
  }
  .job-title-box {
    grid-area: 3 / 1 / 4 / 6;
    justify-self: center;
    align-self: start;
    z-index: 1;
    h2 {
      margin: 0;
    }
  }
}

@media (min-width: 551px) {
  .jumbotron {
    height: 1000px;
    background-attachment: fixed;
    background-position-x: center;
    background-position-y: -50px;
    background-repeat: no-repeat;
  }
}

@media (max-width: 550px) {
  .jumbotron {
    height: 450px;
    background-size: cover;
    background-position-x: center;
    background-position-y: 25px;
  }
}
</style>

