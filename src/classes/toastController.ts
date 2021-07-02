import Vue from 'vue'

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

export class Toast {
  constructor(
    public message: string = 'Plain toast',
    public type: ToastType = ToastType.Success,
    public duration: number = 3000
  ) {}
}

class ToastController {
  private toastState = Vue.observable({
    isActive: false,
    currentToast: null as null | Toast,
    toastTimeoutId: 0,
  })

  public activateToast(toastOptions: ToastOptions) {
    this.toastState.currentToast = new Toast(
      toastOptions.message,
      toastOptions.type,
      toastOptions.duration
    )

    if (this.toastState.isActive) {
      clearTimeout(this.toastState.toastTimeoutId)
    }

    this.toastState.isActive = true

    this.toastState.toastTimeoutId = setTimeout(() => {
      this.toastState.isActive = false
    }, this.toastState.currentToast.duration)
  }

  get isToastActive() {
    return this.toastState.isActive
  }

  get currentToast() {
    return this.toastState.currentToast
  }
}

export const toastController = new ToastController()
