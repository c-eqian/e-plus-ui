<script setup lang="ts">
import { defineFormSchema, EpFormSchema } from 'e-plus-ui';
import { ref } from 'vue';
type FormModel = {
  name: string;
  post: string;
  dept: string;
  phone: string;
  motto: string;
};
const formModel = ref({
  name: 'Eqian',
  post: '',
  dept: '',
  phone: '',
  motto: ''
});
const formSchemaRef = ref<InstanceType<typeof EpFormSchema>>();
/**
 * 获取表单
 */
const handleGet = async () => {
  // 校验
  await formSchemaRef.value?.validate();
  console.log('获取表单值', formModel.value);
};
const formSchema = defineFormSchema<FormModel>({
  labelPosition: 'right',
  /**
   * 设置列数 默认为3
   */
  columns: 3,
  labelWidth: '70px',
  // 启用搜索
  isSearch: true,
  // 搜索按钮是否与同行
  inlineSearch: true,
  items: [
    {
      type: 'input',
      label: '用户',
      prop: 'name',
      // 给一个默认值，如果重置后不需要清空该字段值时
      defaultValue: 'Eqian'
    },
    {
      type: 'input',
      label: '岗位',
      prop: 'post'
    },
    {
      type: 'input',
      label: '部门',
      prop: 'dept'
    },
    {
      type: 'input',
      label: '手机号',
      prop: 'phone'
    },
    {
      type: 'input',
      label: '座右铭',
      prop: 'motto'
    }
  ]
});
</script>

<template>
  <ep-card title="搜索栏" shadow="always">
    <div class="ep-py-4">
      <div class="ep-py-4">
        <el-button @click="handleGet">获取表单</el-button>
      </div>
      <ep-form-schema ref="formSchemaRef" :config="formSchema" :model="formModel" />
    </div>
  </ep-card>
</template>

<style scoped lang="scss"></style>
