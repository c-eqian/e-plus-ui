[**e-plus-ui**](../../../README.md) • **Docs**

***

[e-plus-ui](../../../modules.md) / [form-schema/type](../README.md) / FormItemsSchema

# Interface: FormItemsSchema\<T\>

表单项

## Type Parameters

• **T** = `any`

## Properties

### ~~change()?~~

> `optional` **change**: (`value`) => `void`

值改变时的方法

#### Parameters

• **value**: `any`

当前值

#### Returns

`void`

#### Deprecated

已废弃，如需使用事件，请使用组件参数

#### Defined in

packages/form-schema/type.ts:134

***

### col?

> `optional` **col**: [`IFormItemCol`](../type-aliases/IFormItemCol.md)

栅格的布局方式

#### Defined in

packages/form-schema/type.ts:118

***

### collapse?

> `optional` **collapse**: `boolean`

是否折叠,只对isSearch搜索有效

#### Defined in

packages/form-schema/type.ts:122

***

### componentProps?

> `optional` **componentProps**: `Partial`\<[`ComponentSlots`](../../types/type-aliases/ComponentSlots.md)\> & [`ExtraProps`](ExtraProps.md)\<`T`, [`FormItemsSchema`](FormItemsSchema.md)\<`T`\>\> & `Record`\<`string`, `any`\>

组件参数

#### Defined in

packages/form-schema/type.ts:138

***

### defaultValue?

> `optional` **defaultValue**: `any`

表单默认值
如果传入model，该值无效

#### Defined in

packages/form-schema/type.ts:93

***

### ~~enter()?~~

> `optional` **enter**: (`value`) => `void`

回车

#### Parameters

• **value**: `any`

当前值

#### Returns

`void`

#### Deprecated

已废弃，如需使用事件，请使用组件参数

#### Defined in

packages/form-schema/type.ts:128

***

### label

> **label**: `string`

标签文本

#### Defined in

packages/form-schema/type.ts:84

***

### labelWidth?

> `optional` **labelWidth**: `string`

标签宽度

#### Defined in

packages/form-schema/type.ts:88

***

### placeholder?

> `optional` **placeholder**: `string`

输入框描述

#### Defined in

packages/form-schema/type.ts:97

***

### prop

> **prop**: keyof `T` *extends* `E` ? `E` *extends* `string` ? `E`\<`E`\> : `string` : `string`

model 的键名。 它可以是一个属性的值(如 a.b.0)

#### Defined in

packages/form-schema/type.ts:80

***

### render?

> `optional` **render**: [`Render`](../../types/type-aliases/Render.md)\<`T`, [`FormItemsSchema`](FormItemsSchema.md)\<`T`\>\>

自定义渲染，优先级低于插槽

#### Defined in

packages/form-schema/type.ts:114

***

### rules?

> `optional` **rules**: `boolean` \| [`FormItemRules`](FormItemRules.md)\<`T`\> \| [`FormItemRules`](FormItemRules.md)\<`T`\>[]

表单校验规则

#### Defined in

packages/form-schema/type.ts:101

***

### slotKey?

> `optional` **slotKey**: `string`

插槽名称

#### Defined in

packages/form-schema/type.ts:105

***

### type?

> `optional` **type**: [`FormSchemaType`](../type-aliases/FormSchemaType.md)

form-item表单的类型
目前暂不支持上传类型组件，如需要，则建议使用插槽

#### Defined in

packages/form-schema/type.ts:110
