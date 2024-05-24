export interface IEnumItem {
  /**
   * 选择框显示的标签
   */
  label: string;
  /**
   * 标签对应的值
   */
  value: string | number | boolean;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  tagType?: 'primary' | 'success' | 'info' | 'warning' | 'danger';
  [k: string]: any;
}
export interface IColumnsExtra {
  /**
   * 显示隐藏状态
   */
  visible?: boolean;
  /**
   * 额外设置列宽，优先级高于column['width']
   * 暂时用不上！！！
   */
  width?: number | string;
  // 主要是组件库的相关参数
  [k: string]: any;
}
