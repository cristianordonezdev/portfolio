import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import HomeView from '../views/HomeView.vue'

describe('HomeView.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(HomeView)
  })

  it('renders without errors', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('contains the main structure', () => {
    expect(wrapper.find('.main-container-home').exists()).toBeTruthy()
    expect(wrapper.find('.main-title').exists()).toBeTruthy()
    expect(wrapper.find('.main-dedicate').exists()).toBeTruthy()
  })

  it('displays correct texts', () => {
    expect(wrapper.find('.main-title').text()).toBe('Cristian Ordoñez')
    expect(wrapper.find('.main-dedicate').text()).toBe('Full-Stack Developer')
  })
})
