import { withInstall, type SFCWithInstall } from '@e-plus-ui/utils';
import DiamondLoading from './src/DiamondLoading.vue';
export const EpDiamondLoading: SFCWithInstall<typeof DiamondLoading> = withInstall(DiamondLoading);
export * from './src/type';
