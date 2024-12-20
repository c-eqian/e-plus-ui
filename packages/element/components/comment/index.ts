import { withInstall, type SFCWithInstall } from '@e-plus-ui/utils';
import Comment from './src/Comment';
export const EpComment: SFCWithInstall<typeof Comment> = withInstall(Comment);
export * from './src/type';
