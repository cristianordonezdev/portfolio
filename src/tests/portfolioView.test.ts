import { describe, it, expect } from 'vitest';
import PortfolioView from '../views/PortfolioView.vue';
import { shallowMount, mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from 'vue-router';

const routes = [{ path: '/portfolio/:slug_project', component: PortfolioView }];
const router = createRouter({
  history: createWebHistory(),
  routes,
});


describe('About view tests', () => {

  it('renders correctly', async () => {
    router.push('/portfolio');
    await router.isReady();

    const wrapper = shallowMount(PortfolioView, {
      global: {
        plugins: [router]
      }
    });
    expect(wrapper.exists()).toBeTruthy();
  });
  it('shows correctly components', async () => {
    router.push('/portfolio');
    await router.isReady();

    const wrapper = shallowMount(PortfolioView, {
      global: {
        plugins: [router]
      }
    });

    const cards_projects = wrapper.findAllComponents('.card-projects');
    // const data_projects = wrapper.vm.profesional_projects;

    // expect(cards_projects.length).toBe(data_projects.length);
  })
});
