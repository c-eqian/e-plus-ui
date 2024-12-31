# EpNoticeBar
## Parameter 参数
| 参数 | 类型 | 可选 | 描述 |
| --- | --- | --- | --- |
| icon | `boolean` | `false` | 是否显示通知图标
| closeable | `boolean` | `false` | 是否可关闭
| list | `Array` | `false` | 数据列表
list 与 text必须传入一个，如果是list则以垂直方式滚动
| text | `string` | `false` | 单行文本
list 与 text必须传入一个，如果是text则以水平方式滚动
| width | `number\|string` | `false` | 滚动区域宽度,如果传入数字，默认转成px单位
| height | `number\|string` | `false` | 滚动区域高度,如果传入数字，默认转成px单位
| customStyle | `CSSProperties` | `false` | 自定义样式
| speed | `number` | `false` | 滚动速度 单位ms
| step | `number` | `false` | 水平滚动动画每次执行时移动距离
## Slots 插槽
| 插槽名 | 描述 |
|  ---  | --- |
| `left-icon` | - |
| `right-icon` | - |
## Events 事件
| 事件名 | 类型 |  描述 |
| --- | --- |  --- |
| close | - |  |
