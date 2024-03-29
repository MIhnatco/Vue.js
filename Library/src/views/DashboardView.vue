<template>
  <div class="w-screen h-full flex">
    <!--menu-->
    <div class="bg-yellow-500 w-[400px] h-full text-white">
      <div class="px-[30px]">
        <h2 class="text-xl">Navigation</h2>
        <ul>
          <li>
            <router-link :to="{ name: 'library' }">My Library</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'profile' }">Profile</router-link>
          </li>
        </ul>
      </div>
    </div>

    <!--content-->
    <div class="bg-yellow-500 w-full h-full text-white">
      <div class="px-[30px]">
        <h1 class="text-2xl">Welcome ....user....</h1>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardApp'
}
</script>

<style></style>
