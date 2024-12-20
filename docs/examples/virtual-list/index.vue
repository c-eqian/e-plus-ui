<script setup lang="ts">
import { ref } from 'vue';
const basicData = ref<number[]>([]);
const data = ref<any[]>([]);

for (let i = 0; i < 100000; i++) {
  basicData.value.push(i);
  if (i % 2 === 0) {
    data.value.push(
      `${i + 1}.提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。\n` +
        `\n` +
        `调用 ElMessageBox.confirm 方法以打开 confirm 框。它模拟了系统的 confirm。 ` +
        `Message Box 组件也拥有极高的定制性，我们可以传入 options 作为第三个参数，它是一个字面量对象。 ` +
        `type 字段表明消息类型，可以为success，error，info和 warning，无效的设置将会被忽略。 ` +
        `需要注意的是，第二个参数 title ` +
        `必须定义为 String 类型，如果是 Object，会被当做为 options使用。` +
        ` 在这里我们返回了一个 Promise 来处理后续响应。 `
    );
  } else {
    data.value.push(
      `${i + 1}.提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。\n` +
        `\n` +
        `调用 ElMessageBox.confirm 方法以打开 confirm 框。 `
    );
  }
}
</script>

<template>
  <ep-virtual-list :data="data" :item-height="50">
    <template #default="{ item }">
      <div class="item" style="padding: 15px">
        {{ item }}
      </div>
    </template>
  </ep-virtual-list>
</template>

<style scoped lang="scss"></style>
