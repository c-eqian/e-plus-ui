<script setup lang="ts">
import { icons } from '@e-plus-ui/icons/global';
import { defineFormSchema, EpFormSchema } from 'e-plus-ui';
import { ref } from 'vue';
type FormModel = {
  name: string;
  icon: string;
  select: string;
};

const formSchemaRef2 = ref<InstanceType<typeof EpFormSchema>>();

const formSchema = defineFormSchema<FormModel>({
  labelPosition: 'right',
  columns: 1,
  items: [
    {
      type: 'input',
      label: '输入框',
      prop: 'name',
      rules: true
    },
    {
      type: 'select-icon',
      label: '图标',
      prop: 'icon',
      componentProps: {
        icons: Object.keys(icons),
        // 使用搜索框
        searchable: true,
        // 不显示总数
        showTotal: false
      },
      rules: true
    },
    {
      type: 'select-group',
      label: '下拉配置',
      prop: 'select',
      rules: true,
      componentProps: {
        groupOptions: [
          {
            value: '1',
            label: '前端'
          },
          {
            value: '2',
            label: '后端'
          }
        ]
      }
    }
  ]
});
</script>

<template>
  <div class="ep-py-4">
    <ep-form-schema ref="formSchemaRef2" :config="formSchema" />
  </div>
</template>

<style scoped lang="scss"></style>
