# Comment  

::: tip 提示
类型定义说明通过自动生成
:::

## ICommentUserInfo 

评论人信息

### avatar


- **Type:** `string`


### userId


- **Type:** `number`


### username


- **Type:** `string`


## ICommentData 

评论基础

### total
数据总数


- **Type:** `number`


### hasMore
是否还有更多


- **Type:** `boolean`


### list
数据列表


- **Type:** `CommentDataRow<T>[]`


## ICommentFields 

字段配置

### content
评论内容


- **Type:** `GetTypeFrom<T>`


- **Default:** `content`

### createDate
创建时间

- **Type:** `GetTypeFrom<T>`

- **Default:** `createDate`

### commentId
评论ID


- **Type:** `GetTypeFrom<T>`


- **Default:** `commentId`

### publisher
是否为当前账号的评论


- **Type:** `GetTypeFrom<T>`


- **Default:** `publisher`

### likeCount
当前评论点赞数


- **Type:** `GetTypeFrom<T>`


- **Default:** `likeCount`

### like
是否点赞


- **Type:** `GetTypeFrom<T>`


- **Default:** `like`

### updateDate
更新时间


- **Type:** `GetTypeFrom<T>`


- **Default:** `updateDate`

### username
当前评论的用户名，支持链式，如{a:{b:1}} a.b => 1


- **Type:** `GetTypeFrom<T>`


- **Default:** `userInfo.username`

### avatar
用户头像地址


- **Type:** `GetTypeFrom<T>`


- **Default:** `userInfo.avatar`

### userId
用户id


- **Type:** `GetTypeFrom<T>`


- **Default:** `userInfo.userId`

### children

二级评字段
与 subComment的区别是，subComment的数据结构中的二级评论会有children


- **Type:** `GetTypeFrom<T>`


- **Default:** `children`

### subComment
二级评论数据字段 一级的一致

- **Type:** `GetTypeFrom<T>`


- **Default:** `subComment`

### parentId
二级评：父级ID 也就是第一级的评论ID


- **Type:** `GetTypeFrom<T>`


- **Default:** `parentId`

### ipAddress
ip地址


- **Type:** `GetTypeFrom<T>`


### replyId
二级评：当前被回复的评论ID


- **Type:** `GetTypeFrom<T>`


- **Default:** `replyId`

### reply
回复的二级评论，只有dataLevel=2时才会生效


- **Type:** `GetTypeFrom<T>`


- **Default:** `reply`

### level
等级


- **Type:** `GetTypeFrom<T>`


## IResolveParams 



### item
当前评论项


- **Type:** `CommentDataRow`


### isSubReply
是否是二级回复


- **Type:** `boolean`


### level1
所属一级评论


- **Type:** `CommentDataRow`


### reply
回复


- **Type:** `CommentDataRow`


### index
当前项索引


- **Type:** `number`


### $index
父节点索引


- **Type:** `number`


### isLike
是否点赞，点赞事件具备


- **Type:** `boolean | number`


### likeDone
执行修改点赞状态


- **Type:** `(val: boolean | number) => void`


### clear
提交回复，执行回调是否清空及关闭输入框


- **Type:** `(val: boolean) => void`


### value
回复事件内容


- **Type:** `string`


### resolve
回复新增


- **Type:** `(items: CommentDataRow | CommentDataRow[]) => void`


## GetTypeFrom
根据配置类型提取字段类型


- **Type:**
 `keyof T extends infer E
  ? E extends string
    ? E
    : string
  : string`

## CommentItemRender
渲染器
```typescript
 export type CommentItemRender = (scoped: {
  /**
   * 当前评论
   */
  item: T;
  /**
   * 是否为回复的评论
   */
  isSubReply?: boolean;
  /**
   * 一级评论
   */
  level1?: T;
  /**
   * 回复引用
   */
  reply?: T;
}) =>
  | VNode<any, any, any>
  | VNode<any, any, any>[]
  | null
  | string
  | number
  | undefined
```
## CommentDataRowExTra


- **Type:**
 `{
  [P in keyof T]: T[P] extends infer T ? T : any;
 }`

## CommentDataRow
一级评论明细

```typescript
 export type CommentDataRow = CommentDataRowExTra<T> & {
  /**
   * 评论内容
   */
  content?: string;
  /**
   * 创建时间
   */
  createDate?: string | Date;
  /**
   * 评论ID
   */
  commentId?: number;
  /**
   * 是否为当前账号的评论
   */
  publisher?: number | boolean;
  /**
   * 当前评论点赞数
   */
  likeCount?: number;
  /**
   * 更新时间
   */
  updateDate?: string;
  /**
   * 当前评论的用户信息
   */
  userInfo?: ICommentUserInfo;
  /**
   * 二级评下的评论
   */
  children?: CommentDataRow<T>[];
  /**
   * 二级评论
   */
  subComment?: ICommentData;
  /**
   * 二级评：父级ID 也就是第一级的评论ID
   */
  parentId?: number;
  /**
   * 二级评：当前被回复的ID
   */
  replyId?: number | null;
  /**
   * IP属地
   */
  ipAddress?: string;
  /**
   * 被回复的二级评论的数据结构
   */
  reply?: CommentDataRow<T>;
  /**
   * 是否点赞
   */
  like?: number | boolean;
  /**
   * 等级，默认最高级 6
   */
  level?: number;
}

```
## ICommentConfig
评论配置
```typescript
export type ICommentConfig = {
  /**
   * 是否显示等级
   * 支持自定义返回
   * @default false
   */
  showLevel?: boolean | CommentItemRender<T>;
  /**
   * 数据的层级结构
   * 如果是二级的数据结构，需包含reply字段，此字段也可以通过`ICommentFields`配置
   * @default 2
   */
  dataLevel?: number;
  /**
   * 显示地址
   * 支持自定义返回
   * @default false
   */
  showIpAddress?: boolean | CommentItemRender<T>;
  /**
   * 更多操作
   * @default false
   */
  moreOperations?: boolean | CommentItemRender<T>;
  /**
   * 表情包
   * @default false
   */
  emojis?: boolean | EmojiData[] | (() => EmojiData[]);
  /**
   * 使用表情
   */
  useEmojis?: boolean;
  /**
   * 渲染操作
   * 支持自定义
   * @default true
   */
  actions?: boolean | CommentItemRender<T>;
  /**
   * 文本显示几行，超出显示...
   * @default 3
   */
  lines?: number;
  /**
   * 折叠按钮位置
   * @default left
   */
  foldBtnPosition?: 'left' | 'right';
} & ICommentFields<T>
```

## ItemSlots
插槽

| 插槽名称  | 类型                | 说明           |
| --------- | ------------------- | -------------- |
| `avatar`  | `CommentItemRender` | 自定义头像插槽 |
| `right`   | `CommentItemRender` | 自定义右侧内容 |
| `left`    | `CommentItemRender` | 右侧内容       |
| `level`   | `CommentItemRender` | 等级           |
| `actions` | `CommentItemRender` | 评论操作       |
| `editor`  | `CommentItemRender` | 评论输入框     |
| `content` | `CommentItemRender` | 评论显示内容   |

## CommentLoad
加载数据


- **Type:**
 `Pick<
  IResolveParams,
  'resolve' | 'isSubReply' | 'item'>`

## CommentLoadFn
加载数据


- **Type:**
 `(load: CommentLoad) => void`
