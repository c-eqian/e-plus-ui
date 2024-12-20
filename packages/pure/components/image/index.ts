import { withInstall, type SFCWithInstall } from '@e-plus-ui/utils';
import Image from './src/Image.vue';
export const EpImage: SFCWithInstall<typeof Image> = withInstall(Image);
export * from './src/type';
