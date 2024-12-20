import { withInstall, type SFCWithInstall } from '@e-plus-ui/utils';
import AdminLayout from './src/AdminLayout.vue';
export const EpAdminLayout: SFCWithInstall<typeof AdminLayout> = withInstall(AdminLayout);
export * from './src/type';
