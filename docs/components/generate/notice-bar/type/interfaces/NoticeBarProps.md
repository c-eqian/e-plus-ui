[**e-plus-ui**](../../../README.md) • **Docs**

***

[e-plus-ui](../../../modules.md) / [notice-bar/type](../README.md) / NoticeBarProps

# Interface: NoticeBarProps

## Properties

### closeable?

> `optional` **closeable**: `boolean`

是否可关闭

#### Default

```ts
false
```

#### Defined in

[packages/notice-bar/type.ts:13](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/notice-bar/type.ts#L13)

***

### customStyle?

> `optional` **customStyle**: `CSSProperties`

自定义样式

#### Defined in

[packages/notice-bar/type.ts:35](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/notice-bar/type.ts#L35)

***

### height?

> `optional` **height**: `string` \| `number`

滚动区域高度,如果传入数字，默认转成px单位

#### Defined in

[packages/notice-bar/type.ts:31](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/notice-bar/type.ts#L31)

***

### icon?

> `optional` **icon**: `boolean`

是否显示通知图标

#### Default

```ts
true
```

#### Defined in

[packages/notice-bar/type.ts:8](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/notice-bar/type.ts#L8)

***

### list?

> `optional` **list**: `string`[]

数据列表
list 与 text必须传入一个，如果是list则以垂直方式滚动

#### Defined in

[packages/notice-bar/type.ts:18](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/notice-bar/type.ts#L18)

***

### speed?

> `optional` **speed**: `number`

滚动速度 单位ms

#### Default

```ts
3000
```

#### Defined in

[packages/notice-bar/type.ts:40](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/notice-bar/type.ts#L40)

***

### step?

> `optional` **step**: `number`

水平滚动动画每次执行时移动距离

#### Default

```ts
100
```

#### Defined in

[packages/notice-bar/type.ts:45](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/notice-bar/type.ts#L45)

***

### text?

> `optional` **text**: `string`

单行文本
list 与 text必须传入一个，如果是text则以水平方式滚动

#### Defined in

[packages/notice-bar/type.ts:23](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/notice-bar/type.ts#L23)

***

### width?

> `optional` **width**: `string` \| `number`

滚动区域宽度,如果传入数字，默认转成px单位

#### Defined in

[packages/notice-bar/type.ts:27](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/notice-bar/type.ts#L27)
