export type Shadow = 'always' | 'never' | 'hover';

/**
 * 参数属性
 */
export type CardProps = {
  /**
   * 标题
   */
  title?: string;
  /**
   * 头像
   */
  avatar?: string;
  /**
   * 描述
   */
  description?: string;
  /**
   * 阴影时机
   */
  shadow?: Shadow;
};

/**
 * 插槽名称
 */
export type SlotsType = {
  /**
   * 标题插槽
   */
  title: () => any;
  /**
   * 扩展插槽
   */
  extra: () => any;
  /**
   * 内容插槽
   */
  body: () => any;
  /**
   * footer插槽
   */
  footer: () => any;
  /**
   * 头像插槽
   */
  avatar: () => any;
};
