# Dialog 弹窗
弹窗组件，支持组件式和函数式两种调用方式
## 基础用法
基于`el-dialog`封装，兼容所有参数、事件
:::demo
dialog/index
:::

## 自定义底部按钮
支持通过配置参数`footerProps`来设置`buttons`按钮
:::demo
dialog/footer-button
:::

## 函数式调用
通过配置`render`方法，返回一个组件节点，渲染在弹窗的默认插槽`（default）`中
:::demo
dialog/use-dialog-model
:::
