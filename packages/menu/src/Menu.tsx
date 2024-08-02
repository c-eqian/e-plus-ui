import { isEmpty } from '@eqian/utils-vue';
import { ElMenu } from 'element-plus';
import {
  computed,
  defineComponent,
  getCurrentInstance,
  ref,
  watchEffect,
} from 'vue';

import { useFilterMenuProps } from '../hooks/useMenuProps';
import { type } from '../type';
import MenuItem from './MenuItem';
export default defineComponent({
  name: 'EpMenu',
  props: type,
  setup(props) {
    const items = computed(() => props.menuConfig.items);
    const currentActive = ref(props.menuConfig.defaultActive);
    const instance = getCurrentInstance()!;
    const route = instance.appContext.config.globalProperties.$route;
    watchEffect(() => {
      if (route && 'path' in route) {
        currentActive.value = route.path;
      }
    });
    const renderMenuItem = () => {
      return items.value.map((item) => {
        return <MenuItem items={item} />;
      });
    };
    const getMenuSlots = () => {
      if (isEmpty(items)) return null;
      return {
        default: () => renderMenuItem(),
      };
    };
    return () => (
      <ElMenu
        style={{ 'max-width': '100%' }}
        {...useFilterMenuProps(props.menuConfig).value}
        defaultActive={currentActive.value}
        v-slots={getMenuSlots()}
      ></ElMenu>
    );
  },
});
