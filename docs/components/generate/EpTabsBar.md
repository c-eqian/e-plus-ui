# EpTabsBar
## Parameter 参数
| 参数 | 类型 | 必选 | 描述 | 默认值 |
| :-------: | :-------: | :-------: | :-------: | :-------: |
| tabs | `Array` | `true` | tabs数据列表 | -|
| closeable | `boolean` | `false` | 是否可关闭 | -|
| maxTabWidth | `number \| string` | `false` | 最大tab宽度 | -|
| modelValue | `string` | `false` | 当前绑定值 | ``|
| showScrollButton | `boolean` | `false` | 当出现滚动时是否需要左右两边按钮 | `true`|
| tabStyle | `CSSProperties` | `false` | tab样式 | -|
## Slots 插槽
|    插槽名    |  描述   |
|:---------:|:-----:|
| `left` | 左侧插槽 |
| `right` | 右侧插槽 |
## Events 事件
|   事件名   |   类型     |  描述      |
| :-------: | :-------: | :-------: |
| deleteTab | - | 删除项 |
| selectTab | - | 点击tab事件 |
| update:modelValue | - | 更新 |
