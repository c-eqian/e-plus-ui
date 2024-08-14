[**e-plus-ui**](../../../README.md) • **Docs**

***

[e-plus-ui](../../../modules.md) / [form-schema/types](../README.md) / ComponentPropsByType

# Type Alias: ComponentPropsByType\<T, P\>

> **ComponentPropsByType**\<`T`, `P`\>: `P` *extends* keyof [`ComponentTypeProps`](../../components/types/interfaces/ComponentTypeProps.md) ? [`ComponentTypeProps`](../../components/types/interfaces/ComponentTypeProps.md)\[`P`\] : `Record`\<`string`, `any`\>

使用映射类型创建一个新类型，该类型将每个组件类型映射到其对应的属性类型

## Type Parameters

• **T**

• **P**

## Defined in

[packages/form-schema/types/index.ts:7](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/form-schema/types/index.ts#L7)
