import ProductsList from '@/components/ProductsList.vue'
import { shallowMount } from '@vue/test-utils'

describe('ProductsList.vue', () => {
  test('renders inner heading', () => {
    const wrapper = shallowMount(ProductsList)

    expect(wrapper.text()).toContain('Products List')
  })

  test('renders product components for each product', () => {
    const wrapper = shallowMount(ProductsList)

    const productComponents = wrapper.findAllComponents({ name: 'Product' })
    expect(productComponents.length).toBe(6)
  })
})
