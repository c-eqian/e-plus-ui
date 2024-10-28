[**e-plus-ui**](../../../README.md) • **Docs**

***

[e-plus-ui](../../../modules.md) / [table/type](../README.md) / ITableColumnConfig

# Interface: ITableColumnConfig\<T\>

额外参数
主要是组件库的相关参数

## Extends

- [`ExtraParameters`](../type-aliases/ExtraParameters.md)

## Type Parameters

• **T** = `any`

## Properties

### align?

> `optional` **align**: `"left"` \| `"center"` \| `"right"`

对齐方式

#### Defined in

packages/table/type.ts:103

***

### children?

> `optional` **children**: [`ITableColumnConfig`](ITableColumnConfig.md)\<`any`\>[]

#### Defined in

packages/table/type.ts:149

***

### columnsExtra?

> `optional` **columnsExtra**: [`IColumnsExtra`](IColumnsExtra.md) \| `Ref`\<[`IColumnsExtra`](IColumnsExtra.md)\>

扩展参数，基本作用于 el-table的参数

#### Defined in

packages/table/type.ts:163

***

### dictEnum?

> `optional` **dictEnum**: [`IEnumItem`](IEnumItem.md)[]

枚举显示
dictKey 优先级高于 dictEnum

#### Defined in

packages/table/type.ts:144

***

### dictKey?

> `optional` **dictKey**: `string`

字典编码，如果传入该值，则不需要slots，默认已经创建
dictKey 优先级高于 dictEnum

#### Defined in

packages/table/type.ts:139

***

### fixed?

> `optional` **fixed**: `string` \| `boolean`

#### Defined in

packages/table/type.ts:159

***

### format()?

> `optional` **format**: (`row`) => `void`

自定义格式化数据 优先级低于插槽使用

#### Parameters

• **row**: `T`

#### Returns

`void`

#### Defined in

packages/table/type.ts:158

***

### headerRender?

> `optional` **headerRender**: [`TRender`](../type-aliases/TRender.md)\<`T`\>

表头渲染器

#### Defined in

packages/table/type.ts:134

***

### isCopy?

> `optional` **isCopy**: `boolean`

表格中是否需要设置复制按钮
一般用于ID这类

#### Defined in

packages/table/type.ts:168

***

### isFormatTime?

> `optional` **isFormatTime**: `boolean`

提供方便渲染时间的格式化方式 优先级低于format
默认格式为 'yyyy-MM-dd HH:mm:ss'
如果需要其他格式，请使用format自定义格式化

#### Defined in

packages/table/type.ts:174

***

### key?

> `optional` **key**: `string`

column key
默认使用 prop

#### Defined in

packages/table/type.ts:114

***

### label

> **label**: `string`

显示名

#### Defined in

packages/table/type.ts:118

***

### operationType?

> `optional` **operationType**: [`TRender`](../type-aliases/TRender.md)\<`any`\> \| ([`OperationType`](../type-aliases/OperationType.md) \| [`OperationTypeMap`](OperationTypeMap.md))[]

需要type=operation
操作类型， 默认add(新增) edit(修改) delete(删除) view(查看)

#### Defined in

packages/table/type.ts:184

***

### prop?

> `optional` **prop**: keyof `T` *extends* `E` ? `E` *extends* `string` ? `E`\<`E`\> : `string` : `string`

数据键

#### Defined in

packages/table/type.ts:122

***

### render?

> `optional` **render**: [`TRender`](../type-aliases/TRender.md)\<`T`\> \| [`TRender`](../type-aliases/TRender.md)\<`T`\>[]

自定义渲染器

#### Defined in

packages/table/type.ts:130

***

### rules?

> `optional` **rules**: `boolean` \| `FormItemRule` \| `FormItemRule`[]

表单校验:主要用于表格内的表单编辑

#### Defined in

packages/table/type.ts:148

***

### showOverflowTooltip?

> `optional` **showOverflowTooltip**: `boolean`

文本溢出显示...

#### Defined in

packages/table/type.ts:153

***

### slotKey?

> `optional` **slotKey**: `string`

自定义插槽名称
优先级高于prop
如果没有则默认名称为prop的值

#### Defined in

packages/table/type.ts:109

***

### tooltip?

> `optional` **tooltip**: `boolean`

是否显示提示，默认false

#### Defined in

packages/table/type.ts:126

***

### type?

> `optional` **type**: `"index"` \| `"selection"` \| `"expand"` \| `"operation"`

拓展operation，用于数据操作 默认支持 add(新增) edit(修改) delete(删除) view(查看)
当使用operation类型时，fixed默认启用

#### Defined in

packages/table/type.ts:179

***

### width?

> `optional` **width**: `string` \| `number`

列宽

#### Defined in

packages/table/type.ts:99
