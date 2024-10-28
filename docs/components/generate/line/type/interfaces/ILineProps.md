[**e-plus-ui**](../../../README.md) • **Docs**

***

[e-plus-ui](../../../modules.md) / [line/type](../README.md) / ILineProps

# Interface: ILineProps

## Properties

### borderWidth?

> `optional` **borderWidth**: `string`

边框宽度

#### Default

```ts
1px
```

#### Defined in

packages/line/type.ts:20

***

### color?

> `optional` **color**: `string`

边框颜色

#### Defined in

packages/line/type.ts:34

***

### dashed?

> `optional` **dashed**: `boolean`

是否为虚线

#### Default

```ts
false
```

#### Defined in

packages/line/type.ts:25

***

### direction?

> `optional` **direction**: `"vertical"` \| `"horizontal"`

分割线方向

#### Default

```ts
horizontal
```

#### Defined in

packages/line/type.ts:10

***

### linear?

> `optional` **linear**: `boolean`

是否使用渐变
只有在position=`center`或者没有default slot时有效

#### Default

```ts
false
```

#### Defined in

packages/line/type.ts:45

***

### margin?

> `optional` **margin**: `string`

边距

#### Default

```ts
8
```

#### Defined in

packages/line/type.ts:39

***

### offset?

> `optional` **offset**: `string` \| `number`

偏移量
当设置position=`center`时，该值无效

#### Defined in

packages/line/type.ts:30

***

### position?

> `optional` **position**: [`ILineTextPos`](../type-aliases/ILineTextPos.md)

文本位置

#### Default

```ts
left
```

#### Defined in

packages/line/type.ts:15
