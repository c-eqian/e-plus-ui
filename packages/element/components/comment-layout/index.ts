import { withInstall, type SFCWithInstall } from '@e-plus-ui/utils';
import CommentLayout from './src/CommentLayout.vue';
export const EpCommentLayout: SFCWithInstall<typeof CommentLayout> = withInstall(CommentLayout);
export * from './src/type';
