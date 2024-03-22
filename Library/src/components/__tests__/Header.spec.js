import HeaderApp from '../HeaderApp.vue'
import { shallowMount } from '@vue/test-utils'

import { setActivePinia, createPinia } from 'pinia'

describe('HeaderApp.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('renders inner text', () => {
    const wrapper = shallowMount(HeaderApp)

    expect(wrapper.text()).toContain('Library App')
  })

  test('contains "About" and "Login/Register" links', () => {
    const wrapper = shallowMount(HeaderApp)

    const links = wrapper.findAll('a')

    expect(links.length).toBe(3)
    expect(links.at(0).text()).toBe('Library App')
    expect(links.at(1).text()).toBe('About')
    expect(links.at(2).text()).toBe('Login/Register')
  })

  test('has correct accessibility attributes for "Login/Register" link', () => {
    const wrapper = shallowMount(HeaderApp)
    const loginRegisterLink = wrapper.find('a[aria-label="Login or Register"]')
    expect(loginRegisterLink.exists()).toBe(true)
  })
})
