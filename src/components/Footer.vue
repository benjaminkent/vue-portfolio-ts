<template lang="pug">
  .footer-container
    .about-nav-row
      .about-content
        h2.header About Me
        p Located in the Tampa Bay Area and a former Financial Advisor, I have followed my love of the tech industry and learned the skills that enable me to write full stack web applications. I am the Creator/Organizer of the Vue.js Tampa Bay meetup group and am passionate about sharing with others the technologies that will shape the future. When I'm not writing code I enjoy playing guitar, sports, cooking, traveling... and learning how to be a better Software Engineer!
      .nav-container
        h2.header Navigation
        ul
          li
            a(href='#' v-scroll-to="'#home'") Home
          li
            a(href='#' v-scroll-to="'#about'") About
          li
            a(href='#' v-scroll-to="{ el: '#toolset', offset: -70 }") Toolset
          li
            a(href='#' v-scroll-to="'#portfolio'") Portfolio
          li
            a(href='#' v-scroll-to="'#contact'") Contact
      img.logo(src='../assets/BKJ.png')
    .social-media-links
      ul
        li(v-for='icon in socialMedia')
           a(:href='icon.url' target='_blank' rel='noreferrer noopener')
              i(:class='icon.class')
    .me
      p
        | Made with 
        i.fas.fa-heart
        |  in St. Petersburg, FL
      p
        | 2019 Benjamin Kent. 
        a(href='https://www.benjaminkent.io/' target='_blank' rel='noreferrer noopener') benjaminkent.io
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { socialMediaData } from '@/data/data'
import { SocialMedia } from '@/interfaces/interfaces'

@Component
export default class AppFooter extends Vue {
  socialMedia: SocialMedia[] = []

  mounted(): void {
    this.socialMedia = socialMediaData
  }
}
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
        color: $orange;
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

