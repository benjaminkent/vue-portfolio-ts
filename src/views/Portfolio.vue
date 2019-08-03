<template lang="pug">
  .portfolio-container(id='portfolio')
    .message
      h3 MY WORK
      h2 A Couple Of My Recent Projects
    .portfolio-content
      ul.portfolio-content-cards
        li(v-for='project in projects')
          Project(:project='project')
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Project from '@/components/portfolio/Project.vue'
import { projectData } from '@/data/data'
import { ProjectInterface } from '@/interfaces/interfaces'

@Component({
  components: {
    Project
  }
})
export default class Portfolio extends Vue {
  projects: ProjectInterface[] = []

  mounted(): void {
    this.projects = projectData
  }
}
</script>

<style lang="scss" scoped>
.portfolio-container {
  background-color: #f7f7f7;
  padding-bottom: 75px;
  margin-bottom: 500px;
  h1 {
    margin: 0;
  }
}
.message {
  margin-bottom: 25px;
  margin-top: 50px;
  width: 90%;
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
    color: $accents;
  }
}
.portfolio-content-cards {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

@media (max-width: 650px) {
  .portfolio-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .portfolio-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .portfolio-content-cards {
      width: 90%;
    }
  }
  .message {
    margin-top: 50px;
  }
}

@media (min-width: 651px) {
  .portfolio-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .portfolio-content-cards {
    width: 500px;
  }
  .message {
    margin-top: 75px;
  }
}

@media (min-width: 1000px) {
  .portfolio-content {
    width: 1000px;
    .portfolio-content-cards {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
    }
  }
}

@media (min-width: 1200px) {
  .message {
    width: 1000px;
  }
}
</style>

