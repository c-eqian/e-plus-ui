import { VNode } from 'vue';
import { EmojiData } from '../editor/type';

/**
 * 根据配置类型提取字段类型
 */
export type GetTypeFrom<T = any> = keyof T extends infer E
  ? E extends string
    ? E
    : string
  : string;
/**
 * 渲染器
 */
export type CommentItemRender<T = any> = (scoped: {
  item: T;
}) =>
  | VNode<any, any, any>
  | VNode<any, any, any>[]
  | null
  | string
  | number
  | undefined;
/**
 * 评论人信息
 */
export interface ICommentUserInfo {
  avatar?: string;
  userId?: number;
  username?: string;
}
/**
 * 一级评论明细
 */
export interface CommentDataRow {
  /**
   * 评论内容
   */
  content?: string;
  /**
   * 创建时间
   */
  createDate?: string;
  /**
   * 评论ID
   */
  commentId?: number;
  /**
   * 是否为当前账号的评论
   */
  publisher?: number | boolean;
  /**
   * 当前评论点赞数
   */
  likeCount?: number;
  /**
   * 自定义键，判断是否回复
   */
  isReply?: boolean;
  /**
   * 更新时间
   */
  updateDate?: string;
  /**
   * 当前评论的用户信息
   */
  userInfo?: ICommentUserInfo;
  /**
   * 二级评
   */
  children?: CommentDataRow[];
  subComment?: ICommentData;
  /**
   * 二级评：父级ID 也就是第一级的评论ID
   */
  parentId?: number;
  /**
   * 二级评：当前被回复的ID
   */
  replyId?: number | null;
}

/**
 * 评论基础
 */
export interface ICommentData {
  total: number;
  list: CommentDataRow[];
}

/**
 * 字段配置
 */
export interface ICommentFields<T = any> {
  /**
   * 评论内容
   * @default content
   */
  content?: GetTypeFrom<T>;
  /**
   * 创建时间
   * @default createDate
   */
  createDate?: GetTypeFrom<T>;
  /**
   * 评论ID
   * @default commentId
   */
  commentId?: GetTypeFrom<T>;
  /**
   * 是否为当前账号的评论
   * @default publisher
   */
  publisher?: GetTypeFrom<T>;
  /**
   * 当前评论点赞数
   * @default likeCount
   */
  likeCount?: GetTypeFrom<T>;
  /**
   * 更新时间
   * @default updateDate
   */
  updateDate?: GetTypeFrom<T>;
  /**
   * 当前评论的用户名，支持链式，如{a:{b:1}} a.b => 1
   * @default userInfo.username
   */
  username: GetTypeFrom<T>;
  /**
   * 用户头像地址
   * @default userInfo.avatar
   */
  avatar?: GetTypeFrom<T>;
  /** 用户id
   * @default userInfo.userId
   */
  userId?: GetTypeFrom<T>;
  /**
   * 二级评字段
   * 与 subComment的区别是，subComment的数据结构中的二级评论会有children
   * @default children
   */
  children?: GetTypeFrom<T>;
  /**
   * 二级评论数据字段
   * 与一级的一致
   * @default subComment
   */
  subComment?: GetTypeFrom<T>;
  /**
   * 二级评：父级ID 也就是第一级的评论ID
   * @default parentId
   */
  parentId?: GetTypeFrom<T>;
  /**
   * 二级评：当前被回复的评论ID
   * @default replyId
   */
  replyId?: GetTypeFrom<T>;
  [k: string]: any;
}

/**
 * 评论配置
 */
export interface ICommentConfig<T = any> extends ICommentFields<T> {
  /**
   * 是否显示等级
   * @default false
   */
  showLevel?: boolean;
  /**
   * 显示地址
   * @default false
   */
  showIpAddress?: boolean;
  /**
   * 格式化时间
   * 默认：xxx 前
   * @default true
   */
  formatTime?: boolean | CommentItemRender<T>;
  /**
   * 更多操作
   * @default false
   */
  moreOperations?: boolean | CommentItemRender<T>;
  /**
   * 渲染点赞
   * 支持自定义渲染
   * @default true
   */
  likeRender?: boolean | CommentItemRender<T>;
  /**
   * 渲染回复
   * 支持自定义渲染
   * @default true
   */
  replyRender?: boolean | CommentItemRender<T>;
  /**
   * 引用被回复的评论内容
   * 支持自定义渲染
   * @default true
   */
  replyReference?: boolean | CommentItemRender<T>;
  /**
   * 表情包
   * @default false
   */
  emojis: boolean | EmojiData[] | (() => EmojiData[]);
}
