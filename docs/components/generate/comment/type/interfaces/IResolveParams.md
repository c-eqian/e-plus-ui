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

[packages/comment/type.ts:324](https://github.com/c-eqian/e-plus-ui/blob/583356870441cbe8e3c917dfd7ad56ce5ac6f88a/packages/comment/type.ts#L324)

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

[packages/comment/type.ts:341](https://github.com/c-eqian/e-plus-ui/blob/583356870441cbe8e3c917dfd7ad56ce5ac6f88a/packages/comment/type.ts#L341)

***

### index

> **index**: `number`

当前项索引

#### Defined in

[packages/comment/type.ts:320](https://github.com/c-eqian/e-plus-ui/blob/583356870441cbe8e3c917dfd7ad56ce5ac6f88a/packages/comment/type.ts#L320)

***

### isLike?

> `optional` **isLike**: `number` \| `boolean`

是否点赞，点赞事件具备
仅点击点赞时存在

#### Defined in

[packages/comment/type.ts:329](https://github.com/c-eqian/e-plus-ui/blob/583356870441cbe8e3c917dfd7ad56ce5ac6f88a/packages/comment/type.ts#L329)

***

### isSubReply

> **isSubReply**: `boolean`

是否是二级回复

#### Defined in

[packages/comment/type.ts:308](https://github.com/c-eqian/e-plus-ui/blob/583356870441cbe8e3c917dfd7ad56ce5ac6f88a/packages/comment/type.ts#L308)

***

### item

> **item**: `T`

当前评论项

#### Defined in

[packages/comment/type.ts:304](https://github.com/c-eqian/e-plus-ui/blob/583356870441cbe8e3c917dfd7ad56ce5ac6f88a/packages/comment/type.ts#L304)

***

### level1

> **level1**: `T`

所属一级评论

#### Defined in

[packages/comment/type.ts:312](https://github.com/c-eqian/e-plus-ui/blob/583356870441cbe8e3c917dfd7ad56ce5ac6f88a/packages/comment/type.ts#L312)

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

[packages/comment/type.ts:335](https://github.com/c-eqian/e-plus-ui/blob/583356870441cbe8e3c917dfd7ad56ce5ac6f88a/packages/comment/type.ts#L335)

***

### reply

> **reply**: `T`

回复

#### Defined in

[packages/comment/type.ts:316](https://github.com/c-eqian/e-plus-ui/blob/583356870441cbe8e3c917dfd7ad56ce5ac6f88a/packages/comment/type.ts#L316)

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

[packages/comment/type.ts:352](https://github.com/c-eqian/e-plus-ui/blob/583356870441cbe8e3c917dfd7ad56ce5ac6f88a/packages/comment/type.ts#L352)

***

### value?

> `optional` **value**: `string`

回复事件内容
仅回复评论时存在

#### Defined in

[packages/comment/type.ts:346](https://github.com/c-eqian/e-plus-ui/blob/583356870441cbe8e3c917dfd7ad56ce5ac6f88a/packages/comment/type.ts#L346)
