import { withInstall, type SFCWithInstall } from '@e-plus-ui/utils';
import NoticeBar from './src/NoticeBar.vue';
export const EpNoticeBar: SFCWithInstall<typeof NoticeBar> = withInstall(NoticeBar);
export * from './src/type';
