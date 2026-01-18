<template>
  <div class="tech-content" :class="{ 'dark-mode': isDarkModeEnabled }">
    <div class="tech-message-container">
      <div class="info">
        <div class="tech-message-header">
          <h3>MINDSET</h3>
          <h2>Tech Philosophy</h2>
        </div>
        <p>
          This website was designed, developed, and styled entirely from scratch
          using the Vue.js framework. For many personal projects, I prefer
          writing custom, maintainable code - including CSS - while remaining
          fluent in modern UI frameworks and component libraries such as Quasar,
          Bootstrap, Buefy, Tailwind CSS, and Syncfusion.
        </p>
        <p>
          Professionally, I focus on building scalable, maintainable systems
          that minimize technical debt and improve long-term velocity. I believe
          in solving problems correctly the first time, with an emphasis on
          clarity, simplicity, and sustainability. I’m energized by the
          direction of the tech industry and motivated by the challenges and
          opportunities ahead.
        </p>
      </div>
      <img
        v-if="isDarkModeEnabled"
        class="code-img"
        src="../../assets/code-two.jpeg"
      />
      <img v-else class="code-img" src="../../assets/desk-one.jpeg" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDarkMode } from '@observables'

const { isDarkModeEnabled } = useDarkMode()
</script>

<style lang="scss" scoped>
.tech-content.dark-mode {
  .tech-message-container {
    .info {
      color: $dm-text;
      .tech-message-header {
        h3 {
          color: $dm-text;
        }
        h2 {
          color: $dm-secondary;
        }
      }
    }
  }
}
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
