<script>
import Product from './Product.vue'

export default {
  name: 'ShoppingCart',
  props: {
    cartItems: {
      type: Array
    }
  },
  components: {
    Product
  },
  methods: {
    removeFromCart(product) {
      // Emit an event to inform the parent component to remove the item from the cart
      this.$emit('remove-from-cart', product)
    }
  }
}
</script>

<template>
  <div>
    <h1>Shopping Cart - {{ cartItems.length }} Items</h1>

    <div id="productsToBuy">
      <div class="productBuy" v-for="product in cartItems" :key="product.id">
        <Product :product="product" />

        <button class="btnRemove" @click="removeFromCart(product)">Remove from Cart</button>
      </div>
    </div>
  </div>
</template>

<style>
.productBuy {
  width: 55%;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 1rem;
  margin: 0.8rem auto;
}

.productBuy h2 {
  text-align: center;
  font-weight: bold;
}
.btnRemove {
  background-color: orangered;
  width: 90%;
  border: none;
  margin: 0.8rem 0;
  padding: 1rem 0;
  color: #fff;
  border-radius: 5px;
}

.btnRemove:hover {
  cursor: pointer;
}
</style>
