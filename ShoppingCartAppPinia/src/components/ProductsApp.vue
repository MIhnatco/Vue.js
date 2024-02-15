<template>
  <div class="container">
    <header>
      <h1>Products List</h1>
      <p v-for="product in products" :key="product.id">
        {{ product.name }}
      </p>
    </header>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import useProductsStore from '@/stores/products'

export default {
  name: 'ProductsApp',
  computed: {
    ...mapState(useProductsStore, ['products'])
  }
}
</script>

<style></style>
