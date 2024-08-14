[**e-plus-ui**](../../../README.md) • **Docs**

***

[e-plus-ui](../../../modules.md) / [form/type](../README.md) / FormItemRules

# Interface: FormItemRules\<T\>

扩展validator方法，支持自定义校验前置

## Extends

- `FormItemRule`

## Type Parameters

• **T** = `any`

## Properties

### asyncValidator()?

> `optional` **asyncValidator**: (`rule`, `value`, `callback`, `source`, `options`) => `void` \| `Promise`\<`void`\>

#### Parameters

• **rule**: `InternalRuleItem`

• **value**: `any`

• **callback**

• **source**: `Values`

• **options**: `ValidateOption`

#### Returns

`void` \| `Promise`\<`void`\>

#### Inherited from

`FormItemRule.asyncValidator`

#### Defined in

node\_modules/async-validator/dist-types/interface.d.ts:29

***

### defaultField?

> `optional` **defaultField**: `Rule`

#### Inherited from

`FormItemRule.defaultField`

#### Defined in

node\_modules/async-validator/dist-types/interface.d.ts:26

***

### enum?

> `optional` **enum**: (`undefined` \| `null` \| `string` \| `number` \| `boolean`)[]

#### Inherited from

`FormItemRule.enum`

#### Defined in

node\_modules/async-validator/dist-types/interface.d.ts:22

***

### fields?

> `optional` **fields**: `Record`\<`string`, `Rule`\>

#### Inherited from

`FormItemRule.fields`

#### Defined in

node\_modules/async-validator/dist-types/interface.d.ts:24

***

### len?

> `optional` **len**: `number`

#### Inherited from

`FormItemRule.len`

#### Defined in

node\_modules/async-validator/dist-types/interface.d.ts:21

***

### max?

> `optional` **max**: `number`

#### Inherited from

`FormItemRule.max`

#### Defined in

node\_modules/async-validator/dist-types/interface.d.ts:20

***

### message?

> `optional` **message**: `string` \| (`a`?) => `string`

#### Inherited from

`FormItemRule.message`

#### Defined in

node\_modules/async-validator/dist-types/interface.d.ts:28

***

### min?

> `optional` **min**: `number`

#### Inherited from

`FormItemRule.min`

#### Defined in

node\_modules/async-validator/dist-types/interface.d.ts:19

***

### options?

> `optional` **options**: `ValidateOption`

#### Inherited from

`FormItemRule.options`

#### Defined in

node\_modules/async-validator/dist-types/interface.d.ts:25

***

### pattern?

> `optional` **pattern**: `string` \| `RegExp`

#### Inherited from

`FormItemRule.pattern`

#### Defined in

node\_modules/async-validator/dist-types/interface.d.ts:18

***

### required?

> `optional` **required**: `boolean`

#### Inherited from

`FormItemRule.required`

#### Defined in

node\_modules/async-validator/dist-types/interface.d.ts:17

***

### transform()?

> `optional` **transform**: (`value`) => `any`

#### Parameters

• **value**: `any`

#### Returns

`any`

#### Inherited from

`FormItemRule.transform`

#### Defined in

node\_modules/async-validator/dist-types/interface.d.ts:27

***

### trigger?

> `optional` **trigger**: `Arrayable`\<`string`\>

#### Inherited from

`FormItemRule.trigger`

#### Defined in

node\_modules/element-plus/es/components/form/src/types.d.ts:11

***

### type?

> `optional` **type**: `RuleType`

#### Inherited from

`FormItemRule.type`

#### Defined in

node\_modules/async-validator/dist-types/interface.d.ts:16

***

### validator()?

> `optional` **validator**: (`rule`, `value`, `callback`, `source`, `options`) => `void` \| `SyncValidateResult`

#### Parameters

• **rule**: `InternalRuleItem`

• **value**: `any`

• **callback**

• **source**: `Values`

• **options**: `ValidateOption`

#### Returns

`void` \| `SyncValidateResult`

#### Inherited from

`FormItemRule.validator`

#### Defined in

node\_modules/async-validator/dist-types/interface.d.ts:30

***

### validatorFn()?

> `optional` **validatorFn**: (`model`) => `undefined` \| (`rule`, `value`, `callback`, `source`, `options`) => `void` \| `SyncValidateResult`

#### Parameters

• **model**: `T`

#### Returns

`undefined` \| (`rule`, `value`, `callback`, `source`, `options`) => `void` \| `SyncValidateResult`

#### Defined in

[packages/form/type.ts:13](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/form/type.ts#L13)

***

### whitespace?

> `optional` **whitespace**: `boolean`

#### Inherited from

`FormItemRule.whitespace`

#### Defined in

node\_modules/async-validator/dist-types/interface.d.ts:23
