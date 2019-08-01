<template lang="pug">
  .about-container
    .about-message
      h3 ABOUT ME
      h2 Forward Thinking Engineer
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class About extends Vue {}
</script>

<style lang="scss" scoped>
.about-container {
  margin-bottom: 1000px;
}

.about-message {
  margin-top: 75px;
  h3 {
    margin: 0;
    font-weight: 100;
    color: #aaa;
    letter-spacing: 3px;
    font-size: 16px;
  }
  h2 {
    margin: 3px 0;
    font-size: 32px;
    color: $blue;
  }
}

@media (min-width: 1200px) {
  .about-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    min-width: 100vw;
    margin-bottom: 1000px;
  }
  .about-message {
    width: 1000px;
  }
}
</style>

