import { withInstall, type SFCWithInstall } from '@e-plus-ui/utils';
import Line from './src/Line.vue';
export const EpLine: SFCWithInstall<typeof Line> = withInstall(Line);
export * from './src/type';
