<template lang="pug">
  .home-container
    .big-header
      header
        ul
          li Home
          li About
          li Portfolio
          li Resume
          li Blog
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.big-header {
  header {
    background-color: #333;
    padding: 10px 0;
    ul {
      margin: 0 20px 0 0;
      padding: 0;
      list-style-type: none;
      display: flex;
      justify-content: flex-end;
      li {
        color: #fff;
        margin: 0 10px;
      }
    }
  }
}
</style>

