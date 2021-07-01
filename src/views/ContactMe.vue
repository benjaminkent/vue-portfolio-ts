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
      <form @submit.prevent="sendMessage">
        <div class="name-input-container">
          <bkj-input
            v-model="message.firstName"
            class="first-name-input"
            placeholder="First Name"
            @error-detected="errorDetected"
            @error-corrected="errorCorrected"
          />
          <bkj-input
            v-model="message.lastName"
            placeholder="Last Name"
            @error-detected="errorDetected"
            @error-corrected="errorCorrected"
          />
        </div>
        <bkj-input
          v-model="message.email"
          input-type="email"
          placeholder="Email"
          @error-detected="errorDetected"
          @error-corrected="errorCorrected"
        />
        <bkj-input
          v-model="message.messageText"
          :is-text-area="true"
          placeholder="Message"
          @error-detected="errorDetected"
          @error-corrected="errorCorrected"
        />
        <bkj-button :disabled="isFormDisabled">Send Message</bkj-button>
      </form>
    </div>

    <div class="message-box">
      <transition name="slide-up">
        <div class="good-message" v-if="messageSent">
          <p>Thank you for your message!</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getters as darkModeGetters } from '@/observables/darkMode'
import { MessageInterface } from '@/interfaces/interfaces'
import { postMessage } from '@/api/api'
import BkjInput from '@/components/BkjInput.vue'
import BkjButton from '@/components/BkjButton.vue'

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
      errors: [] as string[],
    }
  },
  computed: {
    ...darkModeGetters,
    isFormDisabled(): boolean {
      return this.errors.length || Object.values(this.message).includes('')
    },
  },
  methods: {
    errorDetected(errorMessage: string) {
      this.errors.push(errorMessage)
    },
    errorCorrected() {
      if (this.errors.length) this.errors.pop()
    },
    sendMessage(): void {
      if (this.isFormDisabled) return

      postMessage({
        first_name: this.message.firstName,
        last_name: this.message.lastName,
        email: this.message.email,
        message_text: this.message.messageText,
      })

      this.showMessageAlert()
      this.clearForm()
    },
    clearForm() {
      this.message = {
        firstName: '',
        lastName: '',
        email: '',
        messageText: '',
      }
    },
    showMessageAlert(): void {
      if (this.messageSent === true) {
        return
      }

      this.messageSent = true

      setTimeout(() => {
        this.messageSent = false
      }, 5000)
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
    form {
      input {
        color: #ccc;
      }
      input::placeholder {
        color: #aaa;
      }
      .text-area::placeholder {
        color: #aaa;
      }
      button {
        background-color: $dm-secondary;
        color: #222;
      }
      button:hover {
        background-color: #333;
        color: #ddd;
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
  .message-box {
    grid-area: 3 / 1 / 4 / 2;
    justify-self: center;
    .good-message {
      height: 60%;
      width: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $success;
      border-radius: 3px;
      p {
        margin: 0;
        color: #fff;
      }
    }
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
form {
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
  form {
    width: 100%;
    .name-input-container {
      flex-direction: column;
      align-content: space-between;
      input:first-child {
        margin-bottom: 10px;
      }
    }
  }
  .contact-container-grid {
    .message-box {
      grid-area: 4 / 1 / 5 / 2;
      margin-top: 30px;
    }
  }
  .message {
    margin-bottom: 15px;
  }
}
@media (min-width: 551px) {
  .contact-form-container {
    padding: 30px;
    width: 80%;
  }
  .name-input-container {
    .first-name-input {
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
