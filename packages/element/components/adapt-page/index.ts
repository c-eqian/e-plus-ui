import { withInstall, type SFCWithInstall } from '@e-plus-ui/utils';
import AdaptPage from './src/AdaptPage.vue';
export const EpAdaptPage: SFCWithInstall<typeof AdaptPage> = withInstall(AdaptPage);
export * from './src/type';
