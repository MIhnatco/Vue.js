<script>
import ShoppingCart from './components/ShoppingCart.vue'
import ProductsList from './components/ProductsList.vue'

export default {
  name: 'App',
  data() {
    return {
      shoppingCart: []
    }
  },
  components: {
    ShoppingCart,
    ProductsList
  },
  methods: {
    addToCart(product) {
      //add the product to shoppingCart
      this.shoppingCart.push(product)

      //remove the product from the product list
      this.$refs.productList.removeFromList(product)
    }
  }
}
</script>

<template>
  <div id="container">
    <products-list ref="productList" @add-to-cart="addToCart"></products-list>

    <shopping-cart :cartItems="shoppingCart"></shopping-cart>
  </div>
</template>

<style>
#container {
  display: grid;
  grid-template-columns: 65% 35%;
  height: 100vh;
}
</style>
