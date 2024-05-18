import { createApp } from 'vue';
import App from './app.vue';
import eui from '@e-ui/components';
const app = createApp(App);
app.use(eui);
app.mount('#app');
