import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import { h } from 'vue';
import { EpLine } from '..';
describe('Line.vue', () => {
  test('renders the correct style for error', () => {
    const wrapper = mount(EpLine, {
      props: {
        position: 'right'
      },
      slots: {
        default: () => h('div', '测试')
      }
    });
    expect(wrapper.find('.ep-line-text__right').exists()).equals(true);
  });
});
