import { describe, it, expect, vi, beforeEach } from 'vitest';
import ContactView from '../views/ContactView.vue';
import { shallowMount, mount } from "@vue/test-utils";

  
describe('About view tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly', () => {
    const wrapper = shallowMount(ContactView);
    expect(wrapper.exists()).toBe(true);
  });

  it('close alerts correctly', () => {
    const wrapper = shallowMount(ContactView);
    wrapper.vm.closeAlert();
    expect(wrapper.vm.show_alert).toBe(false);
    expect(wrapper.vm.show_alert_danger).toBe(false);
  });

  it('renders correctly contact info', () => {
    const wrapper = shallowMount(ContactView);

    const data = wrapper.vm.contact;

    const icons = wrapper.findAll('.card')
    icons.forEach((card, index) => {
      expect(card.find('.icon-contact').classes().join(' ')).contains(data[index].icon);
      expect(card.find('h5').text()).toBe(data[index].label);
    })
  })

  it.each([
    {show: true},
    {show: false}
  ]
  )('renders correctly alerts', async ({show}) => {
    const wrapper = mount(ContactView);

    wrapper.vm.show_alert = show;
    wrapper.vm.show_alert_danger = show;
    await wrapper.vm.$nextTick();

    const alertSuccess = wrapper.find('.alert-success');
    const alertDanger = wrapper.find('.alert-danger');

    expect(alertSuccess.exists()).toBe(show);
    expect(alertDanger.exists()).toBe(show);
  })

});
 