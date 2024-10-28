[**e-plus-ui**](../../../README.md) • **Docs**

***

[e-plus-ui](../../../modules.md) / [virtual-list/type](../README.md) / IVirtualList

# Interface: IVirtualList\<T\>

## Type Parameters

• **T** = `any`

## Properties

### cache?

> `optional` **cache**: `number`

缓存数量

#### Default

```ts
2
```

#### Defined in

packages/virtual-list/type.ts:30

***

### className?

> `optional` **className**: `string`

自定义类名

#### Defined in

packages/virtual-list/type.ts:5

***

### data

> **data**: `T`[]

数据

#### Default

```ts
[]
```

#### Defined in

packages/virtual-list/type.ts:35

***

### height?

> `optional` **height**: `number`

容器高度，计算显示数量

#### Default

```ts
500
```

#### Defined in

packages/virtual-list/type.ts:10

***

### isDynamic?

> `optional` **isDynamic**: `boolean`

是否动态高度

#### Default

```ts
false
```

#### Defined in

packages/virtual-list/type.ts:25

***

### itemHeight?

> `optional` **itemHeight**: `number`

预估每行高度

#### Default

```ts
30
```

#### Defined in

packages/virtual-list/type.ts:20

***

### width?

> `optional` **width**: `string` \| `number`

宽度

#### Default

```ts
100%
```

#### Defined in

packages/virtual-list/type.ts:15
