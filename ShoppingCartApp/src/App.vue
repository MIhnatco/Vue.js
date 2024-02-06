<script>
import ShoppingCart from './components/ShoppingCart.vue'
import ProductsList from './components/ProductsList.vue'

export default {
  name: 'App',
  data() {
    return {
      products: []
    }
  },
  components: {
    ShoppingCart,
    ProductsList
  },
  methods: {
    addToCart(product) {
      this.products.push(product)
    }
  }
}
</script>

<template>
  <div id="container">
    <products-list @add-to-cart="addToCart"></products-list>
    <shopping-cart :products="products"></shopping-cart>
  </div>
</template>

<style>
#container {
  display: grid;
  grid-template-columns: 65% 35%;
  height: 100vh;
}
</style>
