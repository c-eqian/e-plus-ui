# Comment 评论
## 基础用法
:::demo
comment/index
:::
## 回复评论
:::demo
comment/Reply
:::
## 集成表情包
:::demo
comment/customEmoji
:::
## 自定义字段
如果返回的格式字段非上面那样，那么可以通过配置`config`
:::demo
comment/field
:::
## 提交回复内容
组件提供一个`reply`回复提交的事件回调，回调返回参数包含如下:
  - `value` 评论的文本内容 
  - `item` 当前被回复的评论 
  - `level1` 当前被回复的评论的父级评论，即一级评论，如果`item`是一级， `level1`为`{}`， 
  - `clear` 是一个方法是,用于否调用清空输入框,接受一个Boolean参数，如果为true,将会关闭输入框
:::demo
comment/submit
:::
