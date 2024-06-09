/**
 * 文本位置
 */
export type ILineTextPos = 'left' | 'right' | 'center';
export interface ILineProps {
  /**
   * 分割线方向
   * @default horizontal
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * 文本位置
   * @default left
   */
  position?: ILineTextPos;
  /**
   * 边框宽度
   * @default 1px
   */
  borderWidth?: string;
  /**
   * 边框样式
   * @default solid
   */
  borderType?: string;
  /**
   * 偏移量
   * @default 25
   */
  offset?: string;
  /**
   * 边框颜色
   */
  color?: string;
  /**
   * 边距
   * @default 8
   */
  margin?: string;
}
