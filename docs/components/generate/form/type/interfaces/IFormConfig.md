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

packages/form/type.ts:71

***

### model

> **model**: `Ref`\<\{ \[P in string \| number \| symbol\]: T\[P\] \}\>

表单model
建议使用响应式方法

#### Defined in

packages/form/type.ts:66

***

### size?

> `optional` **size**: `""` \| `"small"` \| `"large"` \| `"default"`

用于控制该表单内组件的尺寸

#### Defined in

packages/form/type.ts:75
