<template>
  <div class="fixed z-10 inset-0 overflow-y-auto" id="modal" :class="hiddenClass">
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-800 opacity-75"></div>
      </div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

      <div
        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
      >
        <div class="py-4 text-left px-6">
          <!--Title-->
          <div class="flex justify-between items-center pb-4">
            <p class="text-2xl text-yellow-800 font-bold">Your Account</p>

            <!--Modal Close Button-->
            <div class="modal-close cursor-pointer z-50" @click="modalVisibility = false">
              <i class="fas fa-times text-yellow-800"></i>
            </div>
          </div>

          <!--Tabs-->
          <ul class="flex flex-wrap mb-4">
            <li class="flex-auto text-center">
              <a
                href="#"
                class="block rounded py-3 px-4 transition"
                @click.prevent="tab = 'login'"
                :class="{
                  'bg-yellow-800 text-white hover:bg-yellow-700': tab === 'login'
                }"
                >Login</a
              >
            </li>
            <li class="flex-auto text-center">
              <a
                href="#"
                class="block rounded py-3 px-4 transition"
                @click.prevent="tab = 'register'"
                :class="{ 'bg-yellow-800 text-white hover:bg-yellow-700': tab === 'register' }"
                >Register</a
              >
            </li>
          </ul>

          <!--Login Form-->
          <login-form v-show="tab === 'login'"></login-form>

          <!--Register Form-->
          <register-form v-show="tab === 'register'"></register-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from './LoginForm.vue'
import RegisterForm from './RegisterForm.vue'

import useModalStore from '@/stores/modal'
import { mapState, mapWritableState } from 'pinia'

export default {
  name: 'Auth',
  data() {
    return {
      tab: 'login'
    }
  },
  computed: {
    ...mapState(useModalStore, ['hiddenClass']),
    ...mapWritableState(useModalStore, {
      modalVisibility: 'isOpen'
    })
  },
  components: {
    LoginForm,
    RegisterForm
  }
}
</script>

<style></style>
