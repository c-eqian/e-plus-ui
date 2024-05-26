<script setup lang="ts">
import { defineFormSchema, EpForm } from "e-plus-ui";
import {ref} from "vue";
import { ElMessage } from 'element-plus'
const epFormRef = ref<InstanceType<typeof EpForm>>()
const formSchema = defineFormSchema([
  {
    label: '名称',
    type: 'input',
    rules: [
      {
        message: '长度不应小于6',
        required: true,
        validator(rule, value, callback, source, options) {
            if (value.length < 6){
              callback(new Error('长度不应小于6'))
            }else {
              callback()
            }
        },
      },
      {
        message: '请输入名称',
        required: true,
        trigger: 'blur'
      }
    ],
    col: {
      span: 24,
    },
    prop: 'name'
  },
  {
    label: '下拉框',
    type: 'select',
    prop: 'selectProp',
    rules: true,
    col: {
      span: 24,
    },
    options: [
      {
        label: 'vue',
        value: 'vue'
      },
      {
        label: 'react',
        value: 'react'
      }
    ]
  }
])
const model = ref({
  name: '111',
  selectProp: ''
})
const submit = async ()=> {
  await epFormRef.value?.validate()
  ElMessage.success('校验通过')
}
</script>

<template>
  <div>
    <ep-form ref="epFormRef" :model :form-items="formSchema" label-width="70px">
    </ep-form>
    <ep-button type="normal"  @click="submit">提交</ep-button>
  </div>
</template>

<style scoped lang="scss">

</style>
