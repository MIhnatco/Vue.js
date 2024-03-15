<template>
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
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
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
        />

        <ErrorMessage class="text-red-600" name="confirm_password" />
      </div>

      <button
        type="submit"
        aria-label="submit"
        class="bock w-full bg-yellow-800 hover:bg-yellow-700 text-white py-1.5 px-3 rounded"
      >
        Submit
      </button>
    </vee-form>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',
  data() {
    return {
      schema: {
        name: 'required|min:3|max:100|alpha_spaces',
        email: 'required|min:3|max:50|email',
        password: 'required|min:3|max:20',
        confirm_password: 'confirmed:@password'
      }
    }
  },
  methods: {
    register(values) {
      console.log(values)
    }
  }
}
</script>

<style></style>
