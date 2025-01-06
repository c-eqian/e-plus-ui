# EpDialog
## Parameter 参数
| 参数 | 类型 | 可选 | 描述 | 默认值 |
| --- | --- | --- | --- | --- |
| dialogProps | `DialogComponentProps` | `false` | el-dialog参数 | -
| footerProps | `FooterProps` | `false` | 底部配置参数 | -
| isShowClose | `boolean` | `false` | 是否显示关闭图标 | `true`
| isUseFullScreen | `boolean` | `false` | 是否使用全屏 | `false`
| isUseHeaderLine | `boolean` | `false` | 是否使用顶部分割线 | `true`
| visible | `boolean` | `true` | 是否显示，重写`el-dialog`中的`visible` | -
## Slots 插槽
| 插槽名 | 描述 |
|  ---  | --- |
| `default` | 默认插槽 |
| `footer` | 底部插槽 |
| `header` | 头部插槽 |
## Events 事件
| 事件名 | 类型 |  描述 |
| --- | --- |  --- |
| canceled | - | 关闭按钮 如果返回`false`或者返回一个promise,错误时将阻止关闭。或者直接调用done回调进行关闭 |
| close | - | 关闭前 |
| closeAutoFocus | - | 关闭聚焦 |
| closed | - | 关闭后 |
| confirmed | - | 确认按钮，如果返回`false`或者返回一个promise,错误时将阻止关闭。或者直接调用done回调进行关闭 |
| open | - | 打开前 |
| openAutoFocus | - | 打开聚焦 |
| opened | - | 打开后 |
| update:visible | - |  |
