<template>
  <header class="bg-yellow-700 flex items-center">
    <nav class="container flex justify-start items-center py-5 px-4 mx-auto">
      <a class="text-white font-bold uppercase text-2xl mr-4"> Library App </a>

      <div class="flex flex-grow items-center">
        <!-- Primary Navigation-->
        <ul class="flex mt-1">
          <li>
            <a href="#" class="px-2 text-white">About</a>
          </li>

          <li>
            <a href="#" aria-label="Login or Register" class="px-2 text-white">Login/Register</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderApp'
}
</script>
