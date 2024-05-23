import type { App, Plugin } from 'vue';

import './theme/index.less';
export * from './component/table/type';
export * from './component/form/index';
import EpButton from './component/button/index';
import EpCard from './component/card/index';
import EpTable from './component/table/index';
import EpForm from './component/form/index';
import EpCopyText from './component/copy-text/index';
const components: Record<string, Plugin> = {
  EpButton,
  EpCard,
  EpCopyText,
  EpTable,
  EpForm,
};

const install = (app: App, options?: any): void => {
  for (const key of Object.keys(components)) {
    app.use(components[key], options);
  }
};

export { EpButton, EpCard, EpCopyText, EpTable, EpForm, install };

export default { install };

export type {} from './components.ts';
