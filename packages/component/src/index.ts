import type { App, Plugin } from "vue";

import "./theme/index.less";
import EpButton from "./component/button/index";

const components: Record<string, Plugin> = {
  EpButton,
};

const install = (app: App, options?: any): void => {
  for (const key of Object.keys(components)) {
    app.use(components[key], options);
  }
};

export { EpButton, install };

export default { install };

export type {} from "./components.ts";
