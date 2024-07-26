import type { ICommentConfig } from './API';

export const defaultFields: Record<keyof ICommentConfig, any> = {
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
  dataLevel: 2,
  level: 'level',
  actions: true,
  useEmojis: false,
  emojis: [],
  replyReference: true,
  foldBtnPosition: 'left',
  lines: 3,
};
