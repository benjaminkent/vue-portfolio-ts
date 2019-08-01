<template lang="pug">
  .toolset-container
    .toolset-grid
      .background-color-box
        .background-color
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Toolset extends Vue {}
</script>

<style lang="scss" scoped>
.toolset-container {
  margin-top: 175px;
  margin-bottom: 1000px;
}
.toolset-grid {
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: repeat(3, 1fr);
  height: 700px;
  .background-color-box {
    grid-area: 1 / 1 / 7 / 4;
    .background-color {
      height: 100%;
      width: 100%;
      background-color: $orange;
      position: relative;
    }
    .background-color:after {
      background: inherit;
      position: absolute;
      top: -5px;
      left: 0;
      right: 0;
      content: '';
      display: block;
      height: 70px;
      transform: skewY(3deg);
      transform-origin: 100%;
    }
  }
}
</style>

