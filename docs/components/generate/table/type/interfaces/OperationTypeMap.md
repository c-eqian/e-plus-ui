[**e-plus-ui**](../../../README.md) • **Docs**

***

[e-plus-ui](../../../modules.md) / [table/type](../README.md) / OperationTypeMap

# Interface: OperationTypeMap

## Properties

### extra?

> `optional` **extra**: [`ExtraParameters`](../type-aliases/ExtraParameters.md)

额外参数
el组件参数

#### Defined in

[packages/table/type.ts:93](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/table/type.ts#L93)

***

### label?

> `optional` **label**: `string`

自定义操作名称，如果使用内置时可以为空，默认使用内置标签
优先级高于operationTypeLabel

#### Defined in

[packages/table/type.ts:77](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/table/type.ts#L77)

***

### permission?

> `optional` **permission**: [`Permission`](../type-aliases/Permission.md)

权限
接收一个数组（预留-使用接口权限校验）
或接收一个具有返回布尔值的方法，false将不会显示该操作

#### Defined in

[packages/table/type.ts:88](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/table/type.ts#L88)

***

### render?

> `optional` **render**: [`TRender`](../type-aliases/TRender.md)\<`any`\>

自定义渲染
优先级高于type

#### Defined in

[packages/table/type.ts:82](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/table/type.ts#L82)

***

### type

> **type**: `string`

操作类型，可以使用内置、亦可以使用自定义
如果使用自定义时，type的值将会作为事件的回调参数

#### Defined in

[packages/table/type.ts:72](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/table/type.ts#L72)
