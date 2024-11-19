[**e-plus-ui**](../../../../README.md) • **Docs**

***

[e-plus-ui](../../../../modules.md) / [table/types/UseTable](../README.md) / UseTableReturnType

# Type Alias: UseTableReturnType\<T\>

> **UseTableReturnType**\<`T`\>: `object`

## Type Parameters

• **T**

## Type declaration

### addFieldColumns

> **addFieldColumns**: [`AddFieldColumns`](AddFieldColumns.md)

添加列

#### Param

数据列，支持单个或者数组

#### Param

指定位置添加，如果是boolean，值相当于front参数

#### Param

是否首部添加，如果为false 向尾部添加

### clearSelection()

> **clearSelection**: () => `void`

清空选中状态

#### Returns

`void`

### clearValidate()

> **clearValidate**: (...`args`) => `void`

清除检验状态

#### Parameters

• ...**args**: `any`[]

#### Returns

`void`

### deleteFieldColumns()

> **deleteFieldColumns**: (`propValues`) => `void`

根据prop删除列 支持单个或者数组

#### Parameters

• **propValues**: [`ITableColumnConfig`](../../../type/interfaces/ITableColumnConfig.md)\<`T`\>\[`"prop"`\][] \| [`ITableColumnConfig`](../../../type/interfaces/ITableColumnConfig.md)\<`T`\>\[`"prop"`\]

#### Returns

`void`

### registry()

> **registry**: (`instance`) => `void`

注册函数

#### Parameters

• **instance**: `ComponentInternalInstance`

#### Returns

`void`

### resetFields()

> **resetFields**: (...`args`) => `void`

重置表单

#### Parameters

• ...**args**: `any`[]

#### Returns

`void`

### toggleRowSelection()

> **toggleRowSelection**: (`row`, `selected`?) => `void`

选择状态

#### Parameters

• **row**: [`RowData`](RowData.md)

• **selected?**: `boolean`

#### Returns

`void`

### updateFieldColumns()

> **updateFieldColumns**: (`columns`, `fullUpdate`?) => `void`

更新列

#### Parameters

• **columns**: [`ITableColumnConfig`](../../../type/interfaces/ITableColumnConfig.md)\<`T`\>[] \| [`ITableColumnConfig`](../../../type/interfaces/ITableColumnConfig.md)\<`T`\>

支持单个或者数组

• **fullUpdate?**: `boolean`

替换还是合并，为true时，直接替换，否则合并，默认合并

#### Returns

`void`

### validate()

> **validate**: (`isScrollToField`?, `callback`?) => `Promise`\<`any`\>

表单校验

#### Parameters

• **isScrollToField?**: `boolean`

• **callback?**: `FormValidateCallback`

#### Returns

`Promise`\<`any`\>

### validateField()

> **validateField**: (...`args`) => `void`

表单校验某字段

#### Parameters

• ...**args**: `any`[]

#### Returns

`void`

## Defined in

[packages/table/types/UseTable.ts:25](https://github.com/c-eqian/e-plus-ui/blob/583356870441cbe8e3c917dfd7ad56ce5ac6f88a/packages/table/types/UseTable.ts#L25)
