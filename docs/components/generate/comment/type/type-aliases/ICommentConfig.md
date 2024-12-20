[**e-plus-ui**](../../../README.md) • **Docs**

***

[e-plus-ui](../../../modules.md) / [comment/type](../README.md) / ICommentConfig

# Type Alias: ICommentConfig\<T\>

> **ICommentConfig**\<`T`\>: `object`

评论配置

## Type Parameters

• **T** = `any`

## Type declaration

### actionsExtra?

> `optional` **actionsExtra**: `boolean` \| [`CommentItemRender`](CommentItemRender.md)\<`T`\>

扩展渲染操作
支持自定义 默认内置，删除（delete）、投诉（complaint）

#### Default

```ts
true
```

### commentFields?

> `optional` **commentFields**: [`ICommentFields`](ICommentFields.md)

字段配置

### dataLevel?

> `optional` **dataLevel**: `number`

数据的层级结构
如果是二级的数据结构，需包含reply字段，此字段也可以通过`ICommentFields`配置

#### Default

```ts
2
```

### defaultAvatar?

> `optional` **defaultAvatar**: `string`

默认头像

### emojis?

> `optional` **emojis**: `boolean` \| [`EmojiData`](../../../editor/type/interfaces/EmojiData.md)[] \| () => [`EmojiData`](../../../editor/type/interfaces/EmojiData.md)[]

表情包

#### Default

```ts
false
```

### foldBtnPosition?

> `optional` **foldBtnPosition**: `"left"` \| `"right"`

折叠按钮位置

#### Default

```ts
left
```

### hasMore?

> `optional` **hasMore**: `string`

是否还有更多

#### Default

```ts
'hasMore'
```

### lines?

> `optional` **lines**: `number`

文本显示几行，超出显示...

#### Default

```ts
3
```

### list?

> `optional` **list**: `string`

数据属性

#### Default

```ts
list
```

### showIpAddress?

> `optional` **showIpAddress**: `boolean` \| [`CommentItemRender`](CommentItemRender.md)\<`T`\>

显示地址
支持自定义返回

#### Default

```ts
false
```

### showLevel?

> `optional` **showLevel**: `boolean` \| [`CommentItemRender`](CommentItemRender.md)\<`T`\>

是否显示等级
支持自定义返回

#### Default

```ts
false
```

### sortType?

> `optional` **sortType**: `"asc"` \| `"desc"`

新增时，以哪个排序方式添加
排序方法，默认desc，表示在前面插入数据（降序）

#### Default

```ts
desc
```

### subStyle?

> `optional` **subStyle**: `CSSProperties`

子评论样式

### useEmojis?

> `optional` **useEmojis**: `boolean`

使用表情

## Defined in

[packages/comment/type.ts:226](https://github.com/c-eqian/e-plus-ui/blob/583356870441cbe8e3c917dfd7ad56ce5ac6f88a/packages/comment/type.ts#L226)
