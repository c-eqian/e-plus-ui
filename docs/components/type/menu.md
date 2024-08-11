# Menu  

 ::: tip 提示
类型定义说明通过自动生成
:::

## MenuItemProps 

menu-item类型

### children
子菜单属性


- **Type:** `MenuItemProps[]`


### path
重写index路由路径,开启router时需要该属性


- **Type:** `string`


### subMenu
子菜单属性


- **Type:** `ElSubMenuProps`


### visible
是否可见


- **Type:** `boolean`


### title
名称


- **Type:** `string`


### group
分组
如果配置group,子项请勿配置children


- **Type:** `boolean`


### icon
图标


- **Type:** `string | (() => VNode)`


### slots
菜单插槽


- **Type:** `() => Record<string, VNode<any, any, any> | VNode<any, any, any>[]>`


## IMenuProps 

menu 类型定义

### level
最大子菜单数，默认 3级


- **Type:** `number`


### items


- **Type:** `MenuItemProps[]`
