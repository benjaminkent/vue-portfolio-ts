<template lang="pug">
  .contact-container-grid(id='contact')
    .bottom-background
    .contact-form-container
      .message
        h3 GET IN TOUCH
        h2 Contact Me
      form
        .name-input-container
          input(v-model='firstName' type='text' placeholder='First Name')
          input(v-model='lastName' type='text' placeholder='Last Name')
        input.email(v-model='email' type='email' placeholder='Email')
        textarea.text-area(v-model='message' placeholder='Message')
        button(type='submit') Send Message
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class ContactMe extends Vue {
  firstName: string = ''
  lastName: string = ''
  email: string = ''
  message: string = ''
}
</script>

<style lang="scss" scoped>
.contact-container-grid {
  display: grid;
  grid-template-rows: 0.75fr repeat(5, 1fr) 0.5fr;
  grid-template-columns: 1fr;
  height: 825px;
  margin-bottom: 500px;
  .contact-form-container {
    grid-area: 2 / 1 / 7 / 2;
    justify-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 4px 1px #33333310;
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
  }
}

@media (max-width: 550px) {
  .contact-form-container {
    width: 80%;
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
    width: 1000px;
  }
}
</style>

