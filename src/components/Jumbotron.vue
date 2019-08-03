<template lang="pug">
  .jumbotron
    .background-box-container
      .background-style-box
    .name-box
      h1 Benjamin Kent
    .job-title-box
      h2 Software Engineer
    .call-to-action-box
      .buttons-container
        button
          a(href='#' v-scroll-to="'#portfolio'") View Portfolio
        button
          a(href='#') Contact Me
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
}

@media (min-width: 551px) {
  .jumbotron {
    height: 900px;
    background-attachment: fixed;
    background-position-x: center;
    background-position-y: -50px;
    background-repeat: no-repeat;
    .background-box-container {
      grid-area: 2 / 1 / 4 / 6;
      justify-self: center;
      align-self: center;
      .background-style-box {
        background-color: $orange;
        height: 100px;
        width: 450px;
        transform: rotate(-10deg);
        opacity: 0.8;
        z-index: 0;
      }
    }
    .name-box {
      grid-area: 2 / 1 / 4 / 6;
      justify-self: center;
      align-self: center;
      z-index: 1;
      margin-bottom: 50px;
      h1 {
        font-size: 48px;
        margin: 0;
      }
    }
    .job-title-box {
      grid-area: 2 / 2 / 4 / 5;
      justify-self: center;
      align-self: center;
      margin-top: 60px;
      z-index: 1;
      h2 {
        margin: 0;
        font-size: 28px;
      }
    }
    .call-to-action-box {
      grid-area: 3 / 2 / 4 / 5;
      justify-self: center;
      align-self: end;
      margin-bottom: 20px;
      width: 320px;
      display: flex;
      justify-content: center;
      .buttons-container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        button {
          font-size: 14px;
          padding: 8px 22px;
          border: 1px solid $orange;
          background-color: $orange;
          opacity: 0.9;
          border-radius: 3px;
          cursor: pointer;
          transition: 0.3s all ease-in-out;
          a {
            font-size: 14px;
            color: #222;
            text-decoration: none;
          }
        }
        button:hover {
          background-color: #222;
          border: 1px solid #222;
          color: #fff;
          transition: 0.3s all ease-in-out;
        }
        button:hover > a {
          color: #fff;
          transition: 0.3s all ease-in-out;
        }
      }
    }
  }
}

@media (max-width: 550px) {
  .jumbotron {
    height: 450px;
    background-size: cover;
    background-position-x: center;
    background-position-y: 25px;
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
    .call-to-action-box {
      grid-area: 4 / 1 / 5 / 6;
      justify-self: center;
      width: 270px;
      display: flex;
      justify-content: center;
      .buttons-container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        button {
          font-size: 12px;
          padding: 8px 22px;
          border: 1px solid $orange;
          background-color: $orange;
          opacity: 0.9;
          border-radius: 3px;
          cursor: pointer;
        }
        button:hover {
          background-color: #222;
          border: 1px solid #222;
          color: #fff;
        }
      }
    }
  }
}
</style>

