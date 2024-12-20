import { isEmpty } from '@eqian/utils-vue';
import { ElMenu } from 'element-plus';
import { computed, defineComponent, getCurrentInstance, type PropType } from 'vue';
import { useFilterMenuProps } from './hooks/useMenuProps';

import MenuItem from './MenuItem';
import type { MenuItemProps, MenuProps } from './type';
export default defineComponent({
  name: 'EpMenu',
  props: {
    menuConfig: {
      type: Object as PropType<MenuProps>,
      default: () => ({}) as any
    }
  },
  setup(props) {
    const items = computed(() => props.menuConfig?.items || ([] as MenuItemProps[]));
    // const currentActive = ref(props.menuConfig.defaultActive);
    const instance = getCurrentInstance()!;
    const route = instance.appContext.config.globalProperties.$route;
    const currentActive: any = computed(() => {
      if (route) {
        const { meta, path } = route;
        if (meta.activeMenu) {
          return meta.activeMenu;
        }
        return path;
      } else {
        return props.menuConfig?.defaultActive;
      }
    });
    const renderMenuItem = () => {
      return items.value.map(item => {
        return <MenuItem items={item} />;
      });
    };
    const getMenuSlots = () => {
      if (isEmpty(items)) return null;
      return {
        default: () => renderMenuItem()
      };
    };
    return () => (
      <ElMenu
        style={{ 'max-width': '100%' }}
        {...useFilterMenuProps(props.menuConfig as MenuProps).value}
        defaultActive={currentActive.value}
        v-slots={getMenuSlots()}
      ></ElMenu>
    );
  }
});
