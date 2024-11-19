[**e-plus-ui**](../../../README.md) • **Docs**

***

[e-plus-ui](../../../modules.md) / [comment/type](../README.md) / CommentDataRow

# Type Alias: CommentDataRow\<T\>

> **CommentDataRow**\<`T`\>: [`CommentDataRowExTra`](CommentDataRowExTra.md)\<`T`\> & `object`

一级评论明细

## Type declaration

### children?

> `optional` **children**: [`CommentDataRow`](CommentDataRow.md)\<`T`\>[]

二级评下的评论

### commentId?

> `optional` **commentId**: `number` \| `string`

评论ID

### content?

> `optional` **content**: `string`

评论内容

### createDate?

> `optional` **createDate**: `string` \| `Date`

创建时间

### ipAddress?

> `optional` **ipAddress**: `string`

IP属地

### level?

> `optional` **level**: `number`

等级，默认最高级 6

### like?

> `optional` **like**: `number` \| `boolean`

是否点赞

### likeCount?

> `optional` **likeCount**: `number`

当前评论点赞数

### parentId?

> `optional` **parentId**: `number`

二级评：父级ID 也就是第一级的评论ID

### publisher?

> `optional` **publisher**: `number` \| `boolean`

是否为当前账号的评论

### reply?

> `optional` **reply**: [`CommentDataRow`](CommentDataRow.md)\<`T`\>

被回复的二级评论的数据结构

### replyId?

> `optional` **replyId**: `number` \| `null`

二级评：当前被回复的ID

### subComment?

> `optional` **subComment**: [`ICommentData`](../interfaces/ICommentData.md)

二级评论

### updateDate?

> `optional` **updateDate**: `string`

更新时间

### userInfo?

> `optional` **userInfo**: [`ICommentUserInfo`](../interfaces/ICommentUserInfo.md)

当前评论的用户信息

## Type Parameters

• **T** = `any`

## Defined in

[packages/comment/type.ts:50](https://github.com/c-eqian/e-plus-ui/blob/583356870441cbe8e3c917dfd7ad56ce5ac6f88a/packages/comment/type.ts#L50)
