import LoginForm from '../LoginForm.vue'
import {  shallowMount } from '@vue/test-utils'

import { setActivePinia, createPinia } from 'pinia'

describe('LoginForm component', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('contains email and password input fields', () => {
    const wrapper = shallowMount(LoginForm)

    const emailInput = wrapper.find('[type="email"]')
    const passwordInput = wrapper.find('[type="password"]')

    expect(emailInput.exists()).toBe(true)
    expect(passwordInput.exists()).toBe(true)
  })

  test('has correct accessibility attributes for input fiels', () => {
    const wrapper = shallowMount(LoginForm)
    const emailInput = wrapper.find('[type="email"]')
    const passwordInput = wrapper.find('[type="password"]')

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

  test('submits the form with valid inputs', async () => {
    const wrapper = shallowMount(LoginForm)

    await wrapper.setData({
      email: 'test@example.com',
      password: 'password123'
    })

    await wrapper.find('form').trigger('submit')
    expect(wrapper.vm.login).toHaveBeenCalled()
  })
})
