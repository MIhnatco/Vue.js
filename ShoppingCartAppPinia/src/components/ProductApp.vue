<template>
  <div class="product-card">
    <h3 id="name">{{ prod.name }}</h3>
    <p><strong>Department:</strong> {{ prod.department }}</p>

    <p><strong>Description:</strong> {{ prod.descr }}</p>
    <div class="details">
      <p><strong>Price:</strong> ${{ prod.price }}</p>
      <p><strong>In Stock:</strong> {{ prod.inStock }}</p>
    </div>
    <button id="btn" :disabled="prod.inStock === 0">Add to Cart</button>
  </div>
</template>

<script>
export default {
  name: 'ProductApp',
  props: {
    prod: {
      type: Object
    }
  }
}
</script>

<style>
.product-card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 1rem;
  max-width: 30%;
  display: flex;
  flex-direction: column;
  height: 100%;
}

#name {
  color: orangered;
  text-align: center;
  margin: 1rem 0;
}

.details {
  display: flex;
  justify-content: space-between;
  margin: 1rem;
}

#btn {
  background-color: green;
  border-radius: 3px;
  border: none;
  color: #fff;
  padding: 1rem 0;
  margin-bottom: 1rem;
}
</style>
