import { describe, it, expect } from 'vitest';
import LeftSideProfile from '../components/LeftSideProfile.vue';
import { shallowMount } from "@vue/test-utils";

describe('left side profile component tests', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(LeftSideProfile);
    expect(wrapper.exists()).toBe(true);
  });

  // Agrega más pruebas específicas aquí
});
