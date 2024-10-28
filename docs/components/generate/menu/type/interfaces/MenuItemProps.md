[**e-plus-ui**](../../../README.md) • **Docs**

***

[e-plus-ui](../../../modules.md) / [menu/type](../README.md) / MenuItemProps

# Interface: MenuItemProps

menu-item类型

## Extends

- `Partial`\<`ElMenuItemProps`\>

## Properties

### children?

> `optional` **children**: [`MenuItemProps`](MenuItemProps.md)[]

子菜单属性

#### Defined in

packages/menu/type.ts:15

***

### disabled?

> `readonly` `optional` **disabled**: `boolean`

#### Inherited from

`Partial.disabled`

#### Defined in

node\_modules/element-plus/es/components/menu/src/menu-item.d.ts:12

***

### group?

> `optional` **group**: `boolean`

分组
如果配置group,子项请勿配置children

#### Defined in

packages/menu/type.ts:36

***

### icon?

> `optional` **icon**: `string` \| () => `VNode`\<`RendererNode`, `RendererElement`, `object`\>

图标

#### Defined in

packages/menu/type.ts:40

***

### index?

> `readonly` `optional` **index**: `EpPropMergeType`\<(...`args`) => `string` & `object` \| () => `null` \| `string` \| ((...`args`) => `string` & `object` \| () => `null` \| `string`)[], `unknown`, `unknown`\>

#### Inherited from

`Partial.index`

#### Defined in

node\_modules/element-plus/es/components/menu/src/menu-item.d.ts:5

***

### path?

> `optional` **path**: `string`

重写index路由路径,开启router时需要该属性

#### Defined in

packages/menu/type.ts:19

***

### route?

> `readonly` `optional` **route**: `any`

#### Inherited from

`Partial.route`

#### Defined in

node\_modules/element-plus/es/components/menu/src/menu-item.d.ts:6

***

### slots()?

> `optional` **slots**: () => `Record`\<`string`, `VNode`\<`any`, `any`, `any`\> \| `VNode`\<`any`, `any`, `any`\>[]\>

菜单插槽

#### Returns

`Record`\<`string`, `VNode`\<`any`, `any`, `any`\> \| `VNode`\<`any`, `any`, `any`\>[]\>

#### Defined in

packages/menu/type.ts:44

***

### subMenu?

> `optional` **subMenu**: `SubMenuProps`

子菜单属性

#### Defined in

packages/menu/type.ts:23

***

### title?

> `optional` **title**: `string`

名称

#### Defined in

packages/menu/type.ts:31

***

### visible?

> `optional` **visible**: `boolean`

是否可见

#### Defined in

packages/menu/type.ts:27
