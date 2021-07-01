<template>
  <button :class="[{ disabled: disabled }, 'bkj-button']">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BkjButton',
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
.bkj-button.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.bkj-button {
  align-self: flex-start;
  font-size: 16px;
  border: none;
  background-color: $secondary;
  color: #fff;
  padding: 20px 30px;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
}
.bkj-button:hover {
  background-color: #333;
  transition: 0.3s all ease-in-out;
}
</style>
