<template>
  <div class="play">
    <ep-button>哈哈哈</ep-button>
    <div class="main-container cz-bg-sky-400">
      <ep-form :model="formModel" :form-items="formSchema" label-width="70px">
      </ep-form>
    </div>
  </div>

</template>
<script setup lang="ts">
import { defineFormSchema } from "../packages/component/src";
import {ref} from "vue";
const formSchema = defineFormSchema([
  {
    label: '名称',
    type: 'input',
    rules: true,
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
const formModel = ref({
  name: '111',
  textarea: '',
  daterange: '',
  cascade: '',
  selectProp: ''
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
