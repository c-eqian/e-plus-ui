import { isFunction, isString, isBoolean } from '@eqian/utils-vue';
import { ElMenuItem, ElMenuItemGroup, ElSubMenu } from 'element-plus';
import { defineComponent, h, isVNode, PropType } from 'vue';

import {
  useFilterMenuItemProps,
  useFilterSubMenuProps,
} from '../hooks/useMenuProps';
import { MenuItemProps } from '../type';
import Icon from './Icon.vue';

export default defineComponent({
  name: 'EpMenuItem',
  props: {
    items: {
      type: Object as PropType<MenuItemProps>,
      default: () => ({}),
    },
  },
  setup() {},
  render() {
    const { items } = this.$props;
    const isVisible = (item: MenuItemProps) => {
      const { visible } = item;
      return isBoolean(visible) ? visible : !visible;
    };
    /**
     * 有叶子
     * @param item
     */
    const isSubMenu = (item: MenuItemProps) => {
      const { children } = item;
      return children && children.length > 0;
    };
    const isGroup = (item: MenuItemProps) => {
      const { group } = item;
      return !!group;
    };
    const renderIcon = (item: MenuItemProps) => {
      if (isFunction(item.icon)) return item.icon();
      if (isString(item.icon) || isVNode(item.icon)) {
        return <Icon icon={item.icon}></Icon>;
      }
      return null;
    };
    const renderComponent = (
      _item: MenuItemProps,
      renderCom: any,
      props: any,
      children: any = null
    ) => {
      return h(
        renderCom,
        { key: _item.path || _item.title, ...props },
        _item.slots && isFunction(_item.slots)
          ? _item.slots()
          : {
              ...children,
            }
      );
    };
    const getProps = (item: MenuItemProps, _props: any) => {
      if (!item.path) return _props;
      return {
        ..._props,
        index: item.path,
      };
    };
    const renderGroup = (_items?: MenuItemProps[]) => {
      return _items?.map((item) => {
        return renderComponent(
          item,
          ElMenuItem,
          getProps(item, useFilterMenuItemProps(item).value),
          {
            default: () => [renderIcon(item), item.title],
          }
        );
      });
    };
    const renderMenuItem = (item: MenuItemProps) => {
      if (isSubMenu(item) && isVisible(item)) {
        return renderComponent(
          item,
          isGroup(item) ? ElMenuItemGroup : ElSubMenu,
          getProps(item, useFilterSubMenuProps(item).value),
          isSubMenu(item)
            ? {
                title: () => [renderIcon(item), item.title],
                default: () =>
                  isGroup(item)
                    ? renderGroup(item.children)
                    : item.children?.map((_item) => renderMenuItem(_item)),
              }
            : renderComponent(
                item,
                ElMenuItem,
                getProps(item, useFilterMenuItemProps(item).value),
                {
                  default: () => [renderIcon(item), item.title],
                }
              )
        );
      } else if (isVisible(item)) {
        return renderComponent(
          item,
          ElMenuItem,
          getProps(item, useFilterMenuItemProps(item).value),
          {
            default: () => [renderIcon(item), item.title],
          }
        );
      }
      return null;
    };
    return renderMenuItem(items);
  },
});
