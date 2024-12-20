import { withInstall, type SFCWithInstall } from '@e-plus-ui/utils';
import Pagination from './src/Pagination.vue';
export const EpPagination: SFCWithInstall<typeof Pagination> = withInstall(Pagination);
export * from './src/type';
