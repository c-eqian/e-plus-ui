<script setup lang="ts">
import {EpComment, ICommentConfig, type ICommentData} from 'e-plus-ui'
const commentData: ICommentData = {
  title: '99',
  list: [
    {
      userInfo: {
        username: '张无忌',
        avatar: 'https://s3.bmp.ovh/imgs/2024/05/02/f298a3b692dca2ba.jpg',
        userId: 1
      },
      commentId: 36,
      ipAddress: '深圳',
      level: 1,
      createDate: '2016-05-02',
      content: '你知道什么是妥协吗？是彼此都退让一步，达成一致意见。'
    },
    {
      userInfo: {
        username: '王林',
        avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.cb2tZuoVupOeB2xofO630wHaEK?rs=1&pid=ImgDetMain',
        userId: 2
      },
      ipAddress: '广州',
      level: 5,
      content: '你知道什么是妥协吗？是彼此都退让一步，达成一致意见。',
      commentId: 66,
      createDate: '2018-05-02',
    }
  ]
}
/**
 * 配置
 */
const fieldsConfig: ICommentConfig = {
  // 显示IP属地
  showIpAddress: ({item})=>{
    return `<span class="cz-text-[10px] cz-px-3">来自·${item.ipAddress}</span>`
  },
  showLevel: true,
  // 不显示点赞/回复操作
  actions: false
  // 如果字段也为ipAddress，可不填
  // ipAddress: 'ipAddress'
};
</script>

<template>
  <div>
    <ep-comment :data="commentData" :config="fieldsConfig"></ep-comment>
  </div>
</template>

<style scoped lang="scss">

</style>
