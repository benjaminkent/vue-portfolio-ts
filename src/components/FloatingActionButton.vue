<template>
  <div class="fab-button">
    <fa-icon class="light-on icon" :icon="['fad', 'lightbulb-on']" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FloatingActionButton',
})
</script>

.<style lang="scss" scoped>
.fab-button {
  position: fixed;
  bottom: 50px;
  right: 40px;
  border: 3px solid #555;
  border-radius: 50%;
  background-color: #ffffff90;
  cursor: pointer;
  z-index: 10;
  .icon {
    padding: 1.25rem 1rem;
    font-size: 40px;
  }
  .light-on {
    color: $secondary;
  }
}

@media (max-width: 550px) {
  .fab-button {
    bottom: 20px;
    right: 20px;
    .icon {
      font-size: 30px;
      padding: 0.9rem 0.75rem;
    }
  }
}
</style>
