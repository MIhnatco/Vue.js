<script>
import HeaderApp from './components/HeaderApp.vue'
import IntroApp from './components/IntroApp.vue'

import Auth from './components/AuthApp.vue'

import { mapWritableState } from 'pinia';
import useUserStore from '@/stores/user'
import {auth} from '@/includes/firebase'

export default {
  name: 'App',
  components: {
    HeaderApp,
    IntroApp,
    Auth
  }, 
  computed: {
    ...mapWritableState(useUserStore, ['userLoggedIn'])
  },
  created(){
    //persisting user authentication when logged in
    if(auth.currentUser){
      this.userLoggedIn = true;
    }
  }
}
</script>

<template>
  <header-app></header-app>
  <intro-app></intro-app>

  <auth></auth>
</template>
