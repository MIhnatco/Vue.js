<script>
export default {
  name: 'ShoppingCart',
  props: {
    products: {
      type: Array
    }
  }
}
</script>

<template>
  <div>
    <h1>Shopping Cart</h1>

    <div id="productsToBuy">
      <div class="productBuy" v-for="product in products" :key="product.id">
        <h2>{{ product.name }}</h2>
        <h4>Price: ${{ product.price }}</h4>
        <p>In Stock: {{ product.quantity }}</p>
        <p>ID: {{ product.id }}</p>

        <button class="btnRemove">Remove from Cart</button>
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
