<template lang="pug">
  .header-container
    .big-header
      header(:class="{ 'scrolled-header': scrolledPosition > 150}")
        .logo
          i.fad.fa-narwhal
        ul
          li(@click='goHome') Home
          li(@click='goAbout') About
          li Toolset
          li Portfolio
          li Resume
    .mobile-header
      transition(name='slide-down')
        .pop-out-menu(v-if='showMenu' @click='showMenu = false')
          ul
            li(@click='goHome') Home
            li(@click='mobileGoAbout') About
            li Portfolio
            li Resume
            li Toolset
      header
        .logo
          i.fad.fa-narwhal
        .hamburger(@click='showMenu = true ? showMenu === false : showMenu = false')
          .hamburger-line
          .hamburger-line
          .hamburger-line
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class AppHeader extends Vue {
  public showMenu: boolean = false
  public scrolledPosition: number | null = null

  public mounted(): void {
    window.addEventListener('scroll', this.updateScroll)
  }

  public updateScroll(): void {
    this.scrolledPosition = window.scrollY
  }

  public goHome(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  public goAbout(): void {
    window.scrollTo({
      top: 865,
      behavior: 'smooth'
    })
  }

  public mobileGoAbout(): void {
    window.scrollTo({
      top: 412,
      behavior: 'smooth'
    })
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
    z-index: 100;
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
        cursor: pointer;
      }
      li:hover {
        color: $orange;
        transition: 0.3s all ease;
      }
    }
  }
}
.scrolled-header {
  background-color: #333;
  color: #fff;
  transition: 0.4s all ease;
  box-shadow: 0 0 2px 2px #33333370;
  opacity: 0.9;
}
.mobile-header {
  header {
    position: fixed;
    padding: 10px 0;
    width: 100%;
    background-color: #333;
    color: #fff;
    display: flex;
    z-index: 100;
    justify-content: space-between;
    box-shadow: 0 0 2px 2px #33333370;
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
    top: 39px;
    opacity: 0.9;
    color: #fff;
    width: 100%;
    height: 100vh;
    z-index: 99;
    ul {
      background-color: #333;
      margin: 0;
      padding: 10px 20px;
      list-style-type: none;
      border-bottom: 5px solid $orange;
      li {
        margin: 10px 0;
        border-bottom: 1px solid #22222290;
        cursor: pointer;
      }
      li:hover {
        color: $orange;
        transition: 0.3s all ease;
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
}

@media (min-width: 551px) {
  .mobile-header {
    display: none;
  }
}
@media (max-width: 550px) {
  .big-header {
    display: none;
  }
}
</style>

