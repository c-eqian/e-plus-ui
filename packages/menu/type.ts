import type {
  MenuItemProps as ElMenuItemProps,
  MenuProps as ElMenuProps,
  SubMenuProps as ElSubMenuProps,
} from 'element-plus';
import type { PropType, VNode } from 'vue';

/**
 * menu-item类型
 */
export interface MenuItemProps extends Partial<ElMenuItemProps> {
  /**
   * 子菜单属性
   */
  children?: MenuItemProps[];
  /**
   * 重写index路由路径,开启router时需要该属性
   */
  path?: string;
  /**
   * 子菜单属性
   */
  subMenu?: ElSubMenuProps;
  /**
   * 是否可见
   */
  visible?: boolean;
  /**
   * 名称
   */
  title?: string;
  /**
   * 分组
   * 如果配置group,子项请勿配置children
   */
  group?: boolean;
  /**
   * 图标
   */
  icon?: string | (() => VNode);
  /**
   * 菜单插槽
   */
  slots?: () => Record<string, VNode<any, any, any> | VNode<any, any, any>[]>;
}

/**
 * menu 类型定义
 */
export interface IMenuProps extends Partial<ElMenuProps> {
  /**
   * 最大子菜单数，默认 3级
   */
  level?: number;
  items: MenuItemProps[];
}

export const type = {
  menuConfig: {
    type: Object as PropType<IMenuProps>,
    default: () => ({}),
  },
};
