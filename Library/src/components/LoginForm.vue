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
      <form>
        <!-- Email -->
        <div class="mb-3">
          <label for="email" class="inline-block mb-2">Email:</label>
          <input
            class="block w-full text-gray-800 border border-gray-300 px-3 py-1.5 transition duration-500 focus:outline-none focus:border-black rounded"
            type="email"
            id="email"
            aria-label="email"
            placeholder="Enter Email:"
          />
        </div>
        <!-- Password -->
        <div class="mb-3">
          <label for="password" class="inline-block mb-2">Password:</label>
          <input
            class="block w-full text-gray-800 border border-gray-300 px-3 py-1.5 transition duration-500 focus:outline-none focus:border-black rounded"
            type="password"
            id="password"
            aria-label="password"
            placeholder="Enter password:"
          />
        </div>

        <button
          aria-label="submit"
          type="submit"
          class="block w-full bg-yellow-800 text-white py-1.5 px-3 rounded transtion hover:bg-yellow-700"
          :disable="login_in_submission"
        >
          Submit
        </button>
      </form>

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
export default {
  name: 'LoginForm',
  data() {
    return {
      login_in_submission: false,
      login_show_alert: false,
      login_alert_variant: 'bg-blue-500',
      login_alert_msg: 'Please wait! We are logging you in.'
    }
  }
}
</script>

<style></style>
