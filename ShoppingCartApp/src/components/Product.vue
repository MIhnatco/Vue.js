<template>
  <h2>{{ product.name }}</h2>
  <h4>Price: ${{ product.price }}</h4>
  <p>In Stock: {{ product.quantity }}</p>
  <p>ID: {{ product.id }}</p>
 
</template>

<script>
export default {
  name: 'ProductApp',
  props: {
    product: { 
      type: Object
    }
  }
}
</script>

<style>
label {
  display: inline;
}
</style>
