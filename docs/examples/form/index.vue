<script setup lang="ts">
import { defineFormSchema } from "e-plus-ui";
import {ref} from "vue";
const formSchema = defineFormSchema([
  {
    label: '名称',
    type: 'input',
    col: {
      span: 24,
    },
    prop: 'name'
  },
  {
    label: '文本框',
    type: 'textarea',
    prop: 'textarea',
    col: {
      span: 24,
    },
  },
  {
    label: '下拉框',
    type: 'select',
    prop: 'selectProp',
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
  },
  {
    label: '级联',
    type: 'cascade',
    prop: 'cascade',
    col: {
      span: 24,
    },
    options: [
      {
        label: '前端',
        value: 'frontend',
        children: [
          {
            label: 'vue',
            value: 'vue'
          },
          {
            label: 'react',
            value: 'react'
          }
        ]
      },
    ]
  },
  {
    label: '时间范围',
    type: 'date-time-range',
    col: {
      span: 24,
    },
    prop: 'daterange',
  }
])
const model = ref({
  name: '111',
  textarea: '',
  daterange: '',
  cascade: '',
  selectProp: ''
})
</script>

<template>
<div>
  <ep-form :model :form-items="formSchema" label-width="70px">
  </ep-form>
</div>
</template>

<style scoped lang="scss">

</style>
