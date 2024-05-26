import { createApp } from "vue"
import App from './app.vue'

import ElementPlus from 'element-plus';
import EPlusUI from '../packages/component/src/index'
import 'element-plus/dist/index.css';
const app = createApp(App);
app.use(ElementPlus)
app.use(EPlusUI)
app.mount('#app')
