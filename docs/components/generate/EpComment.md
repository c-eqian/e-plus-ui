# EpComment
## Parameter 参数
| 参数 | 类型 | 必选 | 描述 | 默认值 |
| :-------: | :-------: | :-------: | :-------: | :-------: |
| beforeReply | `function` | `false` | 点击回复之前，如果返回false,则不会进行回复 | -|
| config | `ICommentConfig` | `false` |  | -|
| data | `ICommentData` | `false` |  | -|
| load | `CommentLoadFn` | `false` |  | -|
## Slots 插槽
|    插槽名    |  描述   |
|:---------:|:-----:|
| `actions` | 底部操作 |
| `actionsExtra` | 扩展操作，如果使用actions，此插槽亦可以忽略 |
| `avatar` | 头像 |
| `content` | 内容 |
| `editor` | 输入框 |
| `left` | 左侧 |
| `level` | 等级 |
| `right` | 右侧 |
## Events 事件
|   事件名   |   类型     |  描述      |
| :-------: | :-------: | :-------: |
| click-like | - |  |
| actions | - |  |
| confirm-reply | - |  |
