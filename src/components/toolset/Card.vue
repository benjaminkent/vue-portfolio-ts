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
}
</style>

