# 版本
![NPM dev or peer Dependency Version](https://img.shields.io/npm/dependency-version/e-plus-ui/peer/vue)
![NPM (prod) Dependency Version](https://img.shields.io/npm/dependency-version/e-plus-ui/co-utils-vue)
![NPM (prod) Dependency Version](https://img.shields.io/npm/dependency-version/e-plus-ui/element-plus)


# 介绍
![NPM Version](https://img.shields.io/npm/v/e-plus-ui)![NPM Downloads](https://img.shields.io/npm/dm/e-plus-ui)


`EPlus-UI`，一个精心打造的基于`element-plus`的组件库，`EPlus-UI`旨在消除冗余代码，让开发过程变得更为高效、流畅，强调灵活性和可配置性。
它允许开发者通过简单的配置操作，轻松调整组件的行为和交互逻辑。在开发过程中，EPlus-UI提供了丰富的文档和示例代码，帮助开发者快速上手并理解组件的使用方法和最佳实践

# 安装使用
本节将介绍如何在项目中使用 EPlus-UI

## 安装

使用 npm 或 yarn 安装

```
npm install e-plus-ui
yarn add e-plus-ui
```

## 引入 e-plus-ui

### 完整引入

#### 需要注意的是 css 样式文件需要单独引入。

在 main.js 中写入以下内容：

```js
import { createApp } from 'vue';
import App from './App.vue';
// 导入组件库
import EPlusUI from 'e-plus-ui';
import 'e-plus-ui/lib/index.css'

const app = createApp(App);
app.use(EPlusUI);
app.mount('#app');
```

<br/>

## 愉快开始

#### 至此 EPlus-UI 就引入完成并且可以使用了。

```html
<!-- html -->
<ep-button>默认按钮</ep-button>
<ep-button type="primary">主要按钮</ep-button>
```

<br/>

## 按需引用

#### 您可以根据个人需要使用按需引用组件，按需引用时不需要使用 `app.use()` 方法注册。

```js
/*js*/
import { EpButton } from 'e-plus-ui';
```

<br/>

```html
<!-- html -->
<ep-button>点击</ep-button>
```

<br/>
