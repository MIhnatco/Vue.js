<template>
  <div>
    <div
      class="text-white text-center font-bold p-4 rounded mb-4"
      v-if="login_show_alert"
      :class="login_alert_variant"
    >
      {{ login_alert_msg }}
    </div>

    <div class="md:flex justify-around">
      <vee-form :validation-schema="loginSchema" @submit="login">
        <!-- Email -->
        <div class="mb-3">
          <label for="email" class="inline-block mb-2">Email:</label>
          <vee-field
            class="block w-full text-gray-800 border border-gray-300 px-3 py-1.5 transition duration-500 focus:outline-none focus:border-black rounded"
            type="email"
            id="emailLog"
            aria-label="email"
            placeholder="Enter Email:"
            name="email"
            v-model="email"
            :class="{
              isValid: this.email.length >= 4 && this.email.length > 0,
              isInvalid: this.email.length < 4 && this.email.length > 0
            }"
          />

          <ErrorMessage class="text-red-600" name="email" />
        </div>
        <!-- Password -->
        <div class="mb-3">
          <label for="password" class="inline-block mb-2">Password:</label>
          <vee-field
            class="block w-full text-gray-800 border border-gray-300 px-3 py-1.5 transition duration-500 focus:outline-none focus:border-black rounded"
            type="password"
            name="password"
            id="passwordLog"
            aria-label="password"
            placeholder="Enter password:"
            v-model="password"
            :class="{
              isValid: this.password.length >= 9 && this.password.length > 0,
              isInvalid: this.password.length < 9 && this.password.length > 0
            }"
          />

          <ErrorMessage class="text-red-600" name="password" />
        </div>

        <button
          aria-label="submit"
          type="submit"
          class="block w-full bg-yellow-800 text-white py-1.5 px-3 rounded transtion hover:bg-yellow-700"
          :disabled="login_in_submission"
        >
          Submit
        </button>
      </vee-form>

      <div class="mt-4 md:shrink-0">
        <img
          src="../assets/images/bulding.jpg"
          alt="modern building architecture"
          class="h-48 w-full object-cover md:h-full md:w-52 rounded-xl"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import useUserStore from '@/stores/user'

export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: '',
      loginSchema: {
        email: 'required|email',
        password: 'required|min:9|max:20'
      },

      //disable button while submitting
      login_in_submission: false,
      //toggle alert's visibility
      login_show_alert: false,

      //color of the alert
      login_alert_variant: 'bg-blue-500',
      //message inside the alert
      login_alert_msg: 'Please wait! We are logging you in.'
    }
  },
  methods: {
    ...mapActions(useUserStore, ['authenticate']),

    async login(values) {
      this.login_in_submission = true
      this.login_alert_msg = 'Please wait! We are logging you in.'
      this.login_alert_variant = 'bg-blue-500'
      this.login_show_alert = true

      try {
        await this.authenticate(values)

        //redirecting the page after login
        if (this.$route.path === '/' || this.$route.path === '/about') {
          this.$router.push({ path: '/dashboard-user' })
        }
      } catch (error) {
        this.login_in_submission = false
        this.login_alert_variant = 'bg-red-500'
        this.login_alert_msg = 'Invalid login details'
        return
      }

      this.login_alert_variant = 'bg-green-500'
      this.login_alert_msg = 'Success! You are now logged in.'
    }
  }
}
</script>

<style>
.isValid {
  border-color: green;
}

.isInvalid {
  border-color: red;
}
</style>
