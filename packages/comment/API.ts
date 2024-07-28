import type { VNode } from 'vue';
import type { EmojiData } from '../editor/type';

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
  /**
   * 当前评论
   */
  item: T;
  /**
   * 是否为回复的评论
   */
  isSubReply?: boolean;
  /**
   * 一级评论
   */
  level1?: T;
  /**
   * 回复引用
   */
  reply?: T;
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
export type CommentDataRowExTra<T = any> = {
  [P in keyof T]: T[P] extends infer T ? T : any;
};
/**
 * 一级评论明细
 */
export type CommentDataRow<T = any> = CommentDataRowExTra<T> & {
  /**
   * 评论内容
   */
  content?: string;
  /**
   * 创建时间
   */
  createDate?: string | Date;
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
   * 更新时间
   */
  updateDate?: string;
  /**
   * 当前评论的用户信息
   */
  userInfo?: ICommentUserInfo;
  /**
   * 二级评下的评论
   */
  children?: CommentDataRow<T>[];
  /**
   * 二级评论
   */
  subComment?: ICommentData;
  /**
   * 二级评：父级ID 也就是第一级的评论ID
   */
  parentId?: number;
  /**
   * 二级评：当前被回复的ID
   */
  replyId?: number | null;
  /**
   * IP属地
   */
  ipAddress?: string;
  /**
   * 被回复的二级评论的数据结构
   */
  reply?: CommentDataRow<T>;
  /**
   * 是否点赞
   */
  like?: number | boolean;
  /**
   * 等级，默认最高级 6
   */
  level?: number;
};

/**
 * 评论基础
 */
export interface ICommentData<T = any> {
  /**
   * 数据总数
   */
  total?: number;
  /**
   * 是否还有更多
   */
  hasMore?: boolean;
  /**
   * 数据列表
   */
  list: CommentDataRow<T>[];
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
   * 是否点赞
   * @default like
   */
  like?: GetTypeFrom<T>;
  /**
   * 更新时间
   * @default updateDate
   */
  updateDate?: GetTypeFrom<T>;
  /**
   * 当前评论的用户名，支持链式，如{a:{b:1}} a.b => 1
   * @default userInfo.username
   */
  username?: GetTypeFrom<T>;
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
   * ip地址
   */
  ipAddress?: GetTypeFrom<T>;
  /**
   * 二级评：当前被回复的评论ID
   * @default replyId
   */
  replyId?: GetTypeFrom<T>;
  /**
   * 回复的二级评论，只有dataLevel=2时才会生效
   * @default reply
   */
  reply?: GetTypeFrom<T>;
  /**
   * 等级
   */
  level?: GetTypeFrom<T>;
  [k: string]: any;
}

/**
 * 评论配置
 */
export type ICommentConfig<T = any> = {
  /**
   * 是否显示等级
   * 支持自定义返回
   * @default false
   */
  showLevel?: boolean | CommentItemRender<T>;
  /**
   * 数据的层级结构
   * 如果是二级的数据结构，需包含reply字段，此字段也可以通过`ICommentFields`配置
   * @default 2
   */
  dataLevel?: number;
  /**
   * 显示地址
   * 支持自定义返回
   * @default false
   */
  showIpAddress?: boolean | CommentItemRender<T>;
  /**
   * 更多操作
   * @default false
   */
  moreOperations?: boolean | CommentItemRender<T>;
  /**
   * 表情包
   * @default false
   */
  emojis?: boolean | EmojiData[] | (() => EmojiData[]);
  /**
   * 使用表情
   */
  useEmojis?: boolean;
  /**
   * 渲染操作
   * 支持自定义
   * @default true
   */
  actions?: boolean | CommentItemRender<T>;
  /**
   * 文本显示几行，超出显示...
   * @default 3
   */
  lines?: number;
  /**
   * 折叠按钮位置
   * @default left
   */
  foldBtnPosition?: 'left' | 'right';
} & ICommentFields<T>;

/**
 * 插槽
 */
export type ItemSlots = {
  avatar: CommentItemRender;
  right: CommentItemRender;
  left: CommentItemRender;
  level: CommentItemRender;
  actions: CommentItemRender;
  editor: CommentItemRender;
  content: CommentItemRender;
  default: any;
};

export interface IResolveParams {
  item: CommentDataRow;
  isSubReply: boolean;
  level1: CommentDataRow;
  reply: CommentDataRow;
  index: number;
  $index: number;
  /**
   * 是否点赞，点赞事件具备
   */
  isLike?: boolean | number;
  /**
   * 执行修改点赞状态
   * @param val
   */
  likeDone?: (val: boolean | number) => void;
  /**
   * 提交回复，执行回调是否清空及关闭输入框
   * @param val
   */
  clear?: (val: boolean) => void;
  /**
   * 回复事件内容
   */
  value?: string;
  /**
   * 回复新增
   * @param items
   */
  resolve?: (items: CommentDataRow | CommentDataRow[]) => void;
}

/**
 * 加载数据
 */
export type CommentLoad = Pick<
  IResolveParams,
  'resolve' | 'isSubReply' | 'item'
>;
/**
 * 加载数据
 */
export type CommentLoadFn = (load: CommentLoad) => void;
