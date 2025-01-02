# EpDialog
## Slots 插槽
| 插槽名 | 描述 |
|  ---  | --- |
| `default` | - |
| `header` | - |
| `footer` | - |
## Events 事件
| 事件名 | 类型 |  描述 |
| --- | --- |  --- |
| update:visible | - |  |
| confirmed | - | 确认按钮，如果返回`false`或者返回一个promise,错误时将阻止关闭。或者直接调用done回调进行关闭 |
| canceled | - | 关闭按钮 如果返回`false`或者返回一个promise,错误时将阻止关闭。或者直接调用done回调进行关闭 |
| open | - | 打开前 |
| opened | - | 打开后 |
| close | - | 关闭前 |
| closed | - | 关闭后 |
| openAutoFocus | - | 打开聚焦 |
| closeAutoFocus | - | 关闭聚焦 |
