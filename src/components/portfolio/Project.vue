<template lang="pug">
  .project-container-grid(
    @click='toggleWords'
    @mouseover='showWords = true'
    @mouseleave='showWords = false'
  )
    .image-box
      img(src='../../assets/cycle.jpg')
    .name-box
      transition(name='slide-up')
        .name-content(v-if='showWords')
          h2 BrewLo
          p Brewery Finder App
          a(href='#') brewlo.buzz
    .screen-box
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Project extends Vue {
  showWords: boolean = true

  toggleWords(): void {
    this.showWords === false
      ? (this.showWords = true)
      : (this.showWords = false)
  }
}
</script>

<style lang="scss" scoped>
.project-container-grid {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 20px;
  .image-box {
    grid-area: 1 / 1 / 4 / 4;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .screen-box {
    grid-area: 1 / 1 / 4 / 4;
    background-color: #00000090;
    transition: 0.4s all ease-in-out;
    opacity: 0;
  }
  .screen-box:hover {
    opacity: 1;
  }
  .name-box:hover + .screen-box {
    opacity: 1;
  }
  .name-box {
    grid-area: 2 / 1 / 3 / 4;
    justify-self: center;
    align-self: center;
    z-index: 1;
    .name-content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    h2 {
      font-size: 26px;
      color: #fff;
      margin: 0;
    }
    p {
      font-weight: 100;
      color: #eaeaea;
      margin: 0;
      letter-spacing: 1px;
    }
    a {
      color: #eaeaea;
    }
  }
}
.slide-up-enter-active {
  transition: all 0.4s ease-out;
}
.slide-up-leave-active {
  transition: all 0.4s ease-in-out;
}
.slide-up-enter,
.slide-up-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

@media (max-width: 550px) {
  .project-container-grid {
    height: 300px;
  }
}

@media (min-width: 551px) {
  .project-container-grid {
    height: 400px;
    width: 400px;
  }
}
</style>

