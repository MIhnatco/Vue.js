import ShoppingCart from '@/components/ShoppingCart.vue'

import { shallowMount } from '@vue/test-utils'

describe('ShoppingCart.vue', () => {
  test('render inner heading', () => {
    const wrapper = shallowMount(ShoppingCart)

    expect(wrapper.text()).toContain('Shopping Cart')
  })

  test('renders product components for each product', () => {
    const wrapper = shallowMount(ShoppingCart)

    const productComponents = wrapper.findAllComponents({ name: 'Product' })
    expect(productComponents.length).toBe(0)
  })
})
