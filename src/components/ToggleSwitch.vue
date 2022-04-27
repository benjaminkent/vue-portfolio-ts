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

<script setup lang="ts">
export interface ToggleSwitchColors {
  background: string
  toggle: string
}

const props = withDefaults(defineProps<{ toggleColors: ToggleSwitchColors, value: boolean }>(), {
  toggleColors: () => ({ background: '#222', toggle: '#eee' })
})

const emit = defineEmits<{
  (e: 'input', value: boolean): void
  (e: 'toggled'): void
}>()

function toggled(): void {
  emit('input', !props.value)
  emit('toggled')
}
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
