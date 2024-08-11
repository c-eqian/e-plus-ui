# Card  

 ::: tip 提示
类型定义说明通过自动生成
:::

## CardProps 

参数属性

### title
标题


- **Type:** `string`


### avatar
头像


- **Type:** `string`


### description
描述


- **Type:** `string`


### shadow
阴影时机


- **Type:** `Shadow`


## Shadow


- **Type:**
 `'always' | 'never' | 'hover'`

## SlotsType
插槽名称


- **Type:**
 ``` typescript
{
  /**
   * 标题插槽
   */
  title: () => any;
  /**
   * 扩展插槽
   */
  extra: () => any;
  /**
   * 内容插槽
   */
  body: () => any;
  /**
   * footer插槽
   */
  footer: () => any;
  /**
   * 头像插槽
   */
  avatar: () => any;
}
```
