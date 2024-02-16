<template>
  <div class="container">
    <header></header>

    <main>
      <h1>Products List</h1>

      <div id="productsList">
        <product-app v-for="product in products" :key="product.id" :product="product">
        </product-app>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import useProductsStore from '@/stores/products'

import ProductApp from './ProductApp.vue'
export default {
  name: 'ProductsApp',
  computed: {
    ...mapState(useProductsStore, ['products'])
  },
  components: {
    ProductApp
  }
}
</script>

<style>
#productsList {
  display: flex;
  flex-wrap: wrap;
}
</style>
