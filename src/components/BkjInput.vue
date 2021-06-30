<template>
  <div class="bkj-input">
    <textarea
      v-if="isTextArea"
      class="bkj-input__text-area"
      :placeholder="placeholder"
      :value="value"
      @input="handleInput"
    />
    <input
      v-else
      class="bkj-input__input"
      :value="value"
      :type="inputType"
      :placeholder="placeholder"
      @input="handleInput"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BkjInput',
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
    inputType: {
      type: String,
      required: false,
      default: 'text',
    },
    placeholder: {
      type: String,
      required: false,
      default: 'Descriptive Placeholder',
    },
    isTextArea: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    handleInput(event: InputEvent) {
      this.$emit('input', event.target.value)
    },
  },
})
</script>

<style lang="scss" scoped>
.bkj-input {
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
}
</style>
