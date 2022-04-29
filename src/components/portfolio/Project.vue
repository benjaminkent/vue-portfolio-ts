<template>
  <div
    class="project-container-grid"
    @mouseover="showCopy = true"
    @mouseleave="showCopy = false"
  >
    <div class="image-box">
      <img v-if="project.name === 'BrewLo'" src="../../assets/cycle.jpg" />
      <img v-else src="../../assets/gtr.png" />
    </div>
    <div class="name-box">
      <transition name="slide-up">
        <div class="name-content" v-if="showCopy">
          <h2>{{ project.name }}</h2>
          <p>{{ project.description }}</p>
          <a
            :href="project.linkURL"
            target="_blank"
            rel="noreferrer noopener"
            >{{ project.linkName }}</a
          >
        </div>
      </transition>
    </div>
    <transition name="fade-in">
      <div class="screen-box" v-if="showCopy"></div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ProjectInterface } from '@/interfaces/interfaces'

const showCopy = ref(false)

defineProps<{ project: ProjectInterface }>()
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
    background-color: #00000095;
    transition: 0.4s all ease-in-out;
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
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
.fade-in-enter-active {
  transition: all 0.4s ease-out;
}
.fade-in-leave-active {
  transition: all 0.4s ease-in-out;
}
.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 0;
}

@media (max-width: 650px) {
  .project-container-grid {
    height: 300px;
  }
}

@media (min-width: 651px) {
  .project-container-grid {
    height: 400px;
    width: 100%;
  }
}

@media (min-width: 550px) {
  .project-container-grid {
    height: 400px;
  }
}

@media (min-width: 1000px) {
  .project-container-grid {
    width: 490px;
    height: 490px;
  }
}
</style>
