<template>
  <header class="bg-yellow-700 flex items-center">
    <nav class="container text-center md:flex md:justify-start items-center py-5 px-4 mx-auto">
      <a class="text-white font-bold uppercase text-xl md:text-2xl mr-4"> Library App </a>

      <div class="md:flex flex-grow items-center">
        <!-- Primary Navigation-->
        <ul class="md:flex mt-1">
          <li>
            <a href="#" class="px-2 text-white">About</a>
          </li>

          <li>
            <a href="#" aria-label="Login or Register" class="px-2 text-white" @click.prevent="toggleAuthModal">Login/Register</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import {mapStores} from 'pinia'
import useModalStore from '@/stores/modal'

export default {
  name: 'HeaderApp',
  computed: {
    ...mapStores(useModalStore)
  }, 
  methods: {
    toggleAuthModal(){
      this.modalStore.isOpen = !this.modalStore.isOpen
    }
  }
}
</script>
