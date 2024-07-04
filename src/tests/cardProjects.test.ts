import { describe, it, expect } from 'vitest';
import CardProjects from '../components/CardProjects.vue';
import { shallowMount } from "@vue/test-utils";

describe('Test for card project', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(CardProjects);
    expect(wrapper.exists()).toBe(true);
  });

  // Agrega más pruebas específicas aquí
});
