<template lang="pug">
  .toolset-container
    .toolset-grid
      .background-color-box
        .background-color
      .message-box
        .message
          h3 EXPERIENCE
          h2 My Current Toolset Includes
      .card-container-box
        Card(v-for='card in cardData' :card='card' :key='card.id')
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Card from '@/components/toolset/Card.vue'
import { CardInterface } from '@/interfaces/interfaces'
import { cardData } from '@/data/data'

@Component({
  components: {
    Card
  }
})
export default class Toolset extends Vue {
  cardData: CardInterface[] = []

  mounted() {
    this.cardData = cardData
  }
}
</script>

<style lang="scss" scoped>
.toolset-container {
  margin-top: 150px;
  margin-bottom: 1000px;
}
.toolset-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  .background-color-box {
    grid-area: 2 / 1 / 7 / 4;
    .background-color {
      height: 100%;
      width: 100%;
      background-color: $orange;
      padding-bottom: 50px;
      position: relative;
      z-index: -1;
    }
    .background-color:after {
      background: inherit;
      position: absolute;
      top: -10px;
      left: 0;
      right: 0;
      content: '';
      display: block;
      height: 50%;
      transform: skewY(7deg);
      transform-origin: 100%;
      border-top: 1px solid #007bff50;
    }
  }
  .message-box {
    grid-area: 1 / 1 / 2 / 4;
    display: flex;
    justify-content: center;
    align-self: end;
    .message {
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
  }
  .card-container-box {
    grid-area: 2 / 1 / 7 / 4;
    display: flex;
  }
}

@media (max-width: 550px) {
  .toolset-container {
    margin-top: 100px;
    grid-template-rows: 0.4fr repeat(5, 1fr);
  }
  .toolset-grid {
    .card-container-box {
      flex-direction: column;
      align-items: center;
    }
  }
}

@media (min-width: 551px) {
  .toolset-container {
    .card-container-box {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
}

@media (min-width: 850px) {
  .toolset-grid {
    .background-color-box {
      .background-color:after {
        border-top: 3px solid $blue;
      }
    }
  }
}

@media (min-width: 1100px) {
  .toolset-container {
    .card-container-box {
      width: 1100px;
      margin: 0 auto;
    }
  }
}

@media (min-width: 1200px) {
  .toolset-grid {
    .message-box {
      .message {
        width: 1000px;
      }
    }
  }
}
</style>

