# EpLoading
## Parameter 参数
| 参数 | 类型 | 必选 | 描述 | 默认值 |
| :-------: | :-------: | :-------: | :-------: | :-------: |
| fullscreen | `boolean  \|  undefined` | `false` | 是否全屏 | -|
| iconColor | `MaybeRef<string>  \|  undefined` | `false` | 图标颜色 | -|
| maskBackgroundColor | `MaybeRef<string>  \|  undefined` | `false` | 蒙层颜色 | -|
| size | `default  \|  small  \|  large  \|  undefined` | `false` | 大小 | -|
| text | `string  \|  undefined` | `false` | 加载文本 | -|
| textColor | `MaybeRef<string>  \|  undefined` | `false` | 文字颜色 | -|
| type | `circle  \|  dot  \|  undefined` | `false` | 图标类型 | -|
| visible | `boolean  \|  undefined` | `false` |  | -|
| zIndex | `number  \|  undefined` | `false` | 层级 默认根据element-plus自动管理，自定义时则优先使用该值 | -|
## Slots 插槽
|    插槽名    |  描述   |
|:---------:|:-----:|
| `default` | - |
| `icon` | - |
## Events 事件
|   事件名   |   类型     |  描述      |
| :-------: | :-------: | :-------: |
| update:visible | - |  |
