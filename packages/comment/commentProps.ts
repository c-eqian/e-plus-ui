import { ICommentConfig } from './type';

export const defaultFields = {
  commentFields: {
    commentId: 'commentId',
    content: 'content',
    createDate: 'createDate',
    publisher: 'publisher',
    likeCount: 'likeCount',
    like: 'like',
    updateDate: 'updateDate',
    username: 'userInfo.username',
    avatar: 'userInfo.avatar',
    userId: 'userInfo.userId',
    children: 'children',
    subComment: 'subComment',
    parentId: 'parentId',
    replyId: 'replyId',
    reply: 'reply',
    formatTime: true,
    replyRender: true,
    likeRender: true,
    ipAddress: 'ipAddress',
    level: 'level',
  },
  dataLevel: 2,
  actions: true,
  useEmojis: false,
  emojis: [],
  list: 'list',
  hasMore: 'hasMore',
  foldBtnPosition: 'left',
  lines: 3,
} as ICommentConfig;
/**
 * 事件
 */
export const commentEmits = [
  /**
   * 点赞事件
   * @param data
   */
  'click-like',
  /**
   * 提交回复
   * @param data
   */
  'confirm-reply',
  /**
   * 更多操作按钮点击事件；如果时自定义时，将会失效
   * @param type 0 删除，1 投诉
   * @param IResolveParams
   */
  'actions',
  /**
   * 加载数据
   * @param data
   */
  'load',
];
