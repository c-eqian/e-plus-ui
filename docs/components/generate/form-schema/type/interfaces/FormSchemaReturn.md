[**e-plus-ui**](../../../README.md) • **Docs**

***

[e-plus-ui](../../../modules.md) / [form-schema/type](../README.md) / FormSchemaReturn

# Interface: FormSchemaReturn

表单方法

## Extended by

- [`UseFormSchemaReturnType`](UseFormSchemaReturnType.md)

## Properties

### appendFields()

> **appendFields**: \<`T`\>(`item`, `to`?) => `Promise`\<`unknown`\>

追加组件配置

#### Type Parameters

• **T** = `any`

#### Parameters

• **item**: [`FormItemsSchema`](FormItemsSchema.md)\<`T`\>

• **to?**: `boolean` \| keyof `T` *extends* `E` ? `E` *extends* `string` ? `E`\<`E`\> : `string` : `string`

指定到哪个组件后面添加，默认最后一个,如果是布尔值并且为false，则添加到第一条

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[packages/form-schema/type.ts:219](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/form-schema/type.ts#L219)

***

### clearValidate()

> **clearValidate**: (...`args`) => `void`

清空某个字段的表单有验证信息

#### Parameters

• ...**args**: `string`[]

#### Returns

`void`

#### Defined in

[packages/form-schema/type.ts:213](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/form-schema/type.ts#L213)

***

### deleteField()

> **deleteField**: \<`T`\>(`prop`) => `Promise`\<`void`\>

删除指定表单项

#### Type Parameters

• **T** = `any`

#### Parameters

• **prop**: keyof `T` *extends* `E` ? `E` *extends* `string` ? `E`\<`E`\> : `string` : `string`

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/form-schema/type.ts:227](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/form-schema/type.ts#L227)

***

### getFieldsValues()

> **getFieldsValues**: (`serialize`?) => `Record`\<`string`, `any`\>

获取表单值

#### Parameters

• **serialize?**: `boolean`

是否需要序列化

#### Returns

`Record`\<`string`, `any`\>

#### Default

```ts
true
```

#### Example

``` js
// 'a.b.c'=> {a:{b: {c:xxx}}}
```

#### Defined in

[packages/form-schema/type.ts:179](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/form-schema/type.ts#L179)

***

### resetFields()

> **resetFields**: (...`args`) => `void`

重置表单

#### Parameters

• ...**args**: `string`[]

#### Returns

`void`

#### Defined in

[packages/form-schema/type.ts:208](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/form-schema/type.ts#L208)

***

### scrollIntoView()

> **scrollIntoView**: (`field`) => `void`

平滑滚动定位到对应的视图

#### Parameters

• **field**: `string`

#### Returns

`void`

#### Defined in

[packages/form-schema/type.ts:189](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/form-schema/type.ts#L189)

***

### setFieldsValues()

> **setFieldsValues**: \<`T`\>(`values`) => `void`

设置表单值

#### Type Parameters

• **T**

#### Parameters

• **values**: `Record`\<keyof `T`, `any`\>

#### Returns

`void`

#### Defined in

[packages/form-schema/type.ts:184](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/form-schema/type.ts#L184)

***

### validate()

> **validate**: (`isScrollToField`?, `callback`?) => `Promise`\<`any`\>

表单校验

#### Parameters

• **isScrollToField?**: `boolean`

是否需要定位到第一个错误字段

• **callback?**: `FormValidateCallback`

自定义回调函数

#### Returns

`Promise`\<`any`\>

#### Defined in

[packages/form-schema/type.ts:195](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/form-schema/type.ts#L195)

***

### validateField()

> **validateField**: (...`args`) => `Promise`\<`any`\>

校验表单某个字段验证

#### Parameters

• ...**args**: `any`[]

#### Returns

`Promise`\<`any`\>

#### Defined in

[packages/form-schema/type.ts:203](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/form-schema/type.ts#L203)
