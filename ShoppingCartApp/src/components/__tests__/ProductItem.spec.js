import Product from '@/components/Product.vue'
import { shallowMount } from '@vue/test-utils'

describe('Product.vue', () => {
  test('renders product details correctly', () => {
    const product = {
      id: 'a1',
      name: 'Product A',
      price: 10,
      quantity: 5
    }

    const wrapper = shallowMount(Product, {
      propsData: {
        product
      }
    })

    expect(wrapper.text()).toContain(product.name)
    expect(wrapper.text()).toContain(product.price)
    expect(wrapper.text()).toContain(product.quantity)
    expect(wrapper.text()).toContain(product.id)
  })

  test('render product details correctly with different props', () => {
    const product = {
      id: 'a2',
      name: 'Product B',
      price: 15,
      quantity: 18
    }

    const wrapper = shallowMount(Product, {
      propsData: {
        product
      }
    })

    expect(wrapper.text()).toContain(product.name)
    expect(wrapper.text()).toContain(product.price)
    expect(wrapper.text()).toContain(product.quantity)
    expect(wrapper.text()).toContain(product.id)
  })
})
