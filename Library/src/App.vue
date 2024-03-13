<script>
import HeaderApp from './components/HeaderApp.vue'
import IntroApp from './components/IntroApp.vue'

import Auth from './components/AuthApp.vue'

export default {
  name: 'App',
  components: {
    HeaderApp,
    IntroApp,
    Auth
  }
}
</script>

<template>
  <header-app></header-app>
  <intro-app></intro-app>

  <auth></auth>
</template>
