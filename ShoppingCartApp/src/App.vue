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
      const existingProductIndex = this.shoppingCart.findIndex((p) => p.id === product.id)

      if (existingProductIndex !== -1) {
        //update quantity, product is already in shoppingCart
        this.shoppingCart[existingProductIndex].quantity++
      } else {
        //add the product to shoppingCart
        this.shoppingCart.push({
          ...product,
          quantity: 1 //new product's quantity
        })
      }
    },
    removeFromCart(product) {
      //remove the product from shoppingCart
      const index = this.shoppingCart.findIndex((p) => p.id === product.id)
      if (index !== -1) {
        this.shoppingCart.splice(index, 1)
      }

      //add the product back to product list
      this.$refs.productList.addToProductList(product)
    },
    clearCart() {
      //save the products with change qunatities
      const updatedProducts = this.shoppingCart.reduce(
        (acc, cartItem) => {
          const index = acc.findIndex((prod) => prod.id === cartItem.id)
          if (index !== -1) {
            acc[index].quantity += cartItem.quantity
          }

          return acc
        },
        [...this.$refs.productList.products]
      )

      //Update the products in ProductList component
      this.$refs.productList.products = updatedProducts

      //Clear the shopping cart
      this.shoppingCart = []
    }
  }
}
</script>

<template>
  <div id="container">
    <products-list @add-to-cart="addToCart"></products-list>

    <shopping-cart
      :cartItems="shoppingCart"
      @remove-from-cart="removeFromCart"
      @clear-cart="clearCart"
    ></shopping-cart>
  </div>
</template>

<style>
#container {
  display: grid;
  grid-template-columns: 65% 35%;
  height: 100vh;
}
</style>
