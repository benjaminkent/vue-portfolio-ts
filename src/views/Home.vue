<template lang="pug">
  .home-container
    .big-header
      header
        .logo
          i.fad.fa-narwhal
        ul
          li Home
          li About
          li Portfolio
          li Resume
          li Blog
    .mobile-header
      header
        .logo
          i.fad.fa-narwhal
        .hamburger
          .hamburger-line
          .hamburger-line
          .hamburger-line
    .jumbotron
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.big-header {
  header {
    // background-color: #333;
    // color: #fff;
    position: absolute;
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    .logo {
      display: flex;
      margin-left: 20px;
      i {
        font-size: 17px;
        margin-right: 10px;
      }
    }
    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
      display: flex;
      justify-content: flex-end;
      li {
        margin: 0 20px;
      }
    }
  }
}

.mobile-header {
  position: absolute;
  padding: 10px 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  i {
    margin-left: 20px;
  }
}
.jumbotron {
  background-image: url('../assets/desk-one.jpeg');
}

@media (min-width: 551px) {
  .mobile-header {
    display: none;
  }

  .jumbotron {
    height: 1000px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(5, 1fr);
  }
}

@media (max-width: 550px) {
  .big-header {
    display: none;
  }

  .jumbotron {
    height: 500px;
    background-size: cover;
    background-position: center;
  }
}
</style>

