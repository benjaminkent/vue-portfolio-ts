<template lang="pug">
  .card-container
    .card
      .card-content
        img.logo(v-for='logo in card.logoURL' :src='require(`../../assets/${logo}`)')
        h3 {{ card.name }}
        p {{ card.description }}
        .link(@mouseover='showArrow = true' @mouseleave='showArrow = false')
          a(:href='card.linkURL' target='_blank' rel='noreferrer noopener')
            | LEARN MORE
            transition(name='slide-right')
              i.far.fa-arrow-right(v-if='showArrow')
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { CardInterface } from '@/interfaces/interfaces'

@Component({})
export default class Card extends Vue {
  @Prop({ default: 'default value' }) readonly card!: CardInterface
  showArrow: boolean = false
}
</script>

<style lang="scss" scoped>
.card-container {
  margin: 25px 0;
}
.card {
  width: 90%;
  background-color: #fff;
  border: 1px solid #ddd;
  border-top: 2px solid $blue;
  transition: 0.3s all ease-in-out;
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
      font-size: 14px;
      color: $blue;
      margin-top: 25px;
      width: 120px;
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
  .card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    .card {
      min-height: 280px;
    }
  }
}
</style>

