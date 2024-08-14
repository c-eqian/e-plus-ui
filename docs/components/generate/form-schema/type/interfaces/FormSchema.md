[**e-plus-ui**](../../../README.md) • **Docs**

***

[e-plus-ui](../../../modules.md) / [form-schema/type](../README.md) / FormSchema

# Interface: FormSchema\<T\>

表单

## Extends

- `Partial`\<`FormProps`\>

## Type Parameters

• **T** = `any`

## Properties

### columns?

> `optional` **columns**: `number`

显示列数

#### Default

```ts
3
```

#### Defined in

[packages/form-schema/type.ts:150](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/form-schema/type.ts#L150)

***

### disabled?

> `readonly` `optional` **disabled**: `boolean`

#### Inherited from

`Partial.disabled`

#### Defined in

node\_modules/element-plus/es/components/form/src/form.d.ts:43

***

### hideRequiredAsterisk?

> `readonly` `optional` **hideRequiredAsterisk**: `boolean`

#### Inherited from

`Partial.hideRequiredAsterisk`

#### Defined in

node\_modules/element-plus/es/components/form/src/form.d.ts:29

***

### inline?

> `readonly` `optional` **inline**: `boolean`

#### Inherited from

`Partial.inline`

#### Defined in

node\_modules/element-plus/es/components/form/src/form.d.ts:24

***

### inlineMessage?

> `readonly` `optional` **inlineMessage**: `boolean`

#### Inherited from

`Partial.inlineMessage`

#### Defined in

node\_modules/element-plus/es/components/form/src/form.d.ts:25

***

### isSearch?

> `optional` **isSearch**: `boolean`

是否使用查询表单，设置此参数，表单相关属性会失效，仅提供查询模式

#### Default

```ts
false
```

#### Defined in

[packages/form-schema/type.ts:145](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/form-schema/type.ts#L145)

***

### items

> **items**: [`FormItemsSchema`](FormItemsSchema.md)\<`T`\>[]

表单项配置

#### Defined in

[packages/form-schema/type.ts:154](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/form-schema/type.ts#L154)

***

### labelPosition?

> `readonly` `optional` **labelPosition**: `EpPropMergeType`\<`StringConstructor`, `"left"` \| `"right"` \| `"top"`, `unknown`\>

#### Inherited from

`Partial.labelPosition`

#### Defined in

node\_modules/element-plus/es/components/form/src/form.d.ts:20

***

### labelSuffix?

> `readonly` `optional` **labelSuffix**: `string`

#### Inherited from

`Partial.labelSuffix`

#### Defined in

node\_modules/element-plus/es/components/form/src/form.d.ts:23

***

### labelWidth?

> `readonly` `optional` **labelWidth**: `EpPropMergeType`\<readonly [`StringConstructor`, `NumberConstructor`], `unknown`, `unknown`\>

#### Inherited from

`Partial.labelWidth`

#### Defined in

node\_modules/element-plus/es/components/form/src/form.d.ts:22

***

### model?

> `readonly` `optional` **model**: `Record`\<`string`, `any`\>

#### Inherited from

`Partial.model`

#### Defined in

node\_modules/element-plus/es/components/form/src/form.d.ts:13

***

### requireAsteriskPosition?

> `readonly` `optional` **requireAsteriskPosition**: `EpPropMergeType`\<`StringConstructor`, `"left"` \| `"right"`, `unknown`\>

#### Inherited from

`Partial.requireAsteriskPosition`

#### Defined in

node\_modules/element-plus/es/components/form/src/form.d.ts:21

***

### rules?

> `readonly` `optional` **rules**: `Partial`\<`Record`\<`string`, `Arrayable`\<`FormItemRule`\>\>\>

#### Inherited from

`Partial.rules`

#### Defined in

node\_modules/element-plus/es/components/form/src/form.d.ts:14

***

### scrollIntoViewOptions?

> `readonly` `optional` **scrollIntoViewOptions**: `EpPropMergeType`\<readonly [`ObjectConstructor`, `BooleanConstructor`], `unknown`, `unknown`\>

#### Inherited from

`Partial.scrollIntoViewOptions`

#### Defined in

node\_modules/element-plus/es/components/form/src/form.d.ts:31

***

### scrollToError?

> `readonly` `optional` **scrollToError**: `boolean`

#### Inherited from

`Partial.scrollToError`

#### Defined in

node\_modules/element-plus/es/components/form/src/form.d.ts:30

***

### showMessage?

> `readonly` `optional` **showMessage**: `EpPropMergeType`\<`BooleanConstructor`, `unknown`, `unknown`\>

#### Inherited from

`Partial.showMessage`

#### Defined in

node\_modules/element-plus/es/components/form/src/form.d.ts:27

***

### size?

> `readonly` `optional` **size**: `EpPropMergeType`\<`StringConstructor`, `""` \| `"small"` \| `"default"` \| `"large"`, `unknown`\>

#### Inherited from

`Partial.size`

#### Defined in

node\_modules/element-plus/es/components/form/src/form.d.ts:37

***

### statusIcon?

> `readonly` `optional` **statusIcon**: `boolean`

#### Inherited from

`Partial.statusIcon`

#### Defined in

node\_modules/element-plus/es/components/form/src/form.d.ts:26

***

### validateOnRuleChange?

> `readonly` `optional` **validateOnRuleChange**: `EpPropMergeType`\<`BooleanConstructor`, `unknown`, `unknown`\>

#### Inherited from

`Partial.validateOnRuleChange`

#### Defined in

node\_modules/element-plus/es/components/form/src/form.d.ts:28
