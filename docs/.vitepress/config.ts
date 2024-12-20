import { defineConfig } from 'vitepress';
import { mdPlugin } from './configs/plugins';
import { generateSidebar } from './configs/siderbars';
export default defineConfig({
  lang: 'zh-CN',
  title: 'EPlus-UI',
  description: '组件库',
  base: '/e-plus-ui/',
  head: [
    ['link', { rel: 'icon', href: 'https://s3.bmp.ovh/imgs/2022/12/21/0aedf538ece60a2f.png' }]
  ],
  markdown: {
    lineNumbers: true,
    config: md => mdPlugin(md as any)
  },
  themeConfig: {
    // logo: 'https://s1.ax1x.com/2022/09/10/vOVha6.jpg',
    logo: 'https://s3.bmp.ovh/imgs/2022/12/21/0aedf538ece60a2f.png',
    search: {
      provider: 'local'
    },
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
        text: 'API',
        link: '/components/generate/modules'
      },
      {
        text: '更新日志',
        link: '/guide/CHANGELOG'
      },
      {
        text: 'Github',
        link: 'https://github.com/c-eqian/e-plus-ui'
      }
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
        },
        {
          text: 'hooks',
          link: '',
          items: generateSidebar('hooks')
        }
      ]
    },
    outline: {
      level: 'deep',
      label: '目录'
    },
    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  }
});
