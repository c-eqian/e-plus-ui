<template>
  <div class="play">
    <ep-card>
      <el-button @click="handleGet">获取</el-button>
      <ep-form-schema :config="formSchema" :model="formModel">

      </ep-form-schema>
    </ep-card>
  </div>

</template>
<script setup lang="ts">
import { defineFormSchema } from '../packages/component/src';
import { ref } from 'vue';
const formModel = ref({
  name: '哈哈哈哈',
  cascade:''
})
const handleGet = ()=>{
  console.log(formModel.value);
}
const formSchema = defineFormSchema({
  items: [
    {
      type: 'input',
      label: '输入框',
      prop: 'name',
      rules: true,
      componentProps: {
        clearable: true
      }
    },
    {
      type: 'cascade',
      label: '级联',
      rules: true,
      prop: 'cascade',
      componentProps: {
        clearable: true
      }
    }
  ]
})
</script>
<style lang="less">
html, body, #app{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.play{
  width: 100%;
  height: 100%;
  padding-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main-container {
  width: 500px;
  height: 800px;
}
</style>
