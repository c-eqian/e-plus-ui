import {defineConfig} from "vitepress";
import { mdPlugin } from './configs/plugins';
import {generateSidebar} from "./configs/siderbars";
export default defineConfig({
    lang: 'zh-CN',
    title: 'cz-coco',
    description: '组件库&工具库',
    head: [['link', { rel: 'icon', href: '/logo.png' }]],
    markdown: {
        lineNumbers: true,
        config: (md) => mdPlugin(md as any),
    },
    themeConfig: {
        // logo: 'https://s1.ax1x.com/2022/09/10/vOVha6.jpg',
        logo: 'https://s1.ax1x.com/2022/10/15/x0Q84P.png',
        nav: [
            {
                text: '指南',
                link: '/'
            },
            {
                text: '组件',
                link: '/components/base/button'
            },
            {
                text: '主题',
                link: '/foo/'
            },
            {
                text: 'Gitee',
                link: 'https://gitee.com/cyq13/cz-coco'
            },
            {
                text: 'Github',
                link: 'https://github.com/C1320/cz-coco'
            },
        ],
        sidebar: {
            '/components/': [
                {
                text: '使用',
                link: '/guide/install'
            },

                {
                    text: 'Basic 基础组件',
                    link: '',
                    items: generateSidebar()
                },
                {
                    text: 'Senior 高级组件',
                    link: '',
                    items: generateSidebar('senior')
                }
            ]
        },
        outline: {
            level: 'deep',
            label: '目录',
        },
        darkModeSwitchLabel: '外观',
        returnToTopLabel: '返回顶部',
        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        },
    }
})
