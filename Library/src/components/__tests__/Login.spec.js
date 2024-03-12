import LoginForm from '../LoginForm.vue'
import { shallowMount } from '@vue/test-utils'

describe('LoginForm component', () => {
  test('contains email and password input fields', () => {
    const wrapper = shallowMount(LoginForm)

    const emailInput = wrapper.find('input[type="email"]')
    const passwordInput = wrapper.find('input[type="password"]')

    expect(emailInput.exists()).toBe(true)
    expect(passwordInput.exists()).toBe(true)
  })

  test('has correct accessibility attributes for input fiels', () => {
    const wrapper = shallowMount(LoginForm)
    const emailInput = wrapper.find('input[type="email"]')
    const passwordInput = wrapper.find('input[type="password"]')

    expect(emailInput.attributes('aria-label')).toBe('email')
    expect(passwordInput.attributes('aria-label')).toBe('password')
  })

  test('submit button displays correct text', () => {
    const wrapper = shallowMount(LoginForm)

    const btn = wrapper.find('button[type="submit"]')
    expect(btn.text()).toBe('Submit')
  })

  test('has correct accessibility attribute for "submit"', () => {
    const wrapper = shallowMount(LoginForm)

    const btnSubmit = wrapper.find('button[aria-label="submit"]')
    expect(btnSubmit.exists()).toBe(true)
  })
})
