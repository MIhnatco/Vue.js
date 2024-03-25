<template>
  <header class="bg-yellow-700 flex items-center">
    <nav class="container text-center md:flex md:justify-start items-center py-5 px-4 mx-auto">
      <router-link class="text-white font-bold uppercase text-xl md:text-2xl mr-4" exact-active-class="no-active" to="/">
        Library App
      </router-link>

      <div class="md:flex flex-grow items-center">
        <!-- Primary Navigation-->
        <ul class="md:flex mt-1">
          <template v-if="!userStore.userLoggedIn">
            <li>
              <router-link to="/about" class="px-2 text-white">About</router-link>
            </li>
            <li>
              <a
                href="#"
                aria-label="Login or Register"
                class="px-2 text-white"
                @click.prevent="toggleAuthModal"
                >Login/Register</a
              >
            </li>
          </template>

          <template v-else>
            <li>
              <router-link to="/dashboard" aria-label="Dashboard" class="px-2 text-white"
                >Dashboard</router-link
              >
            </li>
            <li>
              <a
                href="#"
                aria-label="Logout"
                class="px-2 text-white"
                @click.prevent="userStore.signOut"
                >Logout</a
              >
            </li>
          </template>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapStores } from 'pinia'
import useModalStore from '@/stores/modal'
import useUserStore from '@/stores/user'

export default {
  name: 'HeaderApp',
  computed: {
    ...mapStores(useModalStore, useUserStore)
  },
  methods: {
    toggleAuthModal() {
      this.modalStore.isOpen = !this.modalStore.isOpen
    }
  }
}
</script>
