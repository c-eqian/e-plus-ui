import { withInstall } from '@e-plus-ui/utils';
import * as _pureComponents from './components';
import type { App } from 'vue';
export * from './components';
export const __PU_INSTALLED_KEY__ = Symbol('__PU_INSTALLED_KEY__');
const pureInstall = (app: App, options?: any): void => {
  if ((app as any)[__PU_INSTALLED_KEY__]) return;
  (app as any)[__PU_INSTALLED_KEY__] = true;
  for (const key of Object.keys(_pureComponents)) {
    if (!key && !key.startsWith('Ep')) continue;
    const installComponent = withInstall((_pureComponents as any)[key]);
    app.use(installComponent, options);
  }
};
export { pureInstall };
