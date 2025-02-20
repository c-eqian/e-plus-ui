import type { InputProps } from 'element-plus';
import type { Component, VNode } from 'vue';
type IconSelectBaseProps = Partial<Omit<InputProps, 'modelValue'>>;
export type IconComponentType = {
  /**
   * 图标
   */
  icon: Component | VNode | string;
  /**
   * 图标名称
   */
  name: string;
};
export type IconData = string | IconComponentType;
/**
 * 参数类型
 */
export type SelectIconProps = {
  /**
   * ElInput 组件参数
   */
  componentProps?: IconSelectBaseProps;
  /**
   * popover组件宽度
   * @default 500px
   */
  popoverWidth?: number | string;
  /**
   * 是否使用搜索
   * @default true
   */
  searchable?: boolean;
  /**
   * 是否显示总数
   * @default true
   */
  showTotal?: boolean;
  /**
   * 是否使用懒加载图标
   * @default true
   */
  lazyLoadable?: boolean;
  /**
   * 当使用懒加载时，需要的初始值
   * @default 100
   */
  lazyLoadValue?: number;
  /**
   * 图标数据
   */
  icons?: IconData[];
};
