# Line 

 ::: tip 提示
类型定义说明通过自动生成
:::

## ILineProps 



### direction
分割线方向


- **Type:** `'horizontal' | 'vertical'`


- **Default:** `horizontal`

### position
文本位置


- **Type:** `ILineTextPos`


- **Default:** `left`

### borderWidth
边框宽度


- **Type:** `string`


- **Default:** `1px`

### dashed
是否为虚线


- **Type:** `boolean`


- **Default:** `false`

### offset
偏移量
当设置position=`center`时，该值无效


- **Type:** `string | number`


### color
边框颜色


- **Type:** `string`


### margin
边距


- **Type:** `string`


- **Default:** `8`

### linear
是否使用渐变
只有在position=`center`或者没有default slot时有效


- **Type:** `boolean`


- **Default:** `false`

## ILineTextPos
文本位置


- **Type:**
 `'left' | 'right' | 'center'`
