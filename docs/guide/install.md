<!--
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-10-15 15:45:07
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-18 22:14:16
-->

# 安装使用

本节将介绍如何在项目中使用 cz-coco

## 安装

使用 npm 或 yarn 安装

```
npm install cz-coco
yarn add cz-coco
```

## 引入 cz-coco

### 完整引入

#### 需要注意的是 css 样式文件需要单独引入。

在 main.js 中写入以下内容：

```js
import { createApp } from 'vue';
import App from './App.vue';
// 导入组件库
import CzUi from 'cz-coco';
import 'cz-coco/lib/cz-coco.css';

const app = createApp(App);
app.use(CzUi);
app.mount('#app');
```

<br/>

## 愉快开始

#### 至此 cz-coco 就引入完成并且可以使用了。

```html
<!-- html -->
<cz-button>默认按钮</-button>
<cz-button type="primary">主要按钮</-button>
```

<br/>

## 按需引用

#### 您可以根据个人需要使用按需引用组件，按需引用时不需要使用 `app.use()` 方法注册。

```js
/*js*/
import { CzButton } from 'cz-coco';
```

<br/>

```html
<!-- html -->
<cz-button>点击</cz-button>
```

<br/>
