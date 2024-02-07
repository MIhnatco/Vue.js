<script>
import { products } from '../products'
import Product from './Product.vue'

export default {
  name: 'ProductsList',
  data() {
    return {
      products: [...products]
    }
  },
  emits: ['add-to-cart'],
  methods: {
    addToCart(product) {
      this.$emit('add-to-cart', product)
    },

    removeFromList(product) {
      const index = this.products.findIndex((p) => p.id === product.id)
      if (index !== -1) {
        this.products.splice(index, 1)
      }
    },
    addToProductList(product) {
      this.products.push(product)
    }
  },
  components: {
    Product
  }
}
</script>

<template>
  <div>
    <h1>Products List</h1>

    <div id="products">
      <div class="product" v-for="product in products" :key="product.id">
        <Product :product="product" />

        <button class="btnAdd" @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<style>
#products {
  display: flex;
  flex-wrap: wrap;
}

.product {
  width: 33%;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 1rem;
  margin: 0.8rem 0.5rem;
}

.product h2 {
  text-align: center;
  font-weight: bold;
}

.btnAdd {
  width: 90%;
  border: none;
  margin: 0.8rem 0;
  padding: 1rem 0;
  background-color: rgb(6, 103, 19);
  color: #fff;
  border-radius: 5px;
}

.btnAdd:hover {
  cursor: pointer;
}
</style>
