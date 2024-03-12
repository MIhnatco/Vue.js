import RegisterForm from '../RegisterForm.vue'
import { shallowMount } from '@vue/test-utils'

describe('RegisterForm component', () => {
  test('contains name, email, password input fiels', () => {
    const wrapper = shallowMount(RegisterForm)

    const nameInput = wrapper.find('input[type="text"]')
    const emailInput = wrapper.find('input[type="email"]')
    const passwordInput = wrapper.find('input[type="password"]')

    expect(nameInput.exists()).toBe(true)
    expect(emailInput.exists()).toBe(true)
    expect(passwordInput.exists()).toBe(true)
  })

  test('has correct accessibility attributes for input fields', () => {
    const wrapper = shallowMount(RegisterForm)

    const nameInput = wrapper.find('input[type="text"]')
    const emailInput = wrapper.find('input[type="email"]')
    const passwordInput = wrapper.find('input[type="password"]')

    expect(nameInput.attributes('aria-label')).toBe('name')
    expect(emailInput.attributes('aria-label')).toBe('email')
    expect(passwordInput.attributes('aria-label')).toBe('password')
  })

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
