<template>
  <main id="container">
    <div id="sideBar">
      <h1>Search</h1>
      <input type="text" v-model="searchText" @input="filteredProducts" />
    </div>

    <div>
      <h1>Products List</h1>

      <div id="productsList">
        <product-app v-for="product in filteredProducts" :key="product.id" :prod="product">
        </product-app>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from 'pinia'
import useProductsStore from '@/stores/products'

import ProductApp from './ProductApp.vue'
export default {
  name: 'ProductsApp',
  data() {
    return {
      searchText: ''
    }
  },
  computed: {
    ...mapState(useProductsStore, ['products']),
    //filter products based on the search text
    filteredProducts() {
      return this.products.filter((product) =>
        product.name.toLowerCase().includes(this.searchText.toLowerCase())
      )
    }
  },
  components: {
    ProductApp
  }
}
</script>

<style>
#container {
  display: grid;
  grid-template-columns: 12% 88%;
  height: 100vh;
}
#productsList {
  display: flex;
  flex-wrap: wrap;
}
</style>
