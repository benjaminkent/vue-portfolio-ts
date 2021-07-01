<template>
  <transition
    v-if="isActive"
    appear
    appear-class="toast-appear"
    appear-active-class="toast-appear-active"
    name="toast-fade"
  >
    <div class="bkj-toast">
      <p class="bkj-toast__message">
        Message successfully submitted!
      </p>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BkjToast',
  data() {
    return {
      isActive: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.isActive = false
    }, 3000)
  },
})
</script>

<style lang="scss" scoped>
.bkj-toast {
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: tomato;
  border-radius: 5px;
  width: 275px;
  height: 50px;
  position: fixed;
  bottom: 100px;
  left: 0;
  right: 0;
  margin: 0 auto;
  &__message {
    margin: 0;
  }
}
.toast-appear {
  opacity: 0;
  transform: translateY(50px);
}
.toast-appear-active {
  transition: all 0.5s ease;
}
.toast-fade-leave-active {
  transition: all 0.5s ease;
}
.toast-fade-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
</style>
