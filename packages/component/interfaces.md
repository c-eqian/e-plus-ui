# 接口文档

## IEnumItem

| 属性名 | 类型 | 是否可选 | 描述 |
| --- | --- | --- | --- |
| label | `string` | 否 | 选择框显示的标签
| value | `string | number | boolean` | 否 | 标签对应的值
| disabled | `boolean | undefined` | 是 | 是否禁用
| tagType | `"primary" | "success" | "info" | "warning" | "danger" | undefined` | 是 | -


---

## IColumnsExtra

| 属性名 | 类型 | 是否可选 | 描述 |
| --- | --- | --- | --- |
| visible | `boolean | undefined` | 是 | 显示隐藏状态
| width | `string | number | undefined` | 是 | 额外设置列宽，优先级高于column['width']；暂时用不上！！！


---

