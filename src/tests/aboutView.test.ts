import { describe, it, expect, vi } from 'vitest';
import AboutView from '../views/AboutView.vue';
import { shallowMount, mount } from "@vue/test-utils";
  
describe('About view tests', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(AboutView);
    expect(wrapper.exists()).toBe(true);
  });

  it('It is correct my age', () => {
    const wrapper = shallowMount(AboutView);

    const today = new Date();
    const birthday = new Date('12/15/1998');
    let age = today.getFullYear() - birthday.getFullYear();
    const m = today.getMonth() - birthday.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
      age--;
    }
    expect(wrapper.vm.age()).toBe(age);
  })

  it('It is showing the property data', () => {
    const wrapper = shallowMount(AboutView);
    const data = wrapper.vm.list_data;

    const li_items = wrapper.findAll('li');
    expect(li_items.length).toBe(data.length);
    
    li_items.forEach((element, index) => {
      expect(element.text()).toBe(`${data[index].strong} ${data[index].value}`);
      console.log(element.text())
    });
  })
});
 