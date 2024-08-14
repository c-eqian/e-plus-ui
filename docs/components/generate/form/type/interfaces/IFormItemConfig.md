[**e-plus-ui**](../../../README.md) • **Docs**

***

[e-plus-ui](../../../modules.md) / [form/type](../README.md) / IFormItemConfig

# Interface: IFormItemConfig\<T\>

form-item配置

## Type Parameters

• **T** = `any`

## Properties

### alwaysDisabled?

> `optional` **alwaysDisabled**: `boolean`

是否一直禁用，为true时，处于不可编辑状态，disabled将会失效

#### Defined in

[packages/form/type.ts:137](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/form/type.ts#L137)

***

### alwaysReadOnly?

> `optional` **alwaysReadOnly**: `boolean`

是否一直禁用，为true时，处于不可编辑状态，readOnly将会失效

#### Defined in

[packages/form/type.ts:141](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/form/type.ts#L141)

***

### change()?

> `optional` **change**: (`value`) => `void`

值改变时的方法

#### Parameters

• **value**: `any`

当前值

#### Returns

`void`

#### Defined in

[packages/form/type.ts:169](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/form/type.ts#L169)

***

### col?

> `optional` **col**: [`IFormItemCol`](../type-aliases/IFormItemCol.md)

栅格的布局方式

#### Defined in

[packages/form/type.ts:106](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/form/type.ts#L106)

***

### dateTimeRange?

> `optional` **dateTimeRange**: `string`[]

日期时间范围占位符
长度应该为2

#### Defined in

[packages/form/type.ts:129](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/form/type.ts#L129)

***

### disableDateTimeRange()?

> `optional` **disableDateTimeRange**: (`time`) => `boolean`

自定义限制日期时间范围

#### Parameters

• **time**: `Date`

#### Returns

`boolean`

#### Defined in

[packages/form/type.ts:159](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/form/type.ts#L159)

***

### disabled?

> `optional` **disabled**: `boolean`

启用状态-是否可以编辑
需要配置operationType使用

#### Defined in

[packages/form/type.ts:119](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/form/type.ts#L119)

***

### elExtraPros?

> `optional` **elExtraPros**: [`FormExtraPropsType`](../type-aliases/FormExtraPropsType.md)

el 额外参数

#### Defined in

[packages/form/type.ts:133](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/form/type.ts#L133)

***

### enter()?

> `optional` **enter**: (`value`) => `void`

回车

#### Parameters

• **value**: `any`

当前值

#### Returns

`void`

#### Defined in

[packages/form/type.ts:164](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/form/type.ts#L164)

***

### isLessNow?

> `optional` **isLessNow**: `boolean`

日期时间可选范围： 是否可选在今天之前（包含今天）

#### Defined in

[packages/form/type.ts:154](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/form/type.ts#L154)

***

### isThanNow?

> `optional` **isThanNow**: `boolean`

日期时间可选范围： 是否可选在今天之后（包含今天）

#### Defined in

[packages/form/type.ts:150](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/form/type.ts#L150)

***

### label?

> `optional` **label**: `string`

标签名称

#### Defined in

[packages/form/type.ts:85](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/form/type.ts#L85)

***

### options?

> `optional` **options**: [`IFormOptions`](IFormOptions.md)[] \| `Ref`\<[`IFormOptions`](IFormOptions.md)[]\>

下拉框、级联配置
同

#### Defined in

[packages/form/type.ts:146](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/form/type.ts#L146)

***

### placeholder?

> `optional` **placeholder**: `string`

输入框描述

#### Defined in

[packages/form/type.ts:114](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/form/type.ts#L114)

***

### prop?

> `optional` **prop**: keyof `T` *extends* `E` ? `E` *extends* `string` ? `E`\<`E`\> : `string` : `string`

参数

#### Defined in

[packages/form/type.ts:89](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/form/type.ts#L89)

***

### readOnly?

> `optional` **readOnly**: `boolean`

是否只读
需要配置operationType使用

#### Defined in

[packages/form/type.ts:124](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/form/type.ts#L124)

***

### rules?

> `optional` **rules**: `boolean` \| [`FormItemRules`](FormItemRules.md)\<`T`\> \| [`FormItemRules`](FormItemRules.md)\<`T`\>[]

表单校验规则

#### Defined in

[packages/form/type.ts:110](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/form/type.ts#L110)

***

### slotKey?

> `optional` **slotKey**: `string`

插槽名称

#### Defined in

[packages/form/type.ts:97](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/form/type.ts#L97)

***

### type?

> `optional` **type**: [`FormItemType`](../type-aliases/FormItemType.md)

form-item表单的类型
目前暂不支持上传类型组件，如需要，则建议使用插槽

#### Defined in

[packages/form/type.ts:102](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/form/type.ts#L102)

***

### width?

> `optional` **width**: `string`

表单组件宽度

#### Defined in

[packages/form/type.ts:93](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/form/type.ts#L93)
