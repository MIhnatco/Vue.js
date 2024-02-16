import { defineStore } from 'pinia'
import { faker } from '@faker-js/faker'

export default defineStore('products', {
  state: () => ({
    products: [...Array(20)].map(() => ({
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      department: faker.commerce.department(),
      descr: faker.commerce.productDescription(),
      inStock: faker.finance.amount({ min: 5, max: 18, dec: 0 })
    }))
  })
})
