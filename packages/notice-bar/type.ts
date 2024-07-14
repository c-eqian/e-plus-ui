export interface NoticeBarProps {
  /**
   * 数据
   * @default []
   */
  list: string[];
  /**
   * 大小
   * @default 14
   */
  fontSize?: number | string;
  /**
   * 是否垂直滚动
   * @default false
   */
  vertical?: boolean;
  /**
   * 通知栏高度
   * @default 40
   */
  height?: number | string;
  /**
   * 动画延迟时间,单位ms
   * @default 1000
   */
  delay?: number;
  /**
   * 滚动速率
   * @default 100
   */
  speed?: number;
  /**
   * 后缀图标
   */
  suffixIcon?: string;
  /**
   * 前缀图标
   */
  prefixIcon?: string;
  /**
   * 通知文本颜色
   */
  color?: string;
  /**
   * 通知背景色
   */
  background?: string;
}
