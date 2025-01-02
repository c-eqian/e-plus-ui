# EpDialog
## Parameter 参数
| 参数 | 类型 | 可选 | 描述 | 默认值 |
| --- | --- | --- | --- | --- |
| visible | `boolean` | `true` | 是否显示，重写`el-dialog`中的`visible` | -
| footerProps | `FooterProps` | `false` | 底部配置参数 | -
| isShowClose | `boolean` | `false` | 是否显示关闭图标 | `true`
| isUseFullScreen | `boolean` | `false` | 是否使用全屏 | `false`
| isUseHeaderLine | `boolean` | `false` | 是否使用顶部分割线 | `true`
| dialogProps | `DialogComponentProps` | `false` | el-dialog参数 | -
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
