<template>
  <div
    class="contact-container-grid"
    id="contact"
    :class="{ 'dark-mode': isDarkModeEnabled }"
  >
    <div class="bottom-background"></div>

    <div class="contact-form-container">
      <div class="message">
        <h3>GET IN TOUCH</h3>
        <h2>Contact Me</h2>
      </div>
      <form class="contact-form" @submit.prevent="sendMessage">
        <div class="name-input-container">
          <bkj-input
            v-model="message.firstName"
            class="contact-form__first-name-input"
            placeholder="First Name"
            :is-text-area="false"
            input-type="text"
            :error="errors.firstName"
          />
          <bkj-input
            v-model="message.lastName"
            class="contact-form__form-input"
            placeholder="Last Name"
            input-type="text"
            :is-text-area="false"
            :error="errors.lastName"
          />
        </div>
        <bkj-input
          v-model="message.email"
          class="contact-form__form-input"
          placeholder="Email"
          input-type="text"
          :is-text-area="false"
          :error="errors.email"
        />
        <bkj-input
          v-model="message.messageText"
          class="contact-form__form-input"
          :is-text-area="true"
          placeholder="Message"
          input-type="text-area"
          :error="errors.messageText"
        />
        <bkj-button :disabled="isFormDisabled">Send Message</bkj-button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import { useDarkMode } from '@observables'
import { postMessage } from '@api'
import { toastController } from '@classes'
import BkjInput from '@components/BkjInput.vue'
import BkjButton from '@components/BkjButton.vue'

enum ErrorMessage {
  Blank = 'This field cannot be blank',
  Email = 'Please provide a valid email address',
}

const { isDarkModeEnabled } = useDarkMode()

const message = ref({
  firstName: '',
  lastName: '',
  email: '',
  messageText: '',
})
const errors = ref({
  firstName: '',
  lastName: '',
  email: '',
  messageText: '',
})

const isFormDisabled = computed(() => !Object.values(errors.value).every(errorMessage => errorMessage === ''))

watchEffect(() => {
  if (message.value.firstName) {
    errors.value.firstName = ''
  }
  if (message.value.lastName) {
    errors.value.lastName = ''
  }
  if (message.value.email && message.value.email.includes('@')) {
    errors.value.email = ''
  }
  if (message.value.messageText) {
    errors.value.messageText = ''
  }
})

function errorCheck(): void {
  if (!message.value.firstName) {
    errors.value.firstName = ErrorMessage.Blank
  }
  if (!message.value.lastName) {
    errors.value.lastName = ErrorMessage.Blank
  }
  if (!message.value.email.includes('@')) {
    errors.value.email = ErrorMessage.Email
  }
  if (!message.value.email) {
    errors.value.email = ErrorMessage.Blank
  }
  if (!message.value.messageText) {
    errors.value.messageText = ErrorMessage.Blank
  }
}

function clearForm() {
  message.value = {
    firstName: '',
    lastName: '',
    email: '',
    messageText: '',
  }
}

function sendMessage(): void {
  errorCheck()
  if (isFormDisabled) {
    return
  }

  try {
    postMessage({
      first_name: message.value.firstName,
      last_name: message.value.lastName,
      email: message.value.email,
      message_text: message.value.messageText,
    })

    toastController.activateToast({
      message: 'Message sent successfully!',
    })
  } catch (error) {
    toastController.activateToast({
      message: 'Error! Failed to send message',
    })
  } finally {
    clearForm()
  }
}
</script>

<style lang="scss" scoped>
.contact-container-grid.dark-mode {
  background-color: #222;
  .contact-form-container {
    background-color: #222;
    box-shadow: 0 0 10px 1px #00000070;
    .message {
      h3 {
        color: $dm-text;
      }
      h2 {
        color: $dm-secondary;
      }
    }
  }
}

.contact-container-grid {
  display: grid;
  grid-template-rows: 0.75fr repeat(5, 1fr) 0.5fr;
  grid-template-columns: 1fr;
  height: 825px;
  .contact-form-container {
    grid-area: 2 / 1 / 7 / 2;
    justify-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 10px 1px #33333315;
    background-color: #fff;
  }
  .bottom-background {
    grid-area: 6 / 1 / 8 / 2;
    background-color: #333;
  }
}
.message {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  h3 {
    margin: 0;
    font-weight: 100;
    color: $grey-text;
    letter-spacing: 3px;
    font-size: 16px;
  }
  h2 {
    margin: 3px 0;
    font-size: 32px;
    color: $secondary;
  }
}
.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  .name-input-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}
.slide-up-enter-active {
  transition: all 0.4s ease-out;
}
.slide-up-leave-active {
  transition: all 0.4s ease-in-out;
}
.slide-up-enter,
.slide-up-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}

@media (max-width: 550px) {
  .contact-form-container {
    width: 77%;
    padding: 30px;
  }
  .contact-form {
    width: 100%;
    .name-input-container {
      flex-direction: column;
      align-content: space-between;
    }
    &__first-name-input,
    &__form-input {
      margin-bottom: 15px;
    }
  }
  .contact-container-grid {
    .message-box {
      grid-area: 4 / 1 / 5 / 2;
      margin-top: 30px;
    }
  }
  .message {
    margin-bottom: 5px;
  }
}
@media (min-width: 551px) {
  .contact-form-container {
    padding: 30px;
    width: 80%;
  }
  .contact-form {
    &__first-name-input {
      margin-right: 20px;
    }
  }
}

@media (min-width: 1200px) {
  .contact-form-container {
    width: 940px;
  }
}
</style>
