/**
 * 参数类型
 */
export type PaginationProps = {
  /**
   * 分页大小
   */
  size?: 'large' | 'default' | 'small';
  /**
   * 数量总数
   */
  total: number;
  /**
   * 当前分页
   */
  page?: number;
  /**
   * 每页大小
   */
  limit?: number;
  /**
   * 设置页码大小数
   */
  pageSizes?: number[];
  /**
   * 显示数量
   */
  pagerCount?: number;
  /**
   * 组件布局，子组件名用逗号分隔
   */
  layout?: string;
  /**
   * 是否为分页按钮添加背景色
   */
  background?: boolean;
  /**
   * 是否隐藏
   */
  hidden?: boolean;
};
