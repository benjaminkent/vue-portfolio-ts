<template>
  <div class="footer-container">
    <div class="about-nav-row">
      <div class="about-content">
        <h2 class="header">About Me</h2>
        <p>
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
      </div>
      <div class="nav-container">
        <h2 class="header">Navigation</h2>
        <ul>
          <li><a href="#" v-scroll-to="'#home'">Home</a></li>
          <li><a href="#" v-scroll-to="'#about'">About</a></li>
          <li>
            <a href="#" v-scroll-to="{ el: '#toolset', offset: -70 }">
              Toolset
            </a>
          </li>
          <li><a href="#" v-scroll-to="'#portfolio'">Portfolio</a></li>
          <li><a href="#" v-scroll-to="'#contact'">Contact</a></li>
        </ul>
      </div>
      <img class="logo" src="../assets/BKJ.png" />
    </div>
    <div class="social-media-links">
      <ul>
        <li v-for="icon in socialMedia">
          <a :href="icon.url" target="_blank" rel="noreferrer noopener">
            <fa-icon :icon="icon.class"></fa-icon>
          </a>
        </li>
        <li>
          <router-link to="/ee">
            <fa-icon :icon="['far', 'egg']"></fa-icon>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="me">
      <p>
        Made with
        <fa-icon :icon="['fas', 'heart']"></fa-icon>
        in St. Petersburg, FL
      </p>
      <p>
        2019 Benjamin Kent.
        <a
          href="https://www.benkent.io/"
          target="_blank"
          rel="noreferrer noopener"
        >
          benkent.io
        </a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue'
import { socialMediaData } from '@data'
import { SocialMedia } from '@interfaces'

const socialMedia: Ref<SocialMedia[]> = ref([])

onMounted(() => (socialMedia.value = socialMediaData))
</script>

<style lang="scss" scoped>
.footer-container {
  background-color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 75px;
}
.about-nav-row {
  display: flex;
  justify-content: space-between;
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    li {
      margin: 20px 0;
      transition: 0.3s all ease-in-out;
      a {
        text-decoration: none;
        color: #a5a5a5;
        font-weight: 100;
        transition: 0.3s all ease-in-out;
      }
      a:hover {
        color: $primary;
        transition: 0.3s all ease-in-out;
      }
    }
  }
}
.logo {
  height: 200px;
  margin-top: 50px;
}
.header {
  color: #fff;
}
.about-content {
  width: 300px;
  p {
    color: #a5a5a5;
    font-weight: 100;
  }
}
.social-media-links {
  margin-top: 125px;
  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    li {
      margin: 0 15px;
      a {
        color: #a5a5a5;
      }
    }
  }
}
.me {
  color: #a5a5a5;
  font-weight: 100;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 75px 0;
  p {
    margin: 0;
  }
  a {
    color: #a5a5a5;
  }
}

@media (min-width: 881px) {
  .about-nav-row {
    width: 80%;
  }
  .nav-container {
    margin: 0 40px;
  }
}

@media (max-width: 880px) {
  .about-nav-row {
    flex-direction: column;
    align-items: flex-start;
    width: 90%;
  }
  .nav-container {
    margin: 70px 0;
  }
  .logo {
    margin-top: 20px;
  }
  .about-content {
    width: 100%;
  }
}

@media (min-width: 1200px) {
  .about-nav-row {
    width: 1000px;
  }
}
</style>
