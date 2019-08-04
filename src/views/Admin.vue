<template lang="pug">
  .admin-container
    router-link(to='/') Back to main app
    h1 Admin View
    form(@submit.prevent='enterAdmin')
      label(for='password') Password
      input(id='password', type='password' v-model='password' placeholder='Password')
      button.margin-top(type='submit') Enter
    .admin-page
      button(@click='fetchMessages') Fetch Messages
      h2 Messages
      .messages-container
        Message
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Message from '@/components/admin/Message.vue'

@Component({
  components: {
    Message
  }
})
export default class Admin extends Vue {
  showPage: boolean = false
  showMessages: boolean = false
  password: string = ''

  enterAdmin(): void {
    if (this.password === process.env.VUE_APP_ADMIN_PASSWORD) {
      this.showPage = true
    } else {
      alert('Incorrect Password')
    }
    this.password = ''
  }
  fetchMessages(): void {
    console.log('foo')
  }
}
</script>

<style lang="scss" scoped>
.admin-container {
  margin: 20px;
}
form {
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
.margin-top {
  margin-top: 20px;
}
</style>

