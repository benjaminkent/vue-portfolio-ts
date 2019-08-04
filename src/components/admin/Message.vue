<template lang="pug">
  .message
    p Name:
    p Email:
    p Message:
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Message extends Vue {}
</script>

<style lang="scss" scoped>
.message {
  padding: 15px;
  width: 350px;
  background-color: #33333309;
  box-shadow: 0 0 5px 1px #33333320;
  p:first-child {
    margin-top: 0;
  }
  p:last-child {
    margin-bottom: 0;
  }
}
</style>

