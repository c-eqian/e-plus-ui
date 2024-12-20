import { withInstall, type SFCWithInstall } from '@e-plus-ui/utils';
import Skeleton from './src/Skeleton.vue';
export const EpSkeleton: SFCWithInstall<typeof Skeleton> = withInstall(Skeleton);
export * from './src/type';
