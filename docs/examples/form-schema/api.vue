<script setup lang="ts">
import { defineFormSchema, EpFormSchema } from 'e-plus-ui';
import { ref } from 'vue';
type FormModel = {
  radioSingle: string;
  checkBoxGroup: string[];
  selectGroup: string[];
  select: string;
};
const formModel = ref({
  radioSingle: '',
  checkBoxGroup: [],
  selectGroup: [],
  select: ''
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
  columns: 1,
  items: [
    {
      type: 'radio-group',
      label: '分组单选',
      prop: 'radioSingle',
      rules: true,
      componentProps: {
        groupOptions: [
          {
            value: '1',
            label: '测试'
          },
          {
            value: '2',
            label: '开发'
          }
        ]
      }
    },
    {
      type: 'checkbox-group',
      label: '分组多选',
      prop: 'checkBoxGroup',
      rules: true,
      defaultValue: [],
      componentProps: {
        groupOptions: {
          api: (params: any) => {
            return new Promise<any>(resolve => {
              console.log('请求参数', params);
              setTimeout(() => {
                resolve([
                  {
                    value: '1',
                    label: '测试'
                  },
                  {
                    value: '2',
                    label: '开发'
                  }
                ]);
              }, 1000);
            });
          },
          // 携带参数
          params: {}
        }
      }
    },
    {
      type: 'select-group',
      label: '请求分组下拉',
      prop: 'selectGroup',
      rules: true,
      componentProps: {
        groupOptions: {
          api: () => {
            return new Promise<any>(resolve => {
              setTimeout(() => {
                resolve([
                  {
                    label: '产品部',
                    children: [
                      {
                        value: '1',
                        label: '产品1'
                      },
                      {
                        value: '2',
                        label: '产品2'
                      }
                    ]
                  },
                  {
                    label: '运营部',
                    children: [
                      {
                        value: '3',
                        label: '运营部'
                      }
                    ]
                  }
                ]);
              }, 1500);
            });
          }
        }
      }
    },
    {
      type: 'select',
      label: '请求下拉',
      prop: 'select',
      rules: true,
      componentProps: {
        groupOptions: {
          api: () => {
            return new Promise<any>(resolve => {
              setTimeout(() => {
                resolve([
                  {
                    value: '1',
                    label: '产品1'
                  },
                  {
                    value: '2',
                    label: '产品2'
                  }
                ]);
              }, 1500);
            });
          }
        }
      }
    }
  ]
});
</script>

<template>
  <ep-card title="使用api请求" shadow="always">
    <div class="cz-py-4">
      <div class="cz-py-4">
        <p>{{ formModel }}</p>
        <el-button @click="handleGet">获取表单</el-button>
      </div>
      <ep-form-schema ref="formSchemaRef" :config="formSchema" :model="formModel" />
    </div>
  </ep-card>
</template>

<style scoped lang="scss"></style>
