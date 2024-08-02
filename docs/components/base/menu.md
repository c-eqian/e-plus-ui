#  Menu 菜单
继承`el-menu`原生菜单的所有属性

::: info 提示
为与`router`的语义化，原生`index`已被替换成`path`
:::

### 基础用法

:::demo
menu/base
:::
### 添加图标
支持添加el图标库图标，可接受`string`,`vNode`或者自定义函数返回一个图标组件
:::demo
menu/icon
:::
### 多级子菜单
如果需要多级菜单，请配置`children`，内部默认处理`sub-menu`
:::demo
menu/sub
:::
### 分组菜单
如果需要对菜单进行分组，请配置`group`，内部默认处理`menu-item-group`
<br>
::: info 提示
配置了`groups`，子项请不要配置`children`
:::
:::demo
menu/group
:::
### 水平菜单
 - 配置原生属性`mode`即可
 - 配置`ellipsis`可以对溢出菜单省略
:::demo
menu/mode
:::
### 激活菜单
支持传入默认激活参数`default-active`，此后内部将会自动处理激活菜单
::: info 提示
激活菜单需要启用`router`模式，同时，需要全局注册`vue-router`,一般情况下在`main.ts`中已经注册过
:::

### 配置项

`Menu`需要配置`menuConfig`

由于`menu`组件会继承`el-menu`所有属性，需要时进行配置即可，以下为扩展属性：

| 参数     | 类型                                                 | 说明                                             | 默认  | 必填 |
| -------- | ---------------------------------------------------- | ------------------------------------------------ | ----- | ---- |
| children | `MenuItemProps[]`                                    | 菜单子项                                         | []    | -    |
| path     | string                                               | 原生`index`                                      | -     | √    |
| subMenu  | object                                               | `el-sub-menu`属性                                | -     | -    |
| visible  | boolean                                              | 是否可见                                         | true  | -    |
| title    | string                                               | 菜单名称                                         | -     | √    |
| group    | boolean                                              | 是否使用分组，如果配置group,子项请勿配置children | false | -    |
| icon     | 支持el图标库图标，也可以自定义图标（自定义函数返回） | 图标                                             | -     | -    |
| slots    | VNode \| VNode[]                                     | 菜单插槽                                         | -     | -    |

**IMenuProps 类型**

```typescript
/**
 * menu 类型定义
 */
export interface IMenuProps extends Partial<ElMenuProps> {
  /**
   * 最大子菜单数，默认 3级
   */
  level?: number
  items: MenuItemProps[]
}
```



**`MenuItemProps`类型**

```typescript
/**
 * menu-item类型
 */
export interface MenuItemProps extends Partial<ElMenuItemProps> {
  /**
   * 子菜单属性
   */
  children?: MenuItemProps[]
  /**
   * 重写index路由路径,开启router时需要该属性
   */
  path?: string
  /**
   * 子菜单属性
   */
  subMenu?: ElSubMenuProps
  /**
   * 是否可见
   */
  visible?: boolean
  /**
   * 名称
   */
  title?: string
  /**
   * 分组
   * 如果配置group,子项请勿配置children
   */
  group?: boolean
  /**
   * 图标
   */
  icon?: string | (() => VNode)
  /**
   * 菜单插槽
   */
  slots?: () => Record<string, VNode<any, any, any> | VNode<any, any, any>[]>
}
```

