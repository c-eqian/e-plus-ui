export type TabsBarItem = {
  /**
   * 路由路径
   */
  path: string;
  /**
   * 菜单名称
   */
  name: string;
  [key: string]: any;
};
/**
 * 参数类型
 */
export type TabsBarProps = {
  /**
   * tabs数据列表
   */
  tabs: TabsBarItem[];
  /**
   * 当出现滚动时是否需要左右两边按钮
   * @default true
   */
  showScrollButton?: boolean;
  /**
   * 最大tab宽度
   * @default 150px
   */
  maxTabWidth?: number | string;
  /**
   * 是否可关闭
   * @default false
   */
  closeable?: boolean;
  /**
   * 当前绑定值
   */
  modelValue?: string;
};
