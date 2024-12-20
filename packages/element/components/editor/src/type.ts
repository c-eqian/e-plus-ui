export type EmojiData = {
  /**
   * 名称
   */
  name: string;
  /**
   * 地址
   */
  url: string;

  /**
   * 其他参数
   */
  [k: string]: any;
};
/**
 * 参数类型
 */
export type EditorProps = {
  /**
   * 占位符
   * @default 留下点什么吧...
   */
  placeholder?: string;
  /**
   * 表情包数据
   * @default []
   */
  emojis?: EmojiData[];
  /**
   * 是否使用表情
   * @default false
   */
  useEmojis?: boolean;
  /**
   * 自动聚焦
   * @default false
   */
  autoFocus?: boolean;
};
