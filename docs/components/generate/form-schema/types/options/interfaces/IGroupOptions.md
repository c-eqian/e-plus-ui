[**e-plus-ui**](../../../../README.md) • **Docs**

***

[e-plus-ui](../../../../modules.md) / [form-schema/types/options](../README.md) / IGroupOptions

# Interface: IGroupOptions

表单组件 分组配置
如，单选组件、多选组件、选择组件

## Indexable

 \[`k`: `string`\]: `any`

## Properties

### children?

> `optional` **children**: [`IGroupOptions`](IGroupOptions.md)[]

子节点、应用于select-group

#### Defined in

packages/form-schema/types/options.ts:21

***

### disabled?

> `optional` **disabled**: `boolean`

是否禁用

#### Defined in

packages/form-schema/types/options.ts:17

***

### label

> **label**: `string`

标签名称

#### Defined in

packages/form-schema/types/options.ts:13

***

### value?

> `optional` **value**: `string` \| `number` \| `boolean` \| `any`[]

应用值,如果是select-group,则外层没有value

#### Defined in

packages/form-schema/types/options.ts:9
