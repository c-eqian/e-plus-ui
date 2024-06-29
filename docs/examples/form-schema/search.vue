<script setup lang="ts">
import {defineFormSchema, EpFormSchema} from 'e-plus-ui';
import { h, ref } from 'vue';
import { ElInput } from 'element-plus';
interface FormModel {
  name: string;
  cascade: string;
  post: string;
  dept: string;
}
const formModel = ref({
  name: '哈哈哈哈',
  post: '',
  dept: '',
});
const modelValues = ref<FormModel>()
const formSchemaRef = ref<InstanceType<typeof EpFormSchema>>()
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
  items: [
    {
      type: 'input',
      label: '用户',
      prop: 'name',
    },
    {
      type: 'input',
      label: '岗位',
      prop: 'name',
    },
    {
      type: 'input',
      label: '部门',
      prop: 'dept'
    },
  ],
});
</script>

<template>
  <ep-card title="搜索栏" shadow="always">
    <div class="cz-py-4">
      <div class="cz-py-4">
        <el-button @click="handleGet">获取表单</el-button>
      </div>
      <ep-form-schema
          ref="formSchemaRef"
        :config="formSchema"
        :model="formModel"
      >
      </ep-form-schema>
    </div>
  </ep-card>
</template>

<style scoped lang="scss">

</style>
