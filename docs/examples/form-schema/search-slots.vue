<script setup lang="ts">
import { defineFormSchema, EpFormSchema } from 'e-plus-ui';
import { ref } from 'vue';
type FormModel = {
  name: string;
  post: string;
  dept: string;
};
const formModel = ref({
  name: 'Eqian',
  post: '',
  dept: ''
});
const formSchemaRef = ref<InstanceType<typeof EpFormSchema>>();

const formSchema = defineFormSchema<FormModel>({
  labelPosition: 'right',
  /**
   * 设置列数 默认为3
   */
  columns: 3,
  labelWidth: '70px',
  // 启用搜索
  isSearch: true,
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
    }
  ]
});
const handleSearch = () => {
  const data = formSchemaRef.value?.getFieldsValues();
  console.log(data);
  // 处理逻辑
};
const handleReset = () => {
  formSchemaRef.value?.resetFieldsValues();
  // 处理逻辑
};
</script>

<template>
  <ep-card title="自定义搜索" shadow="always">
    <div class="cz-py-4">
      <ep-form-schema ref="formSchemaRef" :config="formSchema" :model="formModel">
        <template #query-buttons>
          <el-button type="primary" size="small" @click="handleSearch">查询</el-button>
          <el-button type="warning" size="small" @click="handleReset">清空</el-button>
        </template>
        <template #query-add>
          <el-button type="primary" size="small">新增按钮</el-button>
        </template>
      </ep-form-schema>
    </div>
  </ep-card>
</template>

<style scoped lang="scss"></style>
