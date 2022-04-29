import { ref } from 'vue'

export enum ToastType {
  Success,
  Warning,
  Error,
}

export interface ToastOptions {
  message: string
  type?: ToastType
  duration?: number
}

class Toast {
  constructor(
    public message: string = 'Plain toast',
    public type: ToastType = ToastType.Success,
    public duration: number = 3000
  ) {}
}

class ToastController {
  private toastState = ref({
    isActive: false,
    currentToast: null as null | Toast,
    toastTimeoutId: 0,
  })

  public activateToast(toastOptions: ToastOptions) {
    this.toastState.value.currentToast = new Toast(
      toastOptions.message,
      toastOptions.type,
      toastOptions.duration
    )

    if (this.toastState.value.isActive) {
      clearTimeout(this.toastState.value.toastTimeoutId)
    }

    this.toastState.value.isActive = true

    this.toastState.value.toastTimeoutId = setTimeout(() => {
      this.toastState.value.isActive = false
    }, this.toastState.value.currentToast.duration)
  }

  get isToastActive() {
    return this.toastState.value.isActive
  }

  get currentToast() {
    return this.toastState.value.currentToast
  }
}

export const toastController = new ToastController()
