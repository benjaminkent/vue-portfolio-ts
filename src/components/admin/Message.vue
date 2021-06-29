<template lang="pug">
  .message
    .name-delete
      p Name: {{ message.firstName }} {{ message.lastName }}
      fa-icon.trash-can(:icon="['fad', 'trash']" @click='deleteMessage(message)')
    p Email: {{ message.email }}
    p Message: {{ message.messageText }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { FetchedMessageInterface } from '@/interfaces/interfaces'

@Component({})
export default class Message extends Vue {
  @Prop({ default: {} }) readonly message!: FetchedMessageInterface
  @Prop(Function) readonly deleteMessage!: () => void
}
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
