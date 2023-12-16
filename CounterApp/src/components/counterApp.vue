<template>
  <div id="container">
    <div id="counters">
      <button id="decr" @click="this.counterStore.decrement">-</button>

      <h1 id="nmb">{{ this.counterStore.count }}</h1>

      <button id="incr" @click="this.counterStore.increment">+</button>
    </div>

    <button id="reset" @click="this.counterStore.reset">Reset</button>
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
  height: 70vh;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

#counters {
  display: flex;
  border-radius: 30%;
}

#counters,
#decr,
#incr {
  background: rgb(9, 67, 124);
}

#nmb,
#decr,
#incr {
  font-size: 3rem;
}

#nmb {
  background: rgb(32, 120, 208);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  width: 100px;
  height: 100px;
  border-radius: 50%;
}

#decr,
#incr {
  border: none;
  width: 150px;
  z-index: 2;
  color: rgb(136, 168, 200);
}

#decr {
  border-bottom-left-radius: 30%;
  border-top-left-radius: 30%;
}
#incr {
  border-bottom-right-radius: 30%;
  border-top-right-radius: 30%;
}

#reset {
  background: #b20202;
  border: none;
  padding: 1rem 2.2rem;
  font-size: 1.4rem;
  border-radius: 16px;
  color: aliceblue;
}
</style>
