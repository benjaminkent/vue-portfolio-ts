<template>
  <transition name="toast-fade">
    <div
      v-if="toastController.isToastActive"
      :class="[{ 'dark-mode': isDarkModeEnabled }, toastClass, 'bkj-toast']"
    >
      <p class="bkj-toast__message">
        {{ toastController.currentToast.message }}
      </p>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { computed, ComputedRef } from 'vue'
import { toastController, ToastType } from '@classes'
import { useDarkMode } from '@observables'

enum ToastClass {
  Success = 'success',
  Warning = 'warning',
  Error = 'error',
}

const { isDarkModeEnabled } = useDarkMode()

const toastClass: ComputedRef<ToastClass> = computed(() =>  {
  switch (
    toastController.currentToast
      ? toastController.currentToast.type
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
})
</script>

<style lang="scss" scoped>
.bkj-toast.success.dark-mode {
  background-color: $dm-success;
  .bkj-toast__message {
    color: #eee;
  }
}
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
  bottom: 50px;
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
