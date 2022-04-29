<template>
<div class="admin-container">
    <div class="header">
        <router-link to="/">Back to main app</router-link>
        <h1>Admin View</h1>
    </div>
    <div class="enter-password-container" v-if="!showPage">
        <form @submit.prevent="enterAdmin">
          <label for="password">Password</label>
          <input id="password" type="password" v-model="password" placeholder="Password" />
          <button class="margin-top" type="submit">Enter</button>
        </form>
    </div>
    <div class="admin-page" v-if="showPage">
      <button class="margin-left" @click="logOut">Log Out</button>
      <div class="header">
          <button @click="fetchMessages">Fetch Messages</button>
          <h2>Messages</h2>
      </div>
      <div class="messages-container">
          <Message v-for="message in messages" :message="message" :deleteMessage="localDelete" :key="message.id" />
      </div>
    </div>
</div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue'
import Message from '@/components/admin/Message.vue'
import { FetchedMessageInterface } from '@/interfaces/interfaces'
import { loadMessages, deleteMessage } from '@/api/api'

const showPage = ref(false)
const password = ref('')
const messages: Ref<FetchedMessageInterface[]> = ref([])

function enterAdmin(): void {
  if (password.value === process.env.VUE_APP_ADMIN_PASSWORD) {
    showPage.value = true
  } else {
    alert('Incorrect Password')
  }
  password.value = ''
}

async function fetchMessages() {
  const response = await loadMessages()
  messages.value = response.data.messages
}

function logOut(): void {
  showPage.value = false
}

function localDelete(message: FetchedMessageInterface) {
  deleteMessage(message.id)

  messages.value.splice(messages.value.indexOf(message), 1)
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
