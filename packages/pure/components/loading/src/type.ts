import type { MaybeRef } from 'vue';
/**
 * 参数类型
 */
export type LoadingProps = {
  /**
   * 是否全屏
   * @default false
   */
  fullscreen?: boolean;
  /**
   * 加载文本
   * @default 加载中
   */
  text?: string;
  /**
   * 图标类型
   * @default dot
   */
  type?: 'dot' | 'circle';

  /**
   * 大小
   * @default default
   */
  size?: 'small' | 'default' | 'large';
  /**
   * 层级 默认根据element-plus自动管理，自定义时则优先使用该值
   */
  zIndex?: number;
  /**
   * 蒙层颜色
   * @default #ffffff
   */
  maskBackgroundColor?: MaybeRef<string>;
  /**
   * 文字颜色
   * @default  #1890ff
   */
  textColor?: MaybeRef<string>;
  /**
   * 图标颜色
   * @default  #1890ff
   */
  iconColor?: MaybeRef<string>;
};

export type UseLoadingProps = {
  /**
   * 目标容器
   * @default body
   */
  target?: string | HTMLElement;
} & LoadingProps;

export type LoadingExpose = {
  setVisible?: (v: boolean) => void;
};
