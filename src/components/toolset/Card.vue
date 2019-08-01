<template lang="pug">
  .card-container
    .card
      .card-content
        img.logo(src='../../assets/vue-logo.png')
        h3 Vue.js
        p Vue is a progressive framework for building user interfaces. It is designed from the ground up to be incrementally adoptable.
        .link
          a(href='https://vuejs.org/v2/guide/') LEARN MORE
          i.far.fa-arrow-right
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Card extends Vue {
  showArrow: boolean = false
}
</script>

<style lang="scss" scoped>
.card-container {
  margin-top: 25px;
}
.card {
  width: 90%;
  background-color: #fff;
  border-top: 2px solid $blue;
  .card-content {
    margin: 30px;
    .logo {
      height: 50px;
    }
    h3 {
      margin: 7px 0;
    }
    p {
      color: $grey-text;
      font-weight: 100;
    }
    .link {
      font-size: 14px;
      color: $blue;
      margin-top: 25px;
      a {
        color: $blue;
        text-decoration: none;
        font-weight: bold;
      }
      i {
        margin-left: 15px;
      }
    }
  }
}
@media (max-width: 550px) {
  .card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>

