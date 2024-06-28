export type Shadow = 'always' | 'never' | 'hover';
export interface CardProps {
  /**
   * 标题
   */
  title?: string;
  /**
   * 阴影时机
   */
  shadow?: Shadow;
}
