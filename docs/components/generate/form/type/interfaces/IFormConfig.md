[**e-plus-ui**](../../../README.md) • **Docs**

***

[e-plus-ui](../../../modules.md) / [form/type](../README.md) / IFormConfig

# Interface: IFormConfig\<T\>

## Type Parameters

• **T** = `any`

## Properties

### labelWidth?

> `optional` **labelWidth**: `string` \| `number`

标签的长度，例如 '50px'。 作为 Form 直接子元素的 form-item 会继承该值。
可以使用 auto。

#### Defined in

[packages/form/type.ts:71](https://github.com/c-eqian/e-plus-ui/blob/583356870441cbe8e3c917dfd7ad56ce5ac6f88a/packages/form/type.ts#L71)

***

### model

> **model**: `Ref`\<\{ \[P in string \| number \| symbol\]: T\[P\] \}\>

表单model
建议使用响应式方法

#### Defined in

[packages/form/type.ts:66](https://github.com/c-eqian/e-plus-ui/blob/583356870441cbe8e3c917dfd7ad56ce5ac6f88a/packages/form/type.ts#L66)

***

### size?

> `optional` **size**: `""` \| `"small"` \| `"large"` \| `"default"`

用于控制该表单内组件的尺寸

#### Defined in

[packages/form/type.ts:75](https://github.com/c-eqian/e-plus-ui/blob/583356870441cbe8e3c917dfd7ad56ce5ac6f88a/packages/form/type.ts#L75)
