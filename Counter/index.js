Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increase() {
      this.counter++;
    },
    decrease() {
      this.counter--;
    },
    reset(){
        this.counter = 0;
    }
  },
}).mount("#app");
