import { withInstall, type SFCWithInstall } from '@e-plus-ui/utils';
import Editor from './src/Editor.vue';
export const EpEditor: SFCWithInstall<typeof Editor> = withInstall(Editor);
export * from './src/type';
