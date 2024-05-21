import type { App, Plugin } from "vue";

import "./theme/index.less";
import EpButton from "./component/button/index";
import EpCard from "./component/card/index";

const components: Record<string, Plugin> = {
  EpButton,
  EpCard,
};

const install = (app: App, options?: any): void => {
  for (const key of Object.keys(components)) {
    app.use(components[key], options);
  }
};

export { EpButton, EpCard, install };

export default { install };

export type {} from "./components.ts";
