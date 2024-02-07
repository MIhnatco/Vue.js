import ProductsList from '@/components/ProductsList.vue'
import { shallowMount } from '@vue/test-utils'


describe('ProductsList.vue', () => {
  test('renders inner heading', () => {
    const wrapper = shallowMount(ProductsList)

    expect(wrapper.text()).toContain('Products List')
  })

  
})
