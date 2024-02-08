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
    findProductIndexById(id) {
      return this.products.findIndex((product) => product.id === id)
    },
    addToCart(product) {
      const index = this.findProductIndexById(product.id)

      if (index !== -1) {
        if (this.products[index].quantity > 0) {
          //decrease the quantity of the chosen product
          this.products[index].quantity--
          this.$emit('add-to-cart', product)
        } else {
          //handle case where quantity is already 0
          console.error('Cannot add product to cart: Quantity is already 0')
        }
      } else {
        //Handle case where product is not found in the list
        console.error('Cannot add product to cart: Product not found in the list')
      }
    },
    addToProductList(product) {
      const index = this.findProductIndexById(product.id)

      if (index !== -1) {
        //increase the quantity of the deleted product
        this.products[index].quantity += product.quantity
      } else {
        //Handle case where product is not found in the list
        this.products.push(product)
      }
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

        <!-- Disable the button if the product is out of stock -->
        <button class="btnAdd" @click="addToCart(product)" :disabled="product.quantity === 0">
          Add to Cart
        </button>
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
