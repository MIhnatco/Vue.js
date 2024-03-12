<template>
  <form>
    <!-- Name-->
    <div class="mb-3">
      <label for="name" class="inline-block mb-2">Name:</label>
      <input
        type="text"
        id="name"
        placeholder="Enter Name:"
        aria-label="name"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
      />
    </div>
    <!-- Email-->
    <div class="mb-3">
      <label for="email" class="inline-block mb-2">Email:</label>
      <input
        type="email"
        id="email"
        aria-label="email"
        placeholder="Enter Email:"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
      />
    </div>
    <!-- Password-->
    <div class="mb-3">
      <label for="password" class="inline-block mb-2">Password:</label>
      <input
        type="password"
        id="password"
        aria-label="password"
        placeholder="Enter Email:"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
      />
    </div>
    <!-- Confirm Password-->
    <div class="mb-3">
      <label for="confirm_password" class="inline-block mb-2">Confirm Password:</label>
      <input
        type="password"
        id="confirm_password"
        placeholder="Enter Email:"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
      />
    </div>

    <button
      type="submit"
      aria-label="submit"
      class="bock w-full bg-yellow-800 text-white py-1.5 px-3 rounded"
    >
      Submit
    </button>
  </form>
</template>

<script>
export default {
  name: 'RegisterForm'
}
</script>

<style></style>
