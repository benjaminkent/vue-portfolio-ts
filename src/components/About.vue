<template lang="pug">
  .about-container
    .about-content
      .about-message
        h3 ABOUT ME
        h2 Forward Thinking Engineer
      .headshot-info-container
        img.headshot(src='../assets/headshot.jpg')
        .info
          p Located in the Tampa Bay Area and a former Financial Advisor, I have followed my love of the tech industry and learned the skills that enable me to write full stack web applications. I am passionate about designing and building the technologies that will shape the future. When I'm not writing code I enjoy playing guitar, sports, cooking, traveling... and learning how to be a better Software Engineer!
          ul
            li(v-for='word in wordList')
              i.far.fa-check
              | {{ word }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class About extends Vue {
  public wordList: string[] = [
    'Developer',
    'Responsive Design',
    'Full-stack',
    'Mobile-first',
    'Learner'
  ]
}
</script>

<style lang="scss" scoped>
.about-container {
  margin-bottom: 1000px;
  display: flex;
  justify-content: center;
}
.about-message {
  margin-top: 75px;
  h3 {
    margin: 0;
    font-weight: 100;
    color: #898989;
    letter-spacing: 3px;
    font-size: 16px;
  }
  h2 {
    margin: 3px 0;
    font-size: 32px;
    color: $blue;
  }
}
.headshot-info-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  .headshot {
    height: 600px;
  }
  .info {
    line-height: 30px;
    font-size: 16px;
    color: #898989;
    font-weight: 100;
    width: 50%;
    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
      li {
        margin: 20px 0;
        i {
          margin-right: 15px;
          color: #1aaf3d;
        }
      }
    }
  }
}

@media (min-width: 800px) {
  .about-content {
    width: 90%;
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
  .about-content {
    width: 1000px;
  }
}
</style>

