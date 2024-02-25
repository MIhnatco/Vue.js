<script>
import ProductsApp from './components/ProductsApp.vue'
import HeaderApp from './components/HeaderApp.vue'

export default {
  name: 'App',
  components: {
    ProductsApp,
    HeaderApp
  }
}
</script>

<template>
  <header-app></header-app>
  <products-app></products-app>
</template>

<style></style>
