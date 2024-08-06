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
export type CommentItemRender<
  T = any,
  P = number | string | undefined
> = (scoped: {
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
}) => VNode<any, any, any> | VNode<any, any, any>[] | P;
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
  commentId?: number | string;
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
export type ICommentFields<T = any> = {
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
};

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
   * 表情包
   * @default false
   */
  emojis?: boolean | EmojiData[] | (() => EmojiData[]);
  /**
   * 使用表情
   */
  useEmojis?: boolean;
  /**
   * 扩展渲染操作
   * 支持自定义 默认内置，删除（delete）、投诉（complaint）
   * @default true
   */
  actionsExtra?: boolean | CommentItemRender<T>;
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
  /**
   * 数据属性
   * @default list
   */
  list?: string;
  /**
   * 是否还有更多
   * @default 'hasMore'
   */
  hasMore?: string;
  /**
   * 默认头像
   */
  defaultAvatar?: string;
  /**
   * 字段配置
   */
  commentFields?: ICommentFields<T>;
};

export interface IResolveParams<T = any> {
  /**
   * 当前评论项
   */
  item: T;
  /**
   * 是否是二级回复
   */
  isSubReply: boolean;
  /**
   * 所属一级评论
   */
  level1: T;
  /**
   * 回复
   */
  reply: T;
  /**
   * 当前项索引
   */
  index: number;
  /**
   * 父节点索引
   */
  $index: number;
  /**
   * 是否点赞，点赞事件具备
   * 仅点击点赞时存在
   */
  isLike?: boolean | number;
  /**
   * 执行修改点赞状态
   * 仅点击点赞时存在
   * @param val
   */
  likeDone?: (val: boolean | number) => void;
  /**
   * 提交回复，执行回调是否清空及关闭输入框
   * 仅回复评论时存在
   * @param val
   */
  clear?: (val: boolean) => void;
  /**
   * 回复事件内容
   * 仅回复评论时存在
   */
  value?: string;
  /**
   * 回复新增
   * 仅回复评论时存在
   * @param items
   */
  resolve?: (items: T | T[]) => void;
}
/**
 * 加载数据
 */
export type LoadData = {
  /**
   * 是否是回复的评论
   */
  isSubReply: boolean;
  /**
   * 当前评论项
   */
  item: CommentDataRow;
  /**
   * 数据载入方法
   * @param items
   * @param hasMore
   */
  resolve: (items: CommentDataRow[], hasMore?: boolean) => void;
};
/**
 * 加载数据
 */
export type CommentLoadFn = (load: LoadData) => void;
/**
 * 插槽
 */
export type ItemSlots = {
  /**
   * 头像
   */
  avatar: IResolveParams;
  /**
   * 右侧
   */
  right: IResolveParams;
  /**
   * 左侧
   */
  left: IResolveParams;
  /**
   * 等级
   */
  level: IResolveParams;
  /**
   * 底部操作
   */
  actions: IResolveParams;
  /**
   * 扩展操作，如果使用actions，此插槽亦可以忽略
   */
  actionsExtra: IResolveParams;
  /**
   * 输入框
   */
  editor: IResolveParams;
  /**
   * 内容
   */
  content: IResolveParams;
  /**
   * 默认插槽
   * 内部使用，外部不支持
   */
  default: any;
};
/**
 * 事件
 */
export type CommentEmits = {
  /**
   * 点赞事件
   * @param data
   */
  'click-like': (data: IResolveParams) => void;
  /**
   * 提交回复
   * @param data
   */
  'confirm-reply': (data: IResolveParams) => void;
  /**
   * 更多操作按钮点击事件；如果时自定义时，将会失效
   * @param type 0 删除，1 投诉
   * @param IResolveParams
   */
  actions: (type: 0 | 1, IResolveParams) => void;
  /**
   * 加载数据
   * @param data
   */
  load: (data: LoadData) => void;
};
