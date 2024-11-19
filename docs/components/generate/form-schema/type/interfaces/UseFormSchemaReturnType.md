[**e-plus-ui**](../../../README.md) • **Docs**

***

[e-plus-ui](../../../modules.md) / [form-schema/type](../README.md) / UseFormSchemaReturnType

# Interface: UseFormSchemaReturnType

表单返回类型

## Extends

- [`FormSchemaReturn`](FormSchemaReturn.md)

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

#### Inherited from

[`FormSchemaReturn`](FormSchemaReturn.md).[`appendFields`](FormSchemaReturn.md#appendfields)

#### Defined in

[packages/form-schema/type.ts:231](https://github.com/c-eqian/e-plus-ui/blob/583356870441cbe8e3c917dfd7ad56ce5ac6f88a/packages/form-schema/type.ts#L231)

***

### clearValidate()

> **clearValidate**: (...`args`) => `void`

清空某个字段的表单有验证信息

#### Parameters

• ...**args**: `string`[]

#### Returns

`void`

#### Inherited from

[`FormSchemaReturn`](FormSchemaReturn.md).[`clearValidate`](FormSchemaReturn.md#clearvalidate)

#### Defined in

[packages/form-schema/type.ts:225](https://github.com/c-eqian/e-plus-ui/blob/583356870441cbe8e3c917dfd7ad56ce5ac6f88a/packages/form-schema/type.ts#L225)

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

#### Inherited from

[`FormSchemaReturn`](FormSchemaReturn.md).[`deleteField`](FormSchemaReturn.md#deletefield)

#### Defined in

[packages/form-schema/type.ts:249](https://github.com/c-eqian/e-plus-ui/blob/583356870441cbe8e3c917dfd7ad56ce5ac6f88a/packages/form-schema/type.ts#L249)

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

#### Inherited from

[`FormSchemaReturn`](FormSchemaReturn.md).[`getFieldsValues`](FormSchemaReturn.md#getfieldsvalues)

#### Defined in

[packages/form-schema/type.ts:191](https://github.com/c-eqian/e-plus-ui/blob/583356870441cbe8e3c917dfd7ad56ce5ac6f88a/packages/form-schema/type.ts#L191)

***

### getFormInstance

> **getFormInstance**: [`FormSchemaInstance`](../type-aliases/FormSchemaInstance.md)

表单实例

#### Defined in

[packages/form-schema/type.ts:282](https://github.com/c-eqian/e-plus-ui/blob/583356870441cbe8e3c917dfd7ad56ce5ac6f88a/packages/form-schema/type.ts#L282)

***

### listener()

> **listener**: (...`args`) => `Promise`\<`void`\>

使用组件的事件
如onChange,回调参数为Scoped

#### Parameters

• ...**args**: `any`

#### Returns

`Promise`\<`void`\>

#### Example

``` JavaScript
listener({
onChange:({model, item})=>{
.....
}
})
```

#### Inherited from

[`FormSchemaReturn`](FormSchemaReturn.md).[`listener`](FormSchemaReturn.md#listener)

#### Defined in

[packages/form-schema/type.ts:263](https://github.com/c-eqian/e-plus-ui/blob/583356870441cbe8e3c917dfd7ad56ce5ac6f88a/packages/form-schema/type.ts#L263)

***

### registry

> **registry**: [`RegisterFn`](../../types/type-aliases/RegisterFn.md)\<`ComponentInternalInstance`\>

表单注册函数

#### Defined in

[packages/form-schema/type.ts:278](https://github.com/c-eqian/e-plus-ui/blob/583356870441cbe8e3c917dfd7ad56ce5ac6f88a/packages/form-schema/type.ts#L278)

***

### resetFields()

> **resetFields**: (...`args`) => `void`

重置表单

#### Parameters

• ...**args**: `string`[]

#### Returns

`void`

#### Inherited from

[`FormSchemaReturn`](FormSchemaReturn.md).[`resetFields`](FormSchemaReturn.md#resetfields)

#### Defined in

[packages/form-schema/type.ts:220](https://github.com/c-eqian/e-plus-ui/blob/583356870441cbe8e3c917dfd7ad56ce5ac6f88a/packages/form-schema/type.ts#L220)

***

### scrollIntoView()

> **scrollIntoView**: (`field`) => `void`

平滑滚动定位到对应的视图

#### Parameters

• **field**: `string`

#### Returns

`void`

#### Inherited from

[`FormSchemaReturn`](FormSchemaReturn.md).[`scrollIntoView`](FormSchemaReturn.md#scrollintoview)

#### Defined in

[packages/form-schema/type.ts:201](https://github.com/c-eqian/e-plus-ui/blob/583356870441cbe8e3c917dfd7ad56ce5ac6f88a/packages/form-schema/type.ts#L201)

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

#### Inherited from

[`FormSchemaReturn`](FormSchemaReturn.md).[`setFieldsValues`](FormSchemaReturn.md#setfieldsvalues)

#### Defined in

[packages/form-schema/type.ts:196](https://github.com/c-eqian/e-plus-ui/blob/583356870441cbe8e3c917dfd7ad56ce5ac6f88a/packages/form-schema/type.ts#L196)

***

### updateOrAppendFields()

> **updateOrAppendFields**: \<`T`\>(`prop`, `item`) => `Promise`\<`unknown`\>

更新字段属性，如果不存在，将会进行新增

#### Type Parameters

• **T** = `any`

#### Parameters

• **prop**: keyof `T` *extends* `E` ? `E` *extends* `string` ? `E`\<`E`\> : `string` : `string`

• **item**: [`FormItemsSchema`](FormItemsSchema.md)\<`T`\>

#### Returns

`Promise`\<`unknown`\>

#### Inherited from

[`FormSchemaReturn`](FormSchemaReturn.md).[`updateOrAppendFields`](FormSchemaReturn.md#updateorappendfields)

#### Defined in

[packages/form-schema/type.ts:241](https://github.com/c-eqian/e-plus-ui/blob/583356870441cbe8e3c917dfd7ad56ce5ac6f88a/packages/form-schema/type.ts#L241)

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

#### Inherited from

[`FormSchemaReturn`](FormSchemaReturn.md).[`validate`](FormSchemaReturn.md#validate)

#### Defined in

[packages/form-schema/type.ts:207](https://github.com/c-eqian/e-plus-ui/blob/583356870441cbe8e3c917dfd7ad56ce5ac6f88a/packages/form-schema/type.ts#L207)

***

### validateField()

> **validateField**: (...`args`) => `Promise`\<`any`\>

校验表单某个字段验证

#### Parameters

• ...**args**: `any`[]

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`FormSchemaReturn`](FormSchemaReturn.md).[`validateField`](FormSchemaReturn.md#validatefield)

#### Defined in

[packages/form-schema/type.ts:215](https://github.com/c-eqian/e-plus-ui/blob/583356870441cbe8e3c917dfd7ad56ce5ac6f88a/packages/form-schema/type.ts#L215)
