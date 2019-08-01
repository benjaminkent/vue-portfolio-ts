<template lang="pug">
  .card-container
    .card
      h2 this will be a card
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Card extends Vue {}
</script>

<style lang="scss" scoped>
@media (max-width: 500px) {
  .card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    .card {
      width: 90%;
    }
  }
}
</style>

