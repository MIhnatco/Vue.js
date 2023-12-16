<script>
import CounterApp from '@/components/counterApp.vue'

export default {
  name: 'App',
  data() {
    return {
      title: 'Counter App'
    }
  },
  components: {
    CounterApp
  }
}
</script>

<template>
  <h1>{{ title }}</h1>

  <CounterApp />
</template>

<style>
h1 {
  color: #b20202;
  letter-spacing: 1px;
  font-size: 3rem;
}
</style>
