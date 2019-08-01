<template lang="pug">
  .tech-content
    .tech-message-header
      h3 MINDSET
      h2 Tech Philosophy
    .tech-message-container
      .info
        p This website was designed, coded and styled completely from scratch by myself using the Vue.js JavaScript framework. With most of my personal projects, I like to write all of the code myself from scratch, although I have used CSS frameworks such as Bulma and Tailwind CSS to style websites as well; in my professional career I work extensivly with Bootstrap. I am extremely excited about where the tech industry is heading and look forward to the many challenges and breakthroughs that lie before us.
      img.code-img(src='../../assets/code-one.jpeg')
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Philosophy extends Vue {}
</script>

<style lang="scss" scoped>
.tech-phil-container {
  margin-top: 100px;
}
.tech-message-header {
  margin-top: 100px;
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
    color: $infra-red;
  }
}
.tech-message-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  .code-img {
    height: 600px;
  }
  .info {
    line-height: 30px;
    font-size: 16px;
    color: $grey-text;
    font-weight: 100;
    width: 50%;
    h3 {
      color: #222;
      margin: 0;
    }
    .job-title {
      margin: 0;
    }
    .social-media {
      margin: 0;
      padding: 0;
      list-style-type: none;
      display: flex;
      li {
        font-size: 14px;
        margin-right: 15px;
        a {
          color: $infra-red;
        }
      }
    }
    .words {
      margin: 0;
      padding: 0;
      list-style-type: none;
      li {
        margin: 20px 0;
        .fa-check {
          margin-right: 15px;
          color: #1aaf3d;
        }
      }
    }
  }
}

@media (min-width: 300px) {
  .tech-content {
    width: 90%;
  }
}

@media (max-width: 899px) {
  .tech-message-container {
    .info {
      width: 90%;
      h3 {
        margin-top: 20px;
      }
    }
  }
}

@media (max-width: 450px) {
  .tech-message-header {
    margin-top: 40px;
  }
  .tech-message-container {
    .code-img {
      height: 450px;
    }
  }
}

@media (max-width: 900px) {
  .tech-message-container {
    display: flex;
    flex-direction: column;
    align-items: center;
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
  .tech-content {
    width: 1000px;
  }
}
</style>

