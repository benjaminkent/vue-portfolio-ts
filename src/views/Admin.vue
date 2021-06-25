<template lang="pug">
  .admin-container
    .header
      router-link(to='/') Back to main app
      h1 Admin View
    .enter-password-container(v-if='!showPage')
      form(@submit.prevent='enterAdmin')
        label(for='password') Password
        input(id='password', type='password' v-model='password' placeholder='Password')
        button.margin-top(type='submit') Enter
    .admin-page(v-if='showPage')
      button.margin-left(@click='logOut') Log Out
      .header
        button(@click='fetchMessages') Fetch Messages
        h2 Messages
      .messages-container
        Message(
          v-for='message in messages'
          :message='message'
          :deleteMessage='deleteMessage'
          :key='message.id'
        )
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Message from '@/components/admin/Message.vue'
import { FetchedMessageInterface } from '@/interfaces/interfaces'
import { loadMessages, deleteMessage } from '@/api/api'

@Component({
  components: {
    Message,
  },
})
export default class Admin extends Vue {
  showPage: boolean = false
  showMessages: boolean = false
  password: string = ''
  messages: FetchedMessageInterface[] = []

  enterAdmin(): void {
    if (this.password === process.env.VUE_APP_ADMIN_PASSWORD) {
      this.showPage = true
    } else {
      alert('Incorrect Password')
    }
    this.password = ''
  }
  async fetchMessages() {
    const response = await loadMessages()
    this.messages = response.data.messages
  }
  logOut(): void {
    this.showPage = false
  }
  deleteMessage(message: FetchedMessageInterface) {
    deleteMessage(message.id)
    this.messages.splice(this.messages.indexOf(message), 1)
  }
}
</script>

<style lang="scss" scoped>
.header {
  margin: 20px;
  a {
    color: $secondary;
  }
}
form {
  margin: 20px;
  display: flex;
  flex-direction: column;
  input {
    width: 200px;
    border: none;
    background-color: #33333309;
    padding: 15px 0;
    font-size: 16px;
    text-indent: 15px;
  }
}
button {
  align-self: flex-start;
  font-size: 16px;
  border: none;
  background-color: $secondary;
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
.margin-top {
  margin-top: 20px;
}
.margin-left {
  margin-left: 20px;
}
.messages-container {
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
}
</style>
