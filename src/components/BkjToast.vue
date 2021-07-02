<template>
  <transition name="toast-fade">
    <div
      v-if="toastController.isToastActive"
      :class="[toastClass, 'bkj-toast']"
    >
      <p class="bkj-toast__message">
        {{ toastController.currentToast.message }}
      </p>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'
import { toastController, ToastType } from '@/classes/toastController'

enum ToastClass {
  Success = 'success',
  Warning = 'warning',
  Error = 'error',
}

export default Vue.extend({
  name: 'BkjToast',
  data() {
    return {
      toastController,
    }
  },
  computed: {
    toastClass(): ToastClass {
      switch (
        this.toastController.currentToast
          ? this.toastController.currentToast.type
          : ToastType.Success
      ) {
        case ToastType.Success:
          return ToastClass.Success
        case ToastType.Warning:
          return ToastClass.Warning
        case ToastType.Error:
          return ToastClass.Error
        default:
          return ToastClass.Success
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.bkj-toast.success {
  background-color: $success;
}
.bkj-toast.error {
  background-color: $error;
}
.bkj-toast.warning {
  background-color: yellow;
}
.bkj-toast {
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 275px;
  height: 50px;
  position: fixed;
  bottom: 100px;
  left: 0;
  right: 0;
  margin: 0 auto;
  color: #fff;
  &__message {
    margin: 0;
  }
}
.toast-fade-enter-active,
.toast-fade-leave-active {
  transition: all 0.3s ease;
}
.toast-fade-enter,
.toast-fade-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
</style>
