import { describe, it, expect, vi, beforeEach } from 'vitest';
import CvView from '../views/CvView.vue';
import { shallowMount, mount } from "@vue/test-utils";

  
describe('About view tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly', () => {
    const wrapper = shallowMount(CvView);
    expect(wrapper.exists()).toBe(true);
  });

  it('shows correctly data', () => {
    const wrapper = shallowMount(CvView);
    const data_lines = wrapper.vm.lines;
    const habilities_data = wrapper.vm.habilities;
    const lines_container = wrapper.findAll('.lines-container');
    
    lines_container.forEach((element, index) => {
        const h3 = element.find('h3');
        expect(h3.text()).toBe(data_lines[index].name);

        const array_line = element.findAll('.time-line');
        array_line.forEach((element_line, index_array) => {
            expect(element_line.findAll('h5')[0].text()).toBe(data_lines[index].line[index_array].year);
            expect(element_line.findAll('.descripcion')[0].text()).toBe(data_lines[index].line[index_array].year_description);
            expect(element_line.findAll('h5')[1].text()).toBe(data_lines[index].line[index_array].title);
            expect(element_line.findAll('.descripcion')[1].text()).toBe(data_lines[index].line[index_array].title_description);
        })

        const habilities = wrapper.findAll('.habilities');
        habilities.forEach((element_habilities, index_habilities) => {
            expect(element_habilities.findAll('p')[0].text()).toBe(habilities_data[index_habilities].label);
            expect(element_habilities.findAll('p')[1].text()).toBe(`${habilities_data[index_habilities].number}%`);
            expect(element_habilities.find('.background-progress').attributes('style')).toBe(`width: ${habilities_data[index_habilities].number}%;`);
        })
    });
  })
});
 