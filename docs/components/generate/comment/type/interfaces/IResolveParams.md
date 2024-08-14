[**e-plus-ui**](../../../README.md) • **Docs**

***

[e-plus-ui](../../../modules.md) / [comment/type](../README.md) / IResolveParams

# Interface: IResolveParams\<T\>

## Type Parameters

• **T** = `any`

## Properties

### $index

> **$index**: `number`

父节点索引

#### Defined in

[packages/comment/type.ts:313](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/comment/type.ts#L313)

***

### clear()?

> `optional` **clear**: (`val`) => `void`

提交回复，执行回调是否清空及关闭输入框
仅回复评论时存在

#### Parameters

• **val**: `boolean`

#### Returns

`void`

#### Defined in

[packages/comment/type.ts:330](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/comment/type.ts#L330)

***

### index

> **index**: `number`

当前项索引

#### Defined in

[packages/comment/type.ts:309](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/comment/type.ts#L309)

***

### isLike?

> `optional` **isLike**: `number` \| `boolean`

是否点赞，点赞事件具备
仅点击点赞时存在

#### Defined in

[packages/comment/type.ts:318](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/comment/type.ts#L318)

***

### isSubReply

> **isSubReply**: `boolean`

是否是二级回复

#### Defined in

[packages/comment/type.ts:297](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/comment/type.ts#L297)

***

### item

> **item**: `T`

当前评论项

#### Defined in

[packages/comment/type.ts:293](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/comment/type.ts#L293)

***

### level1

> **level1**: `T`

所属一级评论

#### Defined in

[packages/comment/type.ts:301](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/comment/type.ts#L301)

***

### likeDone()?

> `optional` **likeDone**: (`val`) => `void`

执行修改点赞状态
仅点击点赞时存在

#### Parameters

• **val**: `number` \| `boolean`

#### Returns

`void`

#### Defined in

[packages/comment/type.ts:324](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/comment/type.ts#L324)

***

### reply

> **reply**: `T`

回复

#### Defined in

[packages/comment/type.ts:305](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/comment/type.ts#L305)

***

### resolve()?

> `optional` **resolve**: (`items`) => `void`

回复新增
仅回复评论时存在

#### Parameters

• **items**: `T` \| `T`[]

#### Returns

`void`

#### Defined in

[packages/comment/type.ts:341](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/comment/type.ts#L341)

***

### value?

> `optional` **value**: `string`

回复事件内容
仅回复评论时存在

#### Defined in

[packages/comment/type.ts:335](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/comment/type.ts#L335)
