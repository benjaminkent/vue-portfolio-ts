<template>
  <div class="header-container">
    <div class="big-header">
      <header :class="{ 'scrolled-header': scrolledPosition > 150}">
        <div class="logo">
          <fa-icon
            :icon="['fad', 'narwhal']"
            v-scroll-to="'#home'"
            :class="['logo-icon', {'scrolled-nav-content': scrolledPosition > 150}]"
          ></fa-icon>
        </div>
        <ul>
          <li>
            <p
              v-scroll-to="'#home'"
              :class="{'scrolled-nav-content': scrolledPosition > 150}"
            >
              Home
            </p>
          </li>
          <li>
            <p
              v-scroll-to="'#about'"
              :class="{'scrolled-nav-content': scrolledPosition > 150}"
            >
              About
            </p>
          </li>
          <li>
            <p
              v-scroll-to="'#toolset'"
              :class="{'scrolled-nav-content': scrolledPosition > 150}"
            >
              Toolset
            </p>
          </li>
          <li>
            <p
              v-scroll-to="'#portfolio'"
              :class="{'scrolled-nav-content': scrolledPosition > 150}"
            >
              Portfolio
            </p>
          </li>
          <li>
            <p
              v-scroll-to="'#contact'"
              :class="{'scrolled-nav-content': scrolledPosition > 150}"
            >
              Contact
            </p>
          </li>
        </ul>
      </header>
    </div>
    <div class="mobile-header">
      <transition name="slide-down">
        <div class="pop-out-menu" v-if="showMenu" @click="showMenu = false">
          <ul>
            <li v-scroll-to="'#home'">
              <p>Home</p>
            </li>
            <li v-scroll-to="{ el: '#about', offset: -20 }">
              <p>About</p>
            </li>
            <li v-scroll-to="'#toolset'">
              <p>Toolset</p>
            </li>
            <li v-scroll-to="{ el: '#portfolio', offset: -20 }">
              <p>Portfolio</p>
            </li>
            <li v-scroll-to="'#contact'">
              <p>Contact</p>
            </li>
          </ul>
        </div>
      </transition>
      <header>
        <div class="logo">
          <fa-icon
            class="logo-icon"
            :icon="['fad', 'narwhal']"
            v-scroll-to="'#home'"
          ></fa-icon>
        </div>
        <div class="right-content">
          <div
            class="hamburger"
            @click="showMenu = true ? showMenu === false : (showMenu = false)"
          >
            <div class="hamburger-line"></div>
            <div class="hamburger-line"></div>
            <div class="hamburger-line"></div>
          </div>
        </div>
      </header>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const showMenu = ref(false)
const scrolledPosition = ref(0)

onMounted(() => window.addEventListener('scroll', updateScroll))

function updateScroll(): void {
  scrolledPosition.value = window.scrollY
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
      .logo-icon {
        color: $secondary;
        font-size: 17px;
        margin-right: 10px;
        cursor: pointer;
      }
      .scrolled-nav-content {
        color: #fff;
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
        .dark-mode-container {
          display: flex;
          align-items: center;
          .dark-mode-copy {
            margin-right: 5px;
          }
        }
        p {
          margin: 0;
          color: #222;
          transition: 0.3s all ease;
        }
        p:hover:not(.dark-mode-copy) {
          color: $primary;
          transition: 0.3s all ease;
        }
        .scrolled-nav-content {
          color: #fff;
        }
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
    .logo-icon {
      margin-left: 20px;
      color: #fff;
      cursor: pointer;
    }
    .right-content {
      display: flex;
      align-items: center;
      .dark-mode-container {
        display: flex;
        align-items: center;
        .dark-mode-copy {
          margin: 0 5px 0 0;
        }
      }
      .hamburger {
        height: 12px;
        width: 15px;
        display: flex;
        padding: 5px;
        flex-direction: column;
        justify-content: space-between;
        margin: 0 15px 0 1rem;
        cursor: pointer;
        .hamburger-line {
          border: 1px solid #fff;
          border-radius: 5px;
        }
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
      border-bottom: 5px solid $primary;
      li {
        margin: 10px 0;
        border-bottom: 1px solid #22222290;
        cursor: pointer;
        transition: 0.3s all ease;
        p {
          color: #fff;
          text-decoration: none;
          transition: 0.3s all ease;
          margin: 0;
        }
        p:hover {
          color: $primary;
          transition: 0.3s all ease;
        }
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
.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-300px);
}

@media (min-width: 716px) {
  .mobile-header {
    display: none;
  }
}
@media (max-width: 715px) {
  .big-header {
    display: none;
  }
}
</style>
