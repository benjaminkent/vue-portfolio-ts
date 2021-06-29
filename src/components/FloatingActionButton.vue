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
  .icon {
    padding: 1.25rem 1rem;
  }
  .light-on {
    font-size: 40px;
    color: $secondary;
  }
}
</style>
