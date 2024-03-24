<script>
import Auth from './components/AuthApp.vue'
import HeaderApp from './components/HeaderApp.vue'

import { mapWritableState } from 'pinia'
import useUserStore from '@/stores/user'
import { auth } from '@/includes/firebase'

export default {
  name: 'App',
  components: {
    HeaderApp,
    Auth
  },
  computed: {
    ...mapWritableState(useUserStore, ['userLoggedIn'])
  },
  created() {
    //persisting user authentication when logged in
    if (auth.currentUser) {
      this.userLoggedIn = true
    }
  }
}
</script>

<template>
  <header-app></header-app>

  <router-view></router-view>

  <auth></auth>
</template>
