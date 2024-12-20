/**
 * 参数类型
 */
export interface ICopyTextProps {
  /**
   * 实际拷贝值，不传默认拷贝 slot 的文字
   */
  text?: string;
  /**
   * flex布局方式
   */
  type?: 'flex';
  /**
   * flex 布局
   * @default start
   */
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
  /**
   * flex 布局
   * @default top
   */
  align?: 'top' | 'middle' | 'bottom';
}
