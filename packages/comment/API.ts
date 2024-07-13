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
  // /**
  //  * 二级评：二级评论下的评论信息
  //  */
  // replyInfo: CommentDataRow;
  // /**
  //  * 二级评：二级评论ID
  //  */
  // ommentId: number;
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
export interface ICommentFields {
  /**
   * 评论内容
   * @default content
   */
  content?: string;
  /**
   * 创建时间
   * @default createDate
   */
  createDate?: string;
  /**
   * 评论ID
   * @default commentId
   */
  commentId?: string;
  /**
   * 是否为当前账号的评论
   * @default publisher
   */
  publisher?: string;
  /**
   * 当前评论点赞数
   * @default likeCount
   */
  likeCount?: string;
  /**
   * 更新时间
   * @default updateDate
   */
  updateDate?: string;
  /**
   * 当前评论的用户名，支持链式，如{a:{b:1}} a.b => 1
   * @default userInfo.username
   */
  username: string;
  /**
   * 用户头像地址
   * @default userInfo.avatar
   */
  avatar?: string;
  /** 用户id
   * @default userInfo.userId
   */
  userId?: string;
  /**
   * 二级评字段
   * 与 subComment的区别是，subComment的数据结构中的二级评论会有children
   * @default children
   */
  children?: string;
  /**
   * 二级评论数据字段
   * 与一级的一致
   * @default subComment
   */
  subComment?: string;
  /**
   * 二级评：父级ID 也就是第一级的评论ID
   * @default parentId
   */
  parentId?: string;
  /**
   * 二级评：当前被回复的评论ID
   * @default replyId
   */
  replyId?: string;
  [k: string]: any;
}
