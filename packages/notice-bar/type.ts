import type { CSSProperties } from 'vue';

export interface NoticeBarProps {
  /**
   * 是否显示通知图标
   * @default true
   */
  icon?: boolean;
  /**
   * 是否可关闭
   * @default false
   */
  closeable?: boolean;
  /**
   * 数据列表
   * list 与 text必须传入一个，如果是list则以垂直方式滚动
   */
  list?: string[];
  /**
   * 单行文本
   * list 与 text必须传入一个，如果是text则以水平方式滚动
   */
  text?: string;
  /**
   * 滚动区域宽度,如果传入数字，默认转成px单位
   */
  width?: number | string;
  /**
   * 滚动区域高度,如果传入数字，默认转成px单位
   */
  height?: number | string;
  /**
   * 自定义样式
   */
  customStyle?: CSSProperties;
  /**
   * 滚动速度 单位ms
   * @default 3000
   */
  speed?: number;
  /**
   * 水平滚动动画每次执行时移动距离
   * @default 100
   */
  step?: number;
}

/**
 * 插槽
 */
export type NoticeBarSlots = {
  /**
   * 左侧图标
   */
  'left-icon'?: any;
  /**
   * 右侧图标
   */
  'right-icon'?: any;
}
