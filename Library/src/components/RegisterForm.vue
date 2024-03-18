<template>
  <div>
    <div
      class="text-white text-center font-bold p-4 rounded mb-4"
      v-if="reg_show_alert"
      :class="reg_alert_variant"
    >
      {{ reg_alert_msg }}
    </div>

    <div class="md:flex justify-around">
      <div class="my-4 md:shrink-0">
        <img
          src="../assets/images/bulding.jpg"
          alt="modern building architecture"
          class="h-48 w-full object-cover md:h-full md:w-52 rounded-xl"
        />
      </div>

      <!-- Registration form -->
      <vee-form :validation-schema="schema" @submit="register">
        <!-- Name-->
        <div class="mb-3">
          <label for="name" class="inline-block mb-2">Name:</label>
          <vee-field
            type="text"
            id="name"
            name="name"
            placeholder="Enter Name:"
            aria-label="name"
            class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
            v-model="name"
            :class="{
              isValid: this.name.length >= 3 && this.name.length > 0,
              isInvalid: this.name.length < 3 && this.name.length > 0
            }"

          />

          <ErrorMessage class="text-red-600" name="name" />
        </div>
        <!-- Email-->
        <div class="mb-3">
          <label for="email" class="inline-block mb-2">Email:</label>
          <vee-field
            type="email"
            id="email"
            name="email"
            aria-label="email"
            placeholder="Enter Email:"
            class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
            v-model="email"
            :class="{
              isValid: this.email.length >= 3 && this.email.length > 0,
              isInvalid: this.email.length < 3 && this.email.length > 0
            }"
          />
          <ErrorMessage class="text-red-600" name="email" />
        </div>

        <!-- Password-->
        <div class="mb-3">
          <label for="password" class="inline-block mb-2">Password:</label>
          <vee-field
            type="password"
            id="password"
            name="password"
            aria-label="password"
            placeholder="Enter password:"
            :bails="false"
            class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
            v-model="password"
            :class="{
              isValid: this.password.length >= 3 && this.password.length > 0,
              isInvalid: this.password.length < 3 && this.password.length > 0
            }"
          />

          <ErrorMessage class="text-red-600" name="password" />
        </div>

        <!-- Confirm Password-->
        <div class="mb-3">
          <label for="confirm_password" class="inline-block mb-2">Confirm Password:</label>
          <vee-field
            name="confirm_password"
            type="password"
            id="confirm_password"
            placeholder="Confirm password:"
            class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"

            
            v-model="confirm_password"
            :class="{
              isValid: this.confirm_password.length >= 3 && this.confirm_password.length > 0,
              isInvalid: this.confirm_password.length < 3 && this.confirm_password.length > 0
            }"
          />

          <ErrorMessage class="text-red-600" name="confirm_password" />
        </div>

        <button
          type="submit"
          aria-label="submit"
          class="bock w-full bg-yellow-800 hover:bg-yellow-700 text-white py-1.5 px-3 rounded"
          :disabled="reg_in_submission"
        >
          Submit
        </button>
      </vee-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',
  data() {
    return {
      name: "", 
      email: '',
      password: '', 
      confirm_password: "",
      schema: {
        name: 'required|min:3|max:100|alpha_spaces',
        email: 'required|min:4|max:50|email',
        password: 'required|min:9|max:20',
        confirm_password: 'password_mismatch:@password'
      },
      reg_in_submission: false,
      reg_show_alert: false,
      reg_alert_variant: 'bg-blue-500',
      reg_alert_msg: 'Please wait! Your account is being created.'
    }
  },
  methods: {
    register(values) {
      this.reg_in_submission = true
      this.reg_show_alert = true
      this.reg_alert_variant = 'bg-blue-500'
      this.reg_alert_msg = 'Please wait! Your account is being created.'

      this.reg_alert_variant = 'bg-green-500'
      this.reg_alert_msg = 'Success! Your account has been created.'
      console.log(values)
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
