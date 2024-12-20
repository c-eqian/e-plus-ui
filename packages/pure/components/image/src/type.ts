/**
 * 参数类型
 */
export type ImageProps = {
  /**
   * url
   */
  url: string;
  /**
   * 宽度
   * @default 100%
   */
  width?: number | string;
  /**
   * 高度
   * @default 100%
   */
  height?: number | string;
  /**
   * 是否移入缩放
   * @default false
   */
  scale?: boolean;
  /**
   * 圆
   * @default false
   */
  round?: boolean;
  /**
   * 圆角
   * @default -
   */
  borderRadius?: number | string;
  /**
   * 是否显示加载骨架
   * @default true
   */
  loading?: boolean;
};
