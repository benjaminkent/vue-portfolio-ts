<template lang="pug">
  .home-container
    .big-header
      header(:class="{ 'scrolled-header': scrolledPosition > 150}")
        .logo
          i.fad.fa-narwhal
        ul
          li Home
          li About
          li Portfolio
          li Resume
          li Blog
    .mobile-header
      transition(name='slide-down')
        .pop-out-menu(v-if='showMenu' @click='showMenu = false')
          ul
            li Home
            li About
            li Portfolio
            li Resume
            li Blog
      header
        .logo
          i.fad.fa-narwhal
        .hamburger(@click='showMenu = true ? showMenu === false : showMenu = false')
          .hamburger-line
          .hamburger-line
          .hamburger-line
    .jumbotron
    .about-section
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Home extends Vue {
  public showMenu: boolean = false
  public scrolledPosition: number | null = null

  public mounted(): void {
    window.addEventListener('scroll', this.updateScroll)
  }

  public updateScroll(): void {
    this.scrolledPosition = window.scrollY
  }
}
</script>

<style lang="scss" scoped>
.big-header {
  header {
    transition: 0.4s all ease;
    position: fixed;
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
      margin: 0 30px 0 0;
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
.scrolled-header {
  background-color: #333;
  color: #fff;
  transition: 0.4s all ease;
}
.mobile-header {
  header {
    position: fixed;
    padding: 10px 0;
    width: 100%;
    background-color: #333;
    color: #fff;
    display: flex;
    justify-content: space-between;

    i {
      margin-left: 20px;
    }
    .hamburger {
      height: 12px;
      width: 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 4px 20px 0 0;
      cursor: pointer;
      .hamburger-line {
        border: 1px solid #fff;
        border-radius: 5px;
      }
    }
  }
  .pop-out-menu {
    position: fixed;
    top: 40px;
    opacity: 0.9;
    color: #fff;
    width: 100%;
    height: 100vh;
    ul {
      background-color: #333;
      margin: 0;
      padding: 10px 20px;
      list-style-type: none;
      border-bottom: 5px solid #ffd263;
      li {
        margin: 10px 0;
        border-bottom: 1px solid #22222290;
      }
    }
  }
}
.slide-down-enter-active {
  transition: all 0.3s ease-out;
}
.slide-down-leave-active {
  transition: all 0.3s ease-in-out;
}
.slide-down-enter,
.slide-down-leave-to {
  transform: translateY(-300px);
  // opacity: 0;
}
.jumbotron {
  background-image: url('../assets/desk-one.jpeg');
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(5, 1fr);
}

.about-section {
  height: 2000px;
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
  }
}

@media (max-width: 550px) {
  .big-header {
    display: none;
  }

  .jumbotron {
    height: 500px;
    background-size: cover;
    background-position-x: center;
    background-position-y: 20px;
  }
}
</style>

