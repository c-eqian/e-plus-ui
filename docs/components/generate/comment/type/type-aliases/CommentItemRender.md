[**e-plus-ui**](../../../README.md) • **Docs**

***

[e-plus-ui](../../../modules.md) / [comment/type](../README.md) / CommentItemRender

# Type Alias: CommentItemRender()\<T, P\>

> **CommentItemRender**\<`T`, `P`\>: (`scoped`) => `VNode`\<`any`, `any`, `any`\> \| `VNode`\<`any`, `any`, `any`\>[] \| `P`

渲染器

## Type Parameters

• **T** = `any`

• **P** = `number` \| `string` \| `undefined`

## Parameters

• **scoped**

• **scoped.isSubReply?**: `boolean`

是否为回复的评论

• **scoped.item**: `T`

当前评论

• **scoped.level1?**: `T`

一级评论

• **scoped.reply?**: `T`

回复引用

## Returns

`VNode`\<`any`, `any`, `any`\> \| `VNode`\<`any`, `any`, `any`\>[] \| `P`

## Defined in

packages/comment/type.ts:15
