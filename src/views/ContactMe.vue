<template lang="pug">
  .contact-container-grid(id='contact')
    .bottom-background
    .contact-form-container
      .message
        h3 GET IN TOUCH
        h2 Contact Me
      form(@submit.prevent='sendMessage')
        .name-input-container
          input(v-model='message.firstName' type='text' placeholder='First Name')
          input(v-model='message.lastName' type='text' placeholder='Last Name')
        input.email(v-model='message.email' type='email' placeholder='Email')
        textarea.text-area(v-model='message.messageText' placeholder='Message')
        button(type='submit') Send Message
    .message-box
      transition(name='slide-up')
        .good-message(v-if='messageSent')
          p Thank you for your message!
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { MessageInterface } from '@/interfaces/interfaces'

@Component({})
export default class ContactMe extends Vue {
  message: MessageInterface = {
    firstName: '',
    lastName: '',
    email: '',
    messageText: ''
  }
  messageSent: boolean = false
  response = {}

  sendMessage(): void {
    const baseURL = 'http://localhost:3000'
    this.$http
      .post(`${baseURL}/messages`, {
        first_name: this.message.firstName,
        last_name: this.message.lastName,
        email: this.message.email,
        message_text: this.message.messageText
      })
      .then(resp => (this.response = resp))
    this.showMessageAlert()
    this.message = {
      firstName: '',
      lastName: '',
      email: '',
      messageText: ''
    }
  }
  showMessageAlert(): void {
    if (this.messageSent === true) {
      return
    }
    this.messageSent = true
    setTimeout(() => {
      this.messageSent = false
    }, 5000)
  }
}
</script>

<style lang="scss" scoped>
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
    color: $accents;
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
    input {
      width: 100%;
      border: none;
      background-color: #33333309;
      padding: 15px 0;
      font-size: 16px;
      text-indent: 15px;
    }
  }
  .email {
    width: 100%;
    border: none;
    background-color: #33333309;
    padding: 15px 0;
    font-size: 16px;
    text-indent: 15px;
  }
  .text-area {
    width: 100%;
    border: none;
    background-color: #33333309;
    padding: 0;
    padding: 15px 0;
    font-size: 16px;
    text-indent: 15px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    height: 225px;
    resize: vertical;
  }
  button {
    align-self: flex-start;
    font-size: 16px;
    border: none;
    background-color: $infra-red;
    color: #fff;
    padding: 20px 30px;
    border-radius: 30px;
    cursor: pointer;
    transition: 0.3s all ease-in-out;
  }
  button:hover {
    background-color: #333;
    transition: 0.3s all ease-in-out;
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
  .contact-form-container {
    padding: 30px;
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
    input:first-child {
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

