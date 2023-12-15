<template>
  <div id="container">
    <h1>{{ this.counterStore.count }}</h1>

    <button @click="this.counterStore.increment">+</button>
    <button @click="this.counterStore.decrement">-</button>

    <button @click="this.counterStore.reset">Reset</button>
  </div>
</template>

<script>
import { mapStores } from 'pinia'

import useCounterStore from '@/stores/counter'

export default {
  name: 'CounterApp',
  computed: {
    ...mapStores(useCounterStore)
  }
}
</script>
<style scoped>
#container {
  background-color: aliceblue;
  height: 70vh;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
