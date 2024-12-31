# EpLine
## Parameter 参数
| 参数 | 类型 | 可选 | 描述 |
| --- | --- | --- | --- |
| direction | `horizontal\|vertical` | `false` | 分割线方向
| position | `ILineTextPos` | `false` | 文本位置
| borderWidth | `string` | `false` | 边框宽度
| dashed | `boolean` | `false` | 是否为虚线
| offset | `string\|number` | `false` | 偏移量
当设置position=`center`时，该值无效
| color | `string` | `false` | 边框颜色
| margin | `string` | `false` | 边距
| linear | `boolean` | `false` | 是否使用渐变
只有在position=`center`或者没有default slot时有效
## Slots 插槽
| 插槽名 | 描述 |
|  ---  | --- |
| `default` | - |
