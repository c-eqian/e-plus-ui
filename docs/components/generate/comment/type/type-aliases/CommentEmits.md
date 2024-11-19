[**e-plus-ui**](../../../README.md) • **Docs**

***

[e-plus-ui](../../../modules.md) / [comment/type](../README.md) / CommentEmits

# Type Alias: CommentEmits

> **CommentEmits**: `object`

事件

## Type declaration

### actions()

> **actions**: (`type`, `IResolveParams`) => `void`

更多操作按钮点击事件；如果时自定义时，将会失效

#### Parameters

• **type**: `0` \| `1`

0 删除，1 投诉

• **IResolveParams**: `any`

#### Returns

`void`

### click-like()

> **click-like**: (`data`) => `void`

点赞事件

#### Parameters

• **data**: [`IResolveParams`](../interfaces/IResolveParams.md)

#### Returns

`void`

### confirm-reply()

> **confirm-reply**: (`data`) => `void`

提交回复

#### Parameters

• **data**: [`IResolveParams`](../interfaces/IResolveParams.md)

#### Returns

`void`

### load()

> **load**: (`data`) => `void`

加载数据

#### Parameters

• **data**: [`LoadData`](LoadData.md)

#### Returns

`void`

## Defined in

[packages/comment/type.ts:422](https://github.com/c-eqian/e-plus-ui/blob/583356870441cbe8e3c917dfd7ad56ce5ac6f88a/packages/comment/type.ts#L422)
