export type TextFoldProps = {
  /**
   * 超过几行显示折叠
   * @default 3
   */
  line?: number;
  /**
   * 是否显示展开/折叠
   * @default false
   */
  isFold?: boolean;
  /**
   * 折叠按钮显示位置
   * @default right
   */
  position?: 'left' | 'right';
};
