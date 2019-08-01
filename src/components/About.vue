<template lang="pug">
  .about-container
    .about-content
      .about-message
        h3 ABOUT ME
        h2 Forward Thinking Engineer
      .headshot-info-container
        img.headshot(src='../assets/headshot.jpg')
        .info
          h3 Benjamin Kent Jehl
          p.job-title Software Engineer
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
    color: $grey-text;
    font-weight: 100;
    width: 50%;
    h3 {
      color: #222;
      margin-bottom: 0;
    }
    .job-title {
      margin: 0;
    }
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

@media (min-width: 300px) {
  .about-content {
    width: 90%;
  }
}

@media (max-width: 899px) {
  .headshot-info-container {
    .info {
      width: 90%;
    }
  }
}

@media (max-width: 450px) {
  .about-message {
    margin-top: 40px;
  }
  .headshot-info-container {
    .headshot {
      height: 450px;
    }
  }
}

@media (max-width: 900px) {
  .headshot-info-container {
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
  .about-content {
    width: 1000px;
  }
}
</style>

