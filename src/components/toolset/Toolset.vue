<template lang="pug">
  .toolset-container
    .toolset-grid
      .background-color-box
        .background-color
      .message-box
        .message
          h3 EXPERIENCE
          h2 My Current Toolset Includes
      .card-container-box
        Card
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Card from './Card.vue'

@Component({
  components: {
    Card
  }
})
export default class Toolset extends Vue {}
</script>

<style lang="scss" scoped>
.toolset-container {
  margin-top: 150px;
  margin-bottom: 1000px;
}
.toolset-grid {
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: repeat(3, 1fr);
  height: 700px;
  .background-color-box {
    grid-area: 2 / 1 / 7 / 4;
    .background-color {
      height: 100%;
      width: 100%;
      background-color: $orange;
      position: relative;
      z-index: -1;
    }
    .background-color:after {
      background: inherit;
      position: absolute;
      top: -10px;
      left: 0;
      right: 0;
      content: '';
      display: block;
      height: 50%;
      transform: skewY(7deg);
      transform-origin: 100%;
    }
  }
  .message-box {
    grid-area: 1 / 1 / 3 / 4;
    display: flex;
    justify-content: center;
    .message {
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
  }
  .card-container-box {
    grid-area: 2 / 1 / 7 / 4;
  }
}

@media (max-width: 450px) {
  .toolset-container {
    margin-top: 100px;
  }
}

@media (min-width: 1200px) {
  .toolset-grid {
    .message-box {
      .message {
        width: 1000px;
      }
    }
  }
}
</style>

