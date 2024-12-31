# EpComment
## Parameter 参数
| 参数 | 类型 | 可选 | 描述 | 默认值 |
| --- | --- | --- | --- | --- |
| data | `ICommentData` | `false` |  | -
| config | `ICommentConfig` | `false` |  | -
| beforeReply | `function` | `false` | 点击回复之前，如果返回false,则不会进行回复 | -
| load | `CommentLoadFn` | `false` |  | -
## Slots 插槽
| 插槽名 | 描述 |
|  ---  | --- |
| `avatar` | - |
| `level` | - |
| `content` | - |
| `left` | - |
| `right` | - |
| `actions` | - |
| `actionsExtra` | - |
| `editor` | - |
## Events 事件
| 事件名 | 类型 |  描述 |
| --- | --- |  --- |
| click-like | - |  |
| actions | - |  |
| confirm-reply | - |  |
