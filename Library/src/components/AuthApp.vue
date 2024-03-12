<template>
  <login-form></login-form>
  <register-form></register-form>
</template>

<script>
import LoginForm from './LoginForm.vue'
import RegisterForm from './RegisterForm.vue';

export default {
  name: 'AuthApp',
  components: {
    LoginForm,
    RegisterForm
  }
}
</script>

<style></style>
