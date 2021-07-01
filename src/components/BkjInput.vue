<template>
  <div :class="[{ 'dark-mode': isDarkModeEnabled }, 'bkj-input']">
    <textarea
      v-if="isTextArea"
      :class="[{ error: error }, 'bkj-input__text-area']"
      :placeholder="placeholder"
      :value="value"
      @input="handleInput"
      @blur="errorCheck"
    />
    <input
      v-else
      :class="[{ error: error }, 'bkj-input__input']"
      :value="value"
      :type="inputType"
      :placeholder="placeholder"
      @input="handleInput"
      @blur="errorCheck"
    />
    <p v-if="error" class="bkj-input__error-message">{{ error }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getters as darkModeGetters } from '@/observables/darkMode'

enum ErrorMessage {
  Blank = 'This field cannot be blank',
  Email = 'Please provide a valid email address',
}

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
  data() {
    return {
      error: null as null | string,
    }
  },
  computed: {
    ...darkModeGetters,
  },
  methods: {
    handleInput(event: any) {
      this.$emit('input', event.target.value)
    },
    emitError() {
      this.$emit('error-detected', this.error)
    },
    errorCorrected() {
      this.$emit('error-corrected')
    },
    errorCheck() {
      if (this.value === '') {
        if (!this.error) {
          this.error = ErrorMessage.Blank

          this.emitError()
        }
        return
      }

      if (this.inputType === 'email') {
        if (!(this.value as string).includes('@')) {
          if (this.error === ErrorMessage.Blank) {
            this.errorCorrected()
          }

          if (!this.error) {
            this.error = ErrorMessage.Email

            this.emitError()
          }
          return
        }
      }

      if (this.error) {
        this.errorCorrected()
        this.error = null
      }
    },
  },
})
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
