<template>
<div class="message">
    <div class="name-delete">
        <p>Name: {{ message.firstName }} {{ message.lastName }}</p>
        <fa-icon class="trash-can" :icon="['fad', 'trash']" @click="deleteMessage(message)"></fa-icon>
    </div>
    <p>Email: {{ message.email }}</p>
    <p>Message: {{ message.messageText }}</p>
</div>
</template>

<script setup lang="ts">
import { FetchedMessageInterface } from '@interfaces'

defineProps<{
  message: FetchedMessageInterface
  deleteMessage: (message: FetchedMessageInterface) => void
}>()
</script>

<style lang="scss" scoped>
.message {
  padding: 15px;
  width: 350px;
  background-color: #33333309;
  box-shadow: 0 0 5px 1px #33333320;
  margin: 10px;
  .name-delete {
    display: flex;
    justify-content: space-between;
    p {
      margin: 0;
    }
    .trash-can {
      color: #ff0000;
      cursor: pointer;
    }
    .trash-can:hover {
      color: #a30000;
    }
  }
  p:last-child {
    margin-bottom: 0;
  }
}
</style>
