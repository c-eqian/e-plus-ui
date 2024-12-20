import { withInstall, type SFCWithInstall } from '@e-plus-ui/utils';
import VirtualList from './src/VirtualList.vue';
export const EpVirtualList: SFCWithInstall<typeof VirtualList> = withInstall(VirtualList);
export * from './src/type';
