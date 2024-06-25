<template>
  <div class="play">
    <ep-card>
      <el-button @click="handleGet">获取</el-button>
      <el-button @click="handleSet">设置值</el-button>
      <ep-form-schema
        @registry="registry"
        :config="formSchema"
        :model="formModel"
      >
      </ep-form-schema>
    </ep-card>
  </div>
</template>
<script setup lang="ts">
import { defineFormSchema, useFormSchema } from '../packages/component/src';
import { ref, h } from 'vue';
import { ElInput } from 'element-plus';
const { registry, getFieldsValues, validate, setFieldsValues } =
  useFormSchema();
interface FormModel {
  name: string;
  cascade: string;
  render: string;
}
const formModel = ref({
  name: '哈哈哈哈',
  cascade: '',
  render: '',
});
const handleSet = () => {
  setFieldsValues({
    na: '新增',
  });
};
const handleGet = async () => {
  await validate();
  console.log(formModel.value);
  console.log(333, getFieldsValues());
};
const formSchema = defineFormSchema<FormModel>({
  labelPosition: 'right',
  items: [
    {
      type: 'input',
      label: '输入框',
      prop: 'name',
      rules: true,
      componentProps: {
        clearable: true,
      },
    },
    {
      type: '',
      label: '自定义渲染',
      prop: 'render',
      render: ({ model, item }) => {
        return h(ElInput, {
          modelValue: model.value[item.value.prop],
          'onUpdate:modelValue': (val: any) => {
            model.value[item.value.prop] = val;
          },
        });
      },
    },
    {
      type: 'cascade',
      label: '级联',
      rules: true,
      prop: 'cascade',
      componentProps: {
        clearable: true,
        options: [
          {
            value: 'guide',
            label: 'Guide',
            children: [
              {
                value: 'disciplines',
                label: 'Disciplines',
                children: [
                  {
                    value: 'consistency',
                    label: 'Consistency',
                  },
                  {
                    value: 'feedback',
                    label: 'Feedback',
                  },
                  {
                    value: 'efficiency',
                    label: 'Efficiency',
                  },
                  {
                    value: 'controllability',
                    label: 'Controllability',
                  },
                ],
              },
              {
                value: 'navigation',
                label: 'Navigation',
                children: [
                  {
                    value: 'side nav',
                    label: 'Side Navigation',
                  },
                  {
                    value: 'top nav',
                    label: 'Top Navigation',
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  ],
});
</script>
<style lang="less">
html,
body,
#app {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.play {
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
