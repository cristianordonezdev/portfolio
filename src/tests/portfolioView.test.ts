import { describe, it, expect } from 'vitest';
import PortfolioView from '../views/PortfolioView.vue';
import { shallowMount, mount } from "@vue/test-utils";

  
describe('About view tests', () => {

  it('renders correctly', () => {
    const wrapper = shallowMount(PortfolioView);
    expect(wrapper.exists()).toBe(true);
  });

  it('shows correctly components', () => {
    const wrapper = mount(PortfolioView);
    const cards_projects = wrapper.findAllComponents('.card-projects');
    const data_projects = wrapper.vm.profesional_projects;

    expect(cards_projects.length).toBe(data_projects.length);
  })
});
 