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
    },
    clearCart() {
      // Clear the cart by resetting the cartItems array
      this.$emit('clear-cart')
    }
  },
  computed: {
    totalPrice() {
      const total = this.cartItems.reduce((total, item) => (total += item.price * item.quantity), 0)
      return total.toFixed(2)
    },
    totalItems() {
      const total = this.cartItems.reduce((total, item) => (total += item.quantity), 0)
      return total
    }
  }
}
</script>

<template>
  <div>
    <h1>Shopping Cart - {{ totalItems }} Items</h1>

    <div class="smallContainer">
      <!-- Display total price in shopping cart -->
      <h2>Total Price: ${{ totalPrice }}</h2>

      <button class="clearBtn" @click="clearCart">Clear the Cart</button>
    </div>

    <div id="productsToBuy">
      <div class="productBuy" v-for="product in cartItems" :key="product.id">
        <Product :product="product" />

        <button class="btnRemove" @click="removeFromCart(product)">Remove from Cart</button>
      </div>
    </div>
  </div>
</template>

<style>
.smallContainer {
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
}

.clearBtn {
  border: none;
  background-color: red;
  color: #fff;
  padding: 0.8rem 1.6rem;
  border-radius: 5px;
}

.clearBtn:hover {
  cursor: pointer;
}

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
