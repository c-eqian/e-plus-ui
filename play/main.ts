import { createApp } from "vue"
import App from './app.vue'
import EPlusUI from '../packages/component/src/index'
const app = createApp(App);

app.use(EPlusUI)
app.mount('#app')
