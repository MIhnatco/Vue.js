<script>
import ShoppingCart from './components/ShoppingCart.vue'
import ProductsList from './components/ProductsList.vue'

export default {
  name: 'App',
  components: {
    ShoppingCart,
    ProductsList
  }
}
</script>

<template>
  <div id="container">
    <products-list></products-list>
    <shopping-cart></shopping-cart>
  </div>
</template>

<style>
#container {
  display: grid;
  grid-template-columns: 65% 35%;
  height: 100vh;
}
</style>
