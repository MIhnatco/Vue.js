<script>
import HeaderApp from './components/HeaderApp.vue'
import IntroApp from './components/IntroApp.vue'

import AuthApp from './components/AuthApp.vue'

export default {
  name: 'App',
  components: {
    HeaderApp,
    IntroApp,
    AuthApp
  }
}
</script>

<template>
  <header-app></header-app>
  <intro-app></intro-app>

  <auth-app></auth-app>
</template>
