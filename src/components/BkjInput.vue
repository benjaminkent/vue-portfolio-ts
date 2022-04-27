<template>
  <div :class="[{ 'dark-mode': isDarkModeEnabled }, 'bkj-input']">
    <textarea
      v-if="isTextArea"
      :class="[{ error: error }, 'bkj-input__text-area']"
      :placeholder="placeholder"
      :value="value"
      @input="handleInput"
    />
    <input
      v-else
      :class="[{ error: error }, 'bkj-input__input']"
      :value="value"
      :type="inputType"
      :placeholder="placeholder"
      @input="handleInput"
    />
    <p v-if="error" class="bkj-input__error-message">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { useDarkMode } from '@/observables/darkMode'

const emit = defineEmits<{
  (e: 'input', value: any ): void
}>()

const { isDarkModeEnabled } = useDarkMode()

function handleInput(event: any) {
  emit('input', event.target.value)
}

defineProps<{
  value: string | number
  inputType: string
  placeholder: string
  isTextArea: boolean
  error: string
}>()
</script>

<style lang="scss" scoped>
.bkj-input.dark-mode {
  .bkj-input__input {
    color: #ccc;
  }
  .bkj-input__text-area {
    color: #ccc;
  }
  .bkj-input__input::placeholder {
    color: #aaa;
  }
  .bkj-input__text-area::placeholder {
    color: #aaa;
  }
}
.bkj-input {
  position: relative;
  width: 100%;
  &__input {
    width: 100%;
    border: none;
    background-color: #33333309;
    padding: 15px 0;
    font-size: 16px;
    text-indent: 15px;
  }
  &__text-area {
    width: calc(100% - 30px);
    border: none;
    background-color: #33333309;
    padding: 15px;
    font-size: 16px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    height: 225px;
    resize: vertical;
  }
  &__error-message {
    position: absolute;
    color: $error;
    margin: 0;
    font-size: 14px;
  }
}
.error {
  outline: 1px solid $error;
}
</style>
