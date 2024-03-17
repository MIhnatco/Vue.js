import RegisterForm from '../RegisterForm.vue'
import { shallowMount } from '@vue/test-utils'

describe('RegisterForm component', () => {
  test('submit button displays correct text', () => {
    const wrapper = shallowMount(RegisterForm)

    const btn = wrapper.find('button[type="submit"]')
    expect(btn.text()).toBe('Submit')
  })

  test('has correct accessibility attribute for "submit"', () => {
    const wrapper = shallowMount(RegisterForm)

    const btnSubmit = wrapper.find('button[aria-label="submit"]')
    expect(btnSubmit.exists()).toBe(true)
  })
})
