import type { ICommentConfig } from './API';

export const defaultFields: Record<keyof ICommentConfig, any> = {
  commentId: 'commentId',
  content: 'content',
  createDate: 'createDate',
  publisher: 'publisher',
  likeCount: 'likeCount',
  updateDate: 'updateDate',
  username: 'userInfo.username',
  avatar: 'userInfo.avatar',
  userId: 'userInfo.userId',
  children: 'children',
  subComment: 'subComment',
  parentId: 'parentId',
  replyId: 'replyId',
  formatTime: true,
  replyRender: true,
  likeRender: true,
  replyReference: true,
};
