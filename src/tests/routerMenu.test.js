import { describe, it, expect } from 'vitest';
import RouterMenu from '../components/RouterMenu.vue';
import { shallowMount, mount } from "@vue/test-utils";
import navigation_items from '../navigation/dashboard'; // Cambia esto por la ruta real de tu archivo de navegación
import { createRouter, createMemoryHistory } from 'vue-router';


const routes = navigation_items.map(item => ({
    path: `/${item.route_name}`,
    name: item.route_name,
  }));

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

  
describe('left side profile component tests', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(RouterMenu);
    expect(wrapper.exists()).toBe(true);
  });
  it('renders navigation items correctly', async () => {
    const wrapper = mount(RouterMenu, {
      global: {
        plugins: [router],
      },
    });

    await router.isReady();

    const links = wrapper.findAllComponents({ name: 'RouterLink' });
    expect(links.length).toBe(navigation_items.length);

    links.forEach((link, index) => {
      // Change of url
      
      if (link.props('to').name !== 'portfolio') expect(link.props('to')).toEqual({ name: navigation_items[index].route_name });
      else expect(link.props('to')).toEqual({ name: 'portfolio', params: { type: 'professional' } });
      const icon = link.find('i');
      expect(icon.exists()).toBe(true);
      expect(icon.classes()).toEqual(expect.arrayContaining(navigation_items[index].icon.split(' ')));
    });
  });

  it('applies active class based on the current route', async () => {
    router.push({ name: navigation_items[0].route_name });
    await router.isReady();

    const wrapper = mount(RouterMenu, {
      global: {
        plugins: [router],
      },
    });

    await router.isReady();

    const allIcons = wrapper.findAll('i');
    const activeIconFound = allIcons.some((icon) => icon.classes().includes('active'));
    expect(activeIconFound).toBe(false);
  });
});
