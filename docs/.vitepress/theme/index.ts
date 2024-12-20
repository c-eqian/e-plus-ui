// .vitepress/theme/index.js
import './style.css'
import './reset.css'
import DefaultTheme from "vitepress/theme";
// import "element-plus/dist/index.css";
import { AntDesignContainer } from '@vitepress-demo-preview/component'
// import '@vitepress-demo-preview/component/dist/style.scss'
import { globals } from '../vitepress';
import cz from 'e-plus-ui';
// import 'e-plus-ui'
// import '../vitepress/styles/code.scss'
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css'
import { icons } from '@e-plus-ui/icons/global'
import locale from 'element-plus/dist/locale/zh-cn.mjs'
// 图标并进行全局注册
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'prism-themes/themes/prism-one-dark.css'
// import 'uno.css';
export default {
  ...DefaultTheme,
  // enhanceApp: async ({ app, router, siteData, isServer }) => {
  //   // app is the Vue 3 app instance from `createApp()`. router is VitePress'
  //   // custom router. `siteData`` is a `ref`` of current site-level metadata.
  //   import("element-plus").then((module) => {
  //     app.use(module);
  //   });
  // },
  enhanceApp({app}) {
    // app.component('demo-preview', AntDesignContainer)
    app.use(cz)
    // 注册element-plus
    app.use(ElementPlus, {
        locale
    });
    // 全局引入vp-demo组件
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp);
    });
    // 注册所有图标
    // for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    //   app.component(key, component)
    // }
      // 注册所有图标
      for (const [key, component] of Object.entries(icons)) {
          app.component(key, component)
      }
  }
};
