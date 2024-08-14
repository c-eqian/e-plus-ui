[**e-plus-ui**](../../../README.md) • **Docs**

***

[e-plus-ui](../../../modules.md) / [comment/type](../README.md) / ICommentFields

# Type Alias: ICommentFields\<T\>

> **ICommentFields**\<`T`\>: `object`

字段配置

## Type Parameters

• **T** = `any`

## Index Signature

 \[`k`: `string`\]: `any`

## Type declaration

### avatar?

> `optional` **avatar**: [`GetTypeFrom`](GetTypeFrom.md)\<`T`\>

用户头像地址

#### Default

```ts
userInfo.avatar
```

### children?

> `optional` **children**: [`GetTypeFrom`](GetTypeFrom.md)\<`T`\>

二级评字段
与 subComment的区别是，subComment的数据结构中的二级评论会有children

#### Default

```ts
children
```

### commentId?

> `optional` **commentId**: [`GetTypeFrom`](GetTypeFrom.md)\<`T`\>

评论ID

#### Default

```ts
commentId
```

### content?

> `optional` **content**: [`GetTypeFrom`](GetTypeFrom.md)\<`T`\>

评论内容

#### Default

```ts
content
```

### createDate?

> `optional` **createDate**: [`GetTypeFrom`](GetTypeFrom.md)\<`T`\>

创建时间

#### Default

```ts
createDate
```

### ipAddress?

> `optional` **ipAddress**: [`GetTypeFrom`](GetTypeFrom.md)\<`T`\>

ip地址

### level?

> `optional` **level**: [`GetTypeFrom`](GetTypeFrom.md)\<`T`\>

等级

### like?

> `optional` **like**: [`GetTypeFrom`](GetTypeFrom.md)\<`T`\>

是否点赞

#### Default

```ts
like
```

### likeCount?

> `optional` **likeCount**: [`GetTypeFrom`](GetTypeFrom.md)\<`T`\>

当前评论点赞数

#### Default

```ts
likeCount
```

### parentId?

> `optional` **parentId**: [`GetTypeFrom`](GetTypeFrom.md)\<`T`\>

二级评：父级ID 也就是第一级的评论ID

#### Default

```ts
parentId
```

### publisher?

> `optional` **publisher**: [`GetTypeFrom`](GetTypeFrom.md)\<`T`\>

是否为当前账号的评论

#### Default

```ts
publisher
```

### reply?

> `optional` **reply**: [`GetTypeFrom`](GetTypeFrom.md)\<`T`\>

回复的二级评论，只有dataLevel=2时才会生效

#### Default

```ts
reply
```

### replyId?

> `optional` **replyId**: [`GetTypeFrom`](GetTypeFrom.md)\<`T`\>

二级评：当前被回复的评论ID

#### Default

```ts
replyId
```

### subComment?

> `optional` **subComment**: [`GetTypeFrom`](GetTypeFrom.md)\<`T`\>

二级评论数据字段
与一级的一致

#### Default

```ts
subComment
```

### updateDate?

> `optional` **updateDate**: [`GetTypeFrom`](GetTypeFrom.md)\<`T`\>

更新时间

#### Default

```ts
updateDate
```

### userId?

> `optional` **userId**: [`GetTypeFrom`](GetTypeFrom.md)\<`T`\>

用户id

#### Default

```ts
userInfo.userId
```

### username?

> `optional` **username**: [`GetTypeFrom`](GetTypeFrom.md)\<`T`\>

当前评论的用户名，支持链式，如{a:{b:1}} a.b => 1

#### Default

```ts
userInfo.username
```

## Defined in

[packages/comment/type.ts:134](https://github.com/c-eqian/e-plus-ui/blob/9afe3efca84f90347511649ce68bd1a732377c38/packages/comment/type.ts#L134)
