import { elementInstall } from '@e-plus-ui/element';
import { pureInstall } from '@e-plus-ui/pure';
import type { App } from 'vue';
export * from './components';
export * from '@e-plus-ui/tailwind-config';
export * from '@e-plus-ui/utils';
export * from '@e-plus-ui/pure';
export * from '@e-plus-ui/element';
const installer = (app: App, options?: any) => {
  pureInstall(app, options);
  elementInstall(app, options);
};
export default installer;
export { elementInstall, pureInstall };
