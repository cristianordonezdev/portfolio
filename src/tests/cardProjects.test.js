import { describe, it, expect } from 'vitest';
import CardProjects from '../components/CardProjects.vue';
import { shallowMount } from "@vue/test-utils";


const factory = (data) => {
  return shallowMount(CardProjects, {
    props: {
      data: data
    }
  });
};

describe('Test for card project', () => {
  const general_data = {name: 'Project Name',is_in_progress: true, images: ['image1.jpg', 'image2.jpg'],slug: 'project-slug'};
  
  // Agrega más pruebas específicas aquí
  it.each([
    {name: 'Project Name',is_in_progress: true, images: ['image1.jpg', 'image2.jpg'],slug: 'project-slug'},
    {name: 'Project Name',is_in_progress: false, images: ['image1.jpg', 'image2.jpg'],slug: 'project-slug'},
  ])('renders correctly', (data) => {
    const wrapper = factory(data);

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.container-coming-redirect').exists()).toBe(data.is_in_progress)
    expect(wrapper.find('.container-title-redirect h5').text()).toBe(data.name);
  });

  it('should start image transition on mouse hover', async () => {
    const wrapper = factory(general_data);
    await wrapper.trigger('mouseover');

    expect(wrapper.vm.show_animation).toBe(true);
    expect(wrapper.vm.main_interval).not.toBe(null);
  });

  it('should start image transition on mouse out', async () => {
    const wrapper = factory(general_data);

    await wrapper.trigger('mouseleave');

    expect(wrapper.vm.show_animation).toBe(false);
    expect(wrapper.vm.first_time_transition).toBe(false);
    expect(wrapper.vm.main_interval).toBe(null);

  });

  it('updates current_image when index_image changes', async () => {
    const wrapper = factory(general_data);
    expect(wrapper.vm.current_image).toBe(general_data.images[0]);
    wrapper.vm.index_image = 1;
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.current_image).toBe(general_data.images[1]);
  });

});
