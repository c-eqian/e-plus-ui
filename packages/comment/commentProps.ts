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
