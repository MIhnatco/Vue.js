import AuthApp from '../AuthApp.vue'
import { shallowMount } from '@vue/test-utils'

describe('AuthApp component', () => {
  test('modal is initially hidden', () => {
    const wrapper = shallowMount(AuthApp)

    const modal = wrapper.find('#modal')

    expect(modal.isVisible()).toBe(false)
  })

  test('renders text correctly', () => {
    const wrapper = shallowMount(AuthApp)

    expect(wrapper.text()).toContain('Your Account')
  })

  test('contains "Login" and "Register" links', () => {
    const wrapper = shallowMount(AuthApp)

    const links = wrapper.findAll('a')

    expect(links.length).toBe(2)
    expect(links.at(0).text()).toBe('Login')
    expect(links.at(1).text()).toBe('Register')
  })
})
