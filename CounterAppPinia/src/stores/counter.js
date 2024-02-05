import { defineStore } from 'pinia'

export default defineStore('counter', {
  //our data
  state: () => ({
    count: 0
  }),

  //actions on data
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    reset() {
      this.count = 0
    }
  }
})
