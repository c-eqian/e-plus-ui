import { createApp } from 'vue';
import App from './app.vue';
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';
import ElementPlus from 'element-plus';
import EPlusUI from '../packages';
import '../packages/theme/index.less';
import 'element-plus/dist/index.css';
import * as components from '@element-plus/icons-vue';
const app = createApp(App);
app.use(ElementPlus);
app.use(EPlusUI);
Object.keys(components).forEach((key) => {
  const componentConfig = components[key];
  app.component(componentConfig.name, componentConfig);
});
app.mount('#app');
