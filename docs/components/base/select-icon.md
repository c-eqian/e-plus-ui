

# select-icon 图标选择器

## 基础用法

基础的按钮用法。

:::demo
select-icon/index
:::

## 显示/隐藏搜索

通过配置`searchable`开启或隐藏搜索

:::demo
select-icon/search
:::

## 自定义图标
支持通过自定义`svg`等图标
:::demo
select-icon/custom
:::

## 懒加载
如果是一次性传入大量图标情况下，可能会导致性能问题。
当需要大量图标时，可以设置`lazyLoadable`开启懒加载，以及懒加载的数量`lazyLoadValue`
> 当图标数量不大于lazyLoadValue值时，不会开启懒加载

:::demo
select-icon/lazy
:::


::: warning
自定义图标可通过组件（h、component）形式，如果是一个对象，需要提供一个图标名字`name`、以及需要渲染图标`icon`的字段
:::

## 其他配置
其他配置项，详见[参数](/components/generate/EpSelectIcon.html)
