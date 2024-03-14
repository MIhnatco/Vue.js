<template>
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
    >
      Submit
    </button>
  </form>
</template>

<script>
export default {
  name: 'LoginForm'
}
</script>

<style></style>
