import type { IMenuProps } from '../menu';
import type { CSSProperties, Ref } from 'vue';
/**
 * 布局类型
 * TTB-上下布局（不包含侧边栏）
 * LTB-左侧边栏-上下布局
 * TLB-上下布局-左侧边栏
 */
export type LayoutType = 'TTB' | 'LTB' | 'TLB';
type LayoutName = 'header' | 'main' | 'footer' | 'aside';
export type LayoutNameCls = `${LayoutName}Class`;
export type LayoutNameStyle = `${LayoutName}Style`;
export type LayoutFn = () => LayoutType;
export interface ManagerBasic {
  /**
   * 布局方式
   * @default LTB
   */
  layout?: LayoutType | LayoutFn;
  /**
   * 主区域的内边距
   * @default 10px
   */
  mainPadding?: string | number;
  /**
   * 主区域切换动画
   * @default true
   */
  transition?: boolean;
  /**
   * 菜单栏
   */
  menus?: IMenuProps;
  /**
   * 相关类名
   */
  classNames?: {
    [P in LayoutNameCls]?: string;
  };
  /**
   * 相关样式
   */
  styles?: {
    [P in LayoutNameStyle]?: CSSProperties;
  };
}
export type ManagerLayout = {
  config?: Ref<ManagerBasic> | ManagerBasic;
};
