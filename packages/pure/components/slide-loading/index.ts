import { withInstall, type SFCWithInstall } from '@e-plus-ui/utils';
import SlideLoading from './src/SlideLoading.vue';
export const EpSlideLoading: SFCWithInstall<typeof SlideLoading> = withInstall(SlideLoading);
export * from './src/type';
