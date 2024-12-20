import type {
  MenuItemProps as ElMenuItemProps,
  MenuProps as ElMenuProps,
  SubMenuProps as ElSubMenuProps
} from 'element-plus';
import type { VNode } from 'vue';

/**
 * menu-item类型
 */
export type MenuItemProps = {
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
} & Partial<ElMenuItemProps>;

/**
 * menu 类型定义
 */
export type MenuProps = {
  /**
   * 最大子菜单数，默认 3级
   */
  level?: number;
  /**
   * 菜单项
   */
  items: MenuItemProps[];
} & Partial<ElMenuProps>;
