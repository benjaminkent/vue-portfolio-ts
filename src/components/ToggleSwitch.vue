<template>
  <div class="toggle-switch" @click="toggled">
    <div
      class="toggle-switch__background"
      :style="`background-color: ${toggleColors.background};`"
    ></div>
    <div
      :class="[{ toggled: value }, 'toggle-switch__toggle']"
      :style="`background-color: ${toggleColors.toggle};`"
    ></div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export interface ToggleSwitchColors {
  background: string
  toggle: string
}

export default Vue.extend({
  name: 'ToggleSwitch',
  props: {
    toggleColors: {
      type: Object as PropType<ToggleSwitchColors>,
      required: false,
      default: () => ({
        background: '#222',
        toggle: '#eee',
      }),
    },
    value: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    toggled(): void {
      this.$emit('input', !this.value)
      this.$emit('toggled')
    },
  },
})
</script>

<style lang="scss" scoped>
.toggle-switch {
  position: relative;
  cursor: pointer;
  &__background {
    height: 21px;
    width: 35px;
    border-radius: 50px;
  }
  &__toggle {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    position: absolute;
    top: 3px;
    left: 4px;
    transition: all 0.2s ease;
  }
  .toggled {
    transform: translateX(13px);
    transition: all 0.2s ease;
  }
}
</style>
