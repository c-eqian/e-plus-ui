import type { CSSProperties } from 'vue';

export type ContextMenuItem = {
  /**
   * 标签名称
   */
  label: string;
  /**
   * 图标
   */
  icon?: string;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 点击事件
   */
  onClick?: (e: MouseEvent) => void;
  /**
   * 子菜单
   */
  children?: ContextMenuOptions;
};
export type ContextMenuOptions = (ContextMenuItem[] | ContextMenuItem)[];
/**
 * 参数类型
 */
export type ContextMenuProps = {
  /**
   * 右键菜单配置
   */
  contextMenus: ContextMenuOptions;
  /**
   * 样式层级 `z-index`
   * @default 2000
   */
  zIndex?: number;
  /**
   * 分割样式
   */
  separatorStyle?: CSSProperties;
  /**
   * 菜单宽度 如果设置为`auto`，在边界情况下不是很理想时，可以指定宽度
   * @default auto
   */
  menuWidth?: string | number | 'auto';
  /**
   * 菜单类名
   */
  menuClass?: string;
};
