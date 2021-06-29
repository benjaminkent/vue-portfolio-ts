<template lang="pug">
  .card(:class="{'dark-mode': isDarkModeEnabled}")
    .card-content
      img.logo(v-for='logo in card.logoURL' :src='require(`../../assets/${logo}`)')
      h3 {{ card.name }}
      p {{ card.description }}
      .link(@mouseover='showArrow = true' @mouseleave='showArrow = false')
        a(:href='card.linkURL' target='_blank' rel='noreferrer noopener')
          | LEARN MORE
        transition(name='slide-right')
          fa-icon.arrow(v-if='showArrow' :icon="['far', 'arrow-right']")
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { getters as darkModeGetters } from '@/observables/darkMode'
import { CardInterface } from '@/interfaces/interfaces'

export default Vue.extend({
  name: 'Card',
  props: {
    card: {
      type: Object as PropType<CardInterface>,
      required: true,
    },
  },
  data() {
    return {
      showArrow: false,
    }
  },
  computed: {
    ...darkModeGetters,
  },
})
</script>

<style lang="scss" scoped>
.card.dark-mode {
  background-color: #222;
  border-top: 2px solid $accents;
  .card-content {
    color: $dm-text;
    p {
      color: $dm-text;
    }
  }
}
.card {
  width: 90%;
  background-color: #fff;
  border-top: 2px solid $accents;
  transition: 0.3s all ease-in-out;
  margin: 25px 0;
  .card-content {
    margin: 30px;
    .logo {
      height: 50px;
      margin-right: 5px;
    }
    h3 {
      margin: 7px 0;
    }
    p {
      color: $grey-text;
      font-weight: 100;
    }
    .link {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 14px;
      color: $accents;
      margin-top: 25px;
      width: 140px;
      a {
        color: $accents;
        text-decoration: none;
        font-weight: bold;
      }
      .arrow {
        margin-left: 15px;
        margin-bottom: 2px;
      }
    }
  }
}
.slide-right-enter-active {
  transition: all 0.3s ease-out;
}
.slide-right-leave-active {
  transition: all 0.3s ease-in-out;
}
.slide-right-enter,
.slide-right-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
.card:hover {
  box-shadow: 2px 3px 6px 5px #22222240;
  transition: 0.4s all ease-in-out;
}
@media (max-width: 550px) {
  .card {
    min-height: 280px;
  }
}

@media (min-width: 551px) {
  .card {
    width: 250px;
    margin: 20px;
  }
}

@media (min-width: 1050px) {
  .card {
    width: 300px;
  }
}
</style>
