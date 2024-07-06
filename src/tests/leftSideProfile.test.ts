import { describe, it, expect, vi } from 'vitest';
import LeftSideProfile from '../components/LeftSideProfile.vue';
import { shallowMount } from "@vue/test-utils";

describe('left side profile component tests', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(LeftSideProfile);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('h1').text()).toBe('Cristian Ordoñez');
    expect(wrapper.find('.main-dedicate').text()).toBe('Full-Stack Developer');
    expect(wrapper.find('img.profile').attributes('alt')).toBe('cristian ordoñez');

  });

  it('calls window.open with  the correct URL and target', () => {
    const wrapper = shallowMount(LeftSideProfile);

    const window_opem_spy = vi.spyOn(window, 'open').mockImplementation(() => {});

    wrapper.vm.openCV()

    expect(window_opem_spy).toHaveBeenCalledWith('https://drive.google.com/drive/folders/1GNSo15QDaBpClCRMtk8PAwECZKgIeFXv?usp=drive_link', '_blank')

    window_opem_spy.mockRestore();
  })

  it('displays the current year in the footer', () => {
    const wrapper = shallowMount(LeftSideProfile);

    const currentYear = new Date().getFullYear();
    expect(wrapper.find('small').text()).toContain(currentYear.toString());
  });
});
