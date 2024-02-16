<template>
  <header>
    <h1>ShoppingShop</h1>
    <input type="text" placeholder="What are you looking for?" />
    <i class="fa-solid fa-cart-shopping"></i>
  </header>
</template>

<script>
export default {
  name: 'HeaderApp'
}
</script>

<style>
header {
  height: 40px;
  background-color: #456;
  color: #fff;
  display: flex;
  align-items: center;
}
</style>
