<template>
<div class="toolset-container" id="toolset" :class="{'dark-mode': isDarkModeEnabled}">
    <div class="toolset-grid">
        <div class="message-box">
            <div class="message">
                <h3>EXPERIENCE</h3>
                <h2>A few technologies in my toolset</h2>
            </div>
        </div>
        <div class="card-container-box">
            <Card v-for="card in cards" :card="card" :key="card.id"></Card>
        </div>
        <div class="background-color-box">
            <div class="background-color"></div>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
import { computed, ComputedRef } from 'vue'
import Card from '@/components/toolset/Card.vue'
import { CardInterface } from '@/interfaces/interfaces'
import { cardData } from '@/data/data'
import { useDarkMode } from '@/observables/darkMode'

const { isDarkModeEnabled } = useDarkMode()
const cards: ComputedRef<CardInterface[]> = computed(() => cardData)
</script>

<style lang="scss" scoped>
.toolset-container.dark-mode {
  background-color: #222;
  .toolset-grid {
    .message-box {
      .message {
        h3 {
          color: $dm-text;
        }
        h2 {
          color: $dm-secondary;
        }
      }
    }
    .background-color-box {
      .background-color {
        background-color: #555;
      }
    }
  }
}
.toolset-container {
  padding: 150px 0 50px;
}
.toolset-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  .message-box {
    grid-area: 1 / 1 / 2 / 4;
    display: flex;
    justify-content: center;
    align-self: end;
    z-index: 1;
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
        color: $secondary;
      }
    }
  }
  .card-container-box {
    grid-area: 2 / 1 / 7 / 4;
    display: flex;
    z-index: 1;
  }
  .background-color-box {
    grid-area: 2 / 1 / 7 / 4;
    .background-color {
      height: 100%;
      width: 100%;
      background-color: $primary;
      padding-bottom: 50px;
      position: relative;
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
      border-top: 2px solid $accents;
    }
  }
}

@media (max-width: 550px) {
  .toolset-container {
    padding-top: 100px;
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
      width: 100%;
    }
  }
}

@media (min-width: 850px) {
  .toolset-grid {
    .background-color-box {
      .background-color:after {
        border-top: 3px solid $accents;
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
