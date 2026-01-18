<template>
  <div class="about-content" :class="{ 'dark-mode': isDarkModeEnabled }">
    <div class="about-message">
      <h3>ABOUT ME</h3>
      <h2>Forward Thinking Engineer</h2>
    </div>
    <div class="headshot-info-container">
      <img class="headshot" src="../../assets/headshot.jpg" />
      <div class="info">
        <h3>Ben Jehl</h3>
        <p class="job-title">VP Software Engineering Manager</p>
        <a
          href="https://certificates.dev/c/9a726dd0-b89f-4026-8976-ae9a9dde8475"
          rel="noopener noreferrer"
          target="_blank"
          class="cert"
          >Certified Vue Developer</a
        >
        <p class="about">
          Based in the Tampa Bay Area, I’m a former financial advisor who
          transitioned into software engineering through a passion for
          technology and problem-solving. I build full-stack web applications
          and enjoy tackling challenges across the entire stack.
        </p>
        <p>
          I’m the creator and organizer of the Vue.js Tampa Bay meetup, where I
          help foster a local community focused on modern web development. When
          I’m not coding, I enjoy golfing, cooking, working out, watchmaking,
          and sharpening my engineering skills.
        </p>
        <a
          class="resume-link"
          href="https://www.dropbox.com/scl/fi/5b6afjgooh00mwfmntr7r/Ben_Jehl_Resume_2026.pdf?rlkey=dhv7smtsnl9pzeg12q3ix3778&st=x0vffkyo&dl=0"
          target="_blank"
          rel="noreferrer noopener"
          >VIEW MY RESUME</a
        >
        <ul class="social-media">
          <li v-for="(icon, index) in socialMedia" :key="index">
            <a :href="icon.url" target="_blank" rel="noreferrer noopener">
              <fa-icon :icon="icon.class"></fa-icon>
            </a>
          </li>
        </ul>
        <ul class="words">
          <li v-for="(word, index) in wordList" :key="index">
            <fa-icon class="far fa-check" :icon="['far', 'check']"></fa-icon>
            <p>{{ word }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ComputedRef } from 'vue'
import { useDarkMode } from '@observables'
import { SocialMedia } from '@interfaces'
import { socialMediaData } from '@data'

const { isDarkModeEnabled } = useDarkMode()

const wordList = [
  'Technical Leadership',
  'Full-Stack Development',
  'Scalable Architecture',
  'Responsive Design',
  'Lifelong Learner',
]

const socialMedia: ComputedRef<SocialMedia[]> = computed(() => socialMediaData)
</script>

<style lang="scss" scoped>
.about-content.dark-mode {
  .about-message {
    h3 {
      color: $dm-text;
    }
    h2 {
      color: $dm-secondary;
    }
  }
  .headshot-info-container {
    .info {
      color: $dm-text;
      h3 {
        color: $dm-text;
      }
      .cert {
        color: $dm-secondary;
      }
      .cert:hover {
        color: $dm-text;
      }
      .resume-link {
        color: $dm-secondary;
      }
      .resume-link:hover {
        color: $dm-text;
      }
    }
  }
  .cert {
    color: $dm-secondary;
  }
}
.about-message {
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
    color: $secondary;
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
      margin: 0;
    }
    .job-title {
      margin: 0;
    }
    .cert {
      color: $secondary;
    }
    .cert:hover {
      color: #222;
      transition: 0.3s all ease-in-out;
    }
    .about {
      margin-bottom: 0;
    }
    .resume-link {
      color: $secondary;
      letter-spacing: 1px;
      transition: 0.3s all ease-in-out;
    }
    .resume-link:hover {
      color: #222;
      transition: 0.3s all ease-in-out;
    }
    .social-media {
      margin: 20px 0 0 0;
      padding: 0;
      list-style-type: none;
      display: flex;
      li {
        font-size: 14px;
        margin-right: 15px;
        a {
          color: $accents;
        }
      }
    }
    .words {
      margin: 0;
      padding: 0;
      list-style-type: none;
      li {
        display: flex;
        align-items: center;
        margin: 20px 0;
        p {
          margin: 0;
        }
        .fa-check {
          margin-right: 15px;
          color: $success;
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

@media (max-width: 900px) {
  .headshot-info-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    .info {
      width: 100%;
      h3 {
        margin-top: 20px;
      }
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
