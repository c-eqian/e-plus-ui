import ElementPlus from 'element-plus';
import { createApp } from 'vue';
import installer from '@/e-plus-ui';
import App from './App.vue';
import './style.css';
import '@e-plus-ui/styles/index.scss';
import 'element-plus/theme-chalk/index.css';
createApp(App).use(ElementPlus).use(installer).mount('#app');
