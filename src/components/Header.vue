<template lang="pug">
  .header-container
    .big-header
      header(:class="{ 'scrolled-header': scrolledPosition > 150}")
        .logo
          i.fad.fa-narwhal(v-scroll-to="'#home'" :class="{'scrolled-nav-content': scrolledPosition > 150}")
        ul
          li
            .dark-mode-container(v-if="darkModeEnabled")
              p.dark-mode-copy(:class="{'scrolled-nav-content': scrolledPosition > 150}") Dark Mode
              toggle-switch(v-model="isDarkModeSelected" @toggled="handleToggle")
          li 
            p(
              v-scroll-to="'#home'"
              :class="{'scrolled-nav-content': scrolledPosition > 150}"
            ) Home
          li
            p(
              v-scroll-to="'#about'"
              :class="{'scrolled-nav-content': scrolledPosition > 150}"
            ) About
          li
            p(
              v-scroll-to="{ el: '#toolset', offset: -100 }"
              :class="{'scrolled-nav-content': scrolledPosition > 150}"
            ) Toolset
          li
            p(
              v-scroll-to="'#portfolio'"
              :class="{'scrolled-nav-content': scrolledPosition > 150}"
            ) Portfolio
          li
            p(
              v-scroll-to="'#contact'"
              :class="{'scrolled-nav-content': scrolledPosition > 150}"
            ) Contact
    .mobile-header
      transition(name='slide-down')
        .pop-out-menu(v-if='showMenu' @click='showMenu = false')
          ul
            li(v-scroll-to="'#home'")
              p Home
            li(v-scroll-to="{ el: '#about', offset: -20 }")
              p About
            li(v-scroll-to="{ el: '#toolset', offset: -100 }")
              p Toolset
            li(v-scroll-to="{ el: '#portfolio', offset: -20 }")
              p Portfolio
            li(v-scroll-to="'#contact'")
              p Contact
      header
        .logo
          i.fad.fa-narwhal(v-scroll-to="'#home'")
        .right-content
          .dark-mode-container(v-if="darkModeEnabled")
            p.dark-mode-copy Dark Mode
            toggle-switch(v-model="isDarkModeSelected" @toggled="handleToggle")
          .hamburger(@click='showMenu = true ? showMenu === false : showMenu = false')
            .hamburger-line
            .hamburger-line
            .hamburger-line
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {
  actions as darkModeActions,
  getters as darkModeGetters,
} from '@/observables/darkMode'
import { featureFlags } from '@/observables/featureFlags'
import ToggleSwitch from '@/components/ToggleSwitch.vue'

export default Vue.extend({
  name: 'AppHeader',
  components: {
    ToggleSwitch,
  },
  data() {
    return {
      showMenu: false,
      scrolledPosition: null as number | null,
      isDarkModeSelected: false,
    }
  },
  mounted() {
    this.initDarkModePreference()
    window.addEventListener('scroll', this.updateScroll)
  },
  methods: {
    ...darkModeActions,
    updateScroll(): void {
      this.scrolledPosition = window.scrollY
    },
    handleToggle(): void {
      window.localStorage.setItem(
        'darkModeEnabled',
        `${this.isDarkModeSelected}`
      )
      this.setDarkModePreference(this.isDarkModeSelected)
    },
    initDarkModePreference(): void {
      const savedDarkModePreference = window.localStorage.getItem(
        'darkModeEnabled'
      )

      if (!savedDarkModePreference) {
        this.isDarkModeSelected = false
        this.disableDarkMode()
        return
      }

      this.isDarkModeSelected = JSON.parse(savedDarkModePreference)
      this.setDarkModePreference(JSON.parse(savedDarkModePreference))
    },
  },
  computed: {
    ...darkModeGetters,
    darkModeEnabled(): boolean {
      return featureFlags.darkModeEnabled
    },
  },
})
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
        color: #222;
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
        .dark-mode-container {
          display: flex;
          align-items: center;
          .dark-mode-copy {
            margin-right: 5px;
          }
        }
        margin: 0 20px;
        cursor: pointer;
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
      li:first-child {
        p {
          cursor: default;
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
    i {
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
.slide-down-enter,
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
