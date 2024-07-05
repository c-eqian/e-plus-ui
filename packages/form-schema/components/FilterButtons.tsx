import { defineComponent, h } from 'vue';
import { ElButton } from 'element-plus';
export default defineComponent({
  name: 'FilterButtons',
  emits: ['search', 'reset'],
  setup(props, { emit }) {
    return () => {
      return h('div', null, [
        h(
          ElButton,
          {
            icon: 'Search',
            type: 'primary',
            onClick: () => {
              emit('search');
            },
          },
          () => '搜索'
        ),
        h(
          ElButton,
          {
            icon: 'Refresh',
            onClick(evt) {
              emit('reset');
            },
          },
          () => '重置'
        ),
      ]);
    };
  },
});
