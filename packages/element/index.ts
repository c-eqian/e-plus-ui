import * as _elementComponents from './components';
import type { App } from 'vue';
export * from './components';
export * from './hooks';
export const __EP_INSTALLED_KEY__ = Symbol('__EP_INSTALLED_KEY__');
const elementInstall = (app: App, options?: any): void => {
  if ((app as any)[__EP_INSTALLED_KEY__]) return;
  (app as any)[__EP_INSTALLED_KEY__] = true;
  for (const key of Object.keys(_elementComponents)) {
    if (!key && !key.startsWith('Ep')) continue;
    app.use((_elementComponents as any)[key], options);
  }
};
export { elementInstall };
