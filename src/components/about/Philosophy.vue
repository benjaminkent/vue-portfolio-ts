<template lang="pug">
  .tech-content
    .tech-message-container
      .info
        .tech-message-header
          h3 MINDSET
          h2 Tech Philosophy
        p This website was designed, coded and styled completely from scratch by myself using the Vue.js JavaScript framework. With many of my personal projects, I prefer to write all of the code from scratch including CSS. Although I have used CSS and component library frameworks such as Quasar, Vue Bootstrap (Bootstrap), Buefy (Bulma) and Tailwind CSS to style websites as well; in my professional career I have worked extensivly with Bootstrap and Syncfusion. I believe in solving problems the right way. Which means writing easily maintainable code that doesn't add to tech debt and actively seeks to eliminate it. I am extremely excited about where the tech industry is heading and look forward to the many challenges and breakthroughs that lie before us.
      img.code-img(src='../../assets/code-one.jpeg')
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Philosophy extends Vue {}
</script>

<style lang="scss" scoped>
.tech-message-header {
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
    color: $secondary;
  }
}
.tech-message-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 150px;
  align-items: center;
  .code-img {
    height: 300px;
  }
  .info {
    line-height: 30px;
    font-size: 16px;
    color: $grey-text;
    font-weight: 100;
    width: 45%;
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
          color: $secondary;
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

@media (max-width: 900px) {
  .tech-message-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    .info {
      width: 100%;
      h3 {
        margin-top: 20px;
      }
    }
    .code-img {
      margin-top: 25px;
      width: 100%;
      height: auto;
    }
  }
}

@media (max-width: 450px) {
  .tech-message-container {
    margin-top: 50px;
    .code-img {
      margin-top: 25px;
      width: 100%;
      height: auto;
    }
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
