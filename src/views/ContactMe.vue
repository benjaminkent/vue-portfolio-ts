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
            :error="errors.firstName"
          />
          <bkj-input
            v-model="message.lastName"
            class="contact-form__form-input"
            placeholder="Last Name"
            :error="errors.lastName"
          />
        </div>
        <bkj-input
          v-model="message.email"
          class="contact-form__form-input"
          placeholder="Email"
          :error="errors.email"
        />
        <bkj-input
          v-model="message.messageText"
          class="contact-form__form-input"
          :is-text-area="true"
          placeholder="Message"
          :error="errors.messageText"
        />
        <bkj-button :disabled="isFormDisabled">Send Message</bkj-button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getters as darkModeGetters } from '@/observables/darkMode'
import { postMessage } from '@/api/api'
import { toastController } from '@/classes/toastController'
import BkjInput from '@/components/BkjInput.vue'
import BkjButton from '@/components/BkjButton.vue'

enum ErrorMessage {
  Blank = 'This field cannot be blank',
  Email = 'Please provide a valid email address',
}

export default Vue.extend({
  name: 'ContactMe',
  components: {
    BkjInput,
    BkjButton,
  },
  data() {
    return {
      message: {
        firstName: '',
        lastName: '',
        email: '',
        messageText: '',
      },
      messageSent: false,
      errors: {
        firstName: '',
        lastName: '',
        email: '',
        messageText: '',
      },
    }
  },
  computed: {
    ...darkModeGetters,
    isFormDisabled(): boolean {
      return !Object.values(this.errors).every(
        errorMessage => errorMessage === ''
      )
    },
  },
  watch: {
    message: {
      deep: true,
      handler(newVal, oldVal) {
        if (newVal.firstName) {
          this.errors.firstName = ''
        }
        if (newVal.lastName) {
          this.errors.lastName = ''
        }
        if (newVal.email && newVal.email.includes('@')) {
          this.errors.email = ''
        }
        if (newVal.messageText) {
          this.errors.messageText = ''
        }
      },
    },
  },
  methods: {
    errorCheck(): void {
      if (!this.message.firstName) {
        this.errors.firstName = ErrorMessage.Blank
      }
      if (!this.message.lastName) {
        this.errors.lastName = ErrorMessage.Blank
      }
      if (!this.message.email.includes('@')) {
        this.errors.email = ErrorMessage.Email
      }
      if (!this.message.email) {
        this.errors.email = ErrorMessage.Blank
      }
      if (!this.message.messageText) {
        this.errors.messageText = ErrorMessage.Blank
      }
    },
    sendMessage(): void {
      this.errorCheck()
      if (this.isFormDisabled) {
        return
      }

      try {
        postMessage({
          first_name: this.message.firstName,
          last_name: this.message.lastName,
          email: this.message.email,
          message_text: this.message.messageText,
        })
        toastController.activateToast({
          message: 'Message sent successfully!',
        })
      } catch (error) {
        toastController.activateToast({
          message: 'Error! Failed to send message',
        })
      } finally {
        this.clearForm()
      }
    },
    clearForm() {
      this.message = {
        firstName: '',
        lastName: '',
        email: '',
        messageText: '',
      }
    },
  },
})
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
