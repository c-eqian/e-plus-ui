/**
 * 参数类型
 */
export type IconProps = {
  /**
   * 前缀
   * @default icon
   */
  prefix?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 颜色
   * @default currentColor
   */
  color?: string;
  /**
   * 宽 如果是不带单位，默认单位为px
   * @default 1rem
   */
  width?: string | number;
  /**
   * 高 如果是不带单位，默认单位为px
   * @default 1rem
   */
  height?: string | number;
};
