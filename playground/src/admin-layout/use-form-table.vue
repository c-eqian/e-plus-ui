<script setup lang="ts">
import { EpFormTable, useFormTable, type FormTableProps } from '@e-plus-ui/element';
import { useFormatDate } from '@eqian/utils-vue';
import { fakerZH_CN as faker } from '@faker-js/faker';
import { computed, ref, watch } from 'vue';
type TableData = {
  id: number;
  date: string;
  name: string;
  address: string;
};
type Res = {
  list: TableData[];
  total: number;
};
const tableData = ref<TableData[]>([]);
const formSchema: FormTableProps['formSchema'] = {
  isSearch: true,
  labelWidth: '90px',
  inlineSearch: false,
  filterEmpty: true, // 过滤空值
  items: [
    {
      type: 'input',
      label: '框架名称',
      defaultValue: '哈哈哈哈',
      prop: 'name'
    },
    {
      type: 'input',
      label: '框架名称',
      prop: 'test2'
    },
    {
      type: 'input',
      label: '技术组',
      prop: 'render'
    },
    {
      type: 'input',
      label: '技术组1',
      prop: 'test'
    },
    {
      type: 'input',
      label: '技术组2',
      prop: 'test1'
    }
  ]
};
const generateData = () => {
  tableData.value.length = 0;
  for (let i = 0; i < 20; i++) {
    tableData.value.push({
      id: i + 1,
      date: useFormatDate(faker.date.anytime(), 'yyyy-MM-dd HH:mm'),
      name: faker.person.fullName(),
      address: faker.location.streetAddress()
    });
  }
};
const simulateRequest = (): Promise<Res> => {
  return new Promise(resolve => {
    setTimeout(() => {
      generateData();
      resolve({
        list: tableData.value,
        total: tableData.value.length
      });
    }, 3000);
  });
};
const { registry, getTableInstance, getFormSchemaInstance, updateProps } = useFormTable<
  TableData,
  any,
  Res
>({
  api: simulateRequest,
  immediate: true,
  formSchema,
  /**
   * 响应成功处理
   * @param data
   */
  responseHandler: data => {
    return data;
  },
  tableSchema: {
    // 使用分页
    pagination: true,
    rowKey: 'id',
    columns: [
      {
        type: 'selection'
      },
      {
        label: '名称',
        prop: 'name'
      },
      {
        label: '日期',
        prop: 'date'
      },
      {
        label: '地址',
        prop: 'address'
      }
    ]
  }
});
const isSelected = ref(false);
const isDeletable = computed(() => {
  return !getTableInstance()?.getSelectedRows()?.length;
});
const handleFormInstance = () => {
  const data = getFormSchemaInstance().getFieldsValues(true, true);
  console.log(data);
};
watch(
  () => isSelected.value,
  () => {
    getTableInstance().toggleRowSelection(1, isSelected.value);
  }
);
/**
 * 切换 params：传入过滤参数，触发请求重置
 */
const handleParamsChange = () => {
  updateProps({
    params: { id: 1 }
  });
};
const handleResetParams = () => {
  updateProps({
    params: {}
  });
};
/**
 * 切换 api：切换为慢请求 / 快请求
 */
const slowRequest = (): Promise<Res> => {
  return new Promise(resolve => {
    setTimeout(() => {
      generateData();
      resolve({
        list: tableData.value,
        total: tableData.value.length
      });
    }, 6000);
  });
};
const fastRequest = (): Promise<Res> => {
  return new Promise(resolve => {
    setTimeout(() => {
      generateData();
      resolve({
        list: tableData.value,
        total: tableData.value.length
      });
    }, 500);
  });
};
const handleApiChange = (type: 'slow' | 'fast') => {
  updateProps({
    api: type === 'slow' ? slowRequest : fastRequest
  });
};
/**
 * 切换 tableSchema：开关分页 + 切换列
 */
const handleTableSchemaChange = (withExtra: boolean) => {
  updateProps({
    tableSchema: {
      // 使用分页
      pagination: true,
      rowKey: 'id',
      columns: withExtra
        ? [
            {
              type: 'selection'
            },
            {
              label: '名称',
              prop: 'name'
            },
            {
              label: '日期',
              prop: 'date'
            },
            {
              label: '地址',
              prop: 'address'
            },
            {
              label: 'ID',
              prop: 'id'
            }
          ]
        : [
            {
              type: 'selection'
            },
            {
              label: '名称',
              prop: 'name'
            },
            {
              label: '日期',
              prop: 'date'
            },
            {
              label: '地址',
              prop: 'address'
            }
          ]
    }
  });
};
/**
 * 切换 formSchema：动态追加一项
 */
const handleFormSchemaChange = (withExtra: boolean) => {
  updateProps({
    formSchema: {
      ...formSchema,
      items: withExtra
        ? [
            ...formSchema.items!,
            {
              type: 'input',
              label: '动态字段',
              prop: 'dynamicField'
            }
          ]
        : formSchema.items
    }
  });
};
/**
 * 切换分页模式
 */
const handlePaginationChange = (enabled: boolean) => {
  updateProps({
    tableSchema: {
      pagination: enabled,
      rowKey: 'id',
      columns: [
        {
          type: 'selection'
        },
        {
          label: '名称',
          prop: 'name'
        },
        {
          label: '日期',
          prop: 'date'
        },
        {
          label: '地址',
          prop: 'address'
        }
      ]
    }
  });
};
/**
 * 调试：打印当前表格实例
 */
const handleDebug = () => {
  const table = getTableInstance();
  console.log('[useFormTable demo] tableInstance:', table);
  console.log('[useFormTable demo] getSelectedRows:', table?.getSelectedRows());
  const form = getFormSchemaInstance();
  console.log('[useFormTable demo] formInstance:', form);
  console.log('[useFormTable demo] formValues:', form?.getFieldsValues(true, true));
};
</script>

<template>
  <EpFormTable @registry="registry">
    <template #toolbar>
      <div>
        <el-button @click="isSelected = !isSelected">{{
          isSelected ? '取消首项选中' : '设置首项选中'
        }}</el-button>
        <el-button size="small" type="primary" icon="Plus">新增</el-button>
        <el-button size="small" type="success" icon="FolderAdd">导入</el-button>
        <el-button size="small" type="success" icon="FolderAdd" @click="handleFormInstance"
          >获取表单</el-button
        >
        <el-button :disabled="isDeletable" size="small" type="danger" icon="Delete">删除</el-button>
      </div>
    </template>
    <template #header>
      <div class="demo-section">
        <h4 style="margin: 0 0 8px 0">updateProps 演示</h4>
        <div class="demo-buttons">
          <el-button-group>
            <el-button size="small" @click="handleParamsChange">设置 params: { id: 1 }</el-button>
            <el-button size="small" @click="handleResetParams">重置 params</el-button>
          </el-button-group>
          <el-button-group>
            <el-button size="small" type="primary" @click="handleApiChange('slow')"
              >切换慢请求 (6s)</el-button
            >
            <el-button size="small" type="primary" @click="handleApiChange('fast')"
              >切换快请求 (0.5s)</el-button
            >
          </el-button-group>
          <el-button-group>
            <el-button size="small" type="success" @click="handleTableSchemaChange(true)"
              >+1 列</el-button
            >
            <el-button size="small" type="success" @click="handleTableSchemaChange(false)"
              >恢复列</el-button
            >
          </el-button-group>
          <el-button-group>
            <el-button size="small" type="warning" @click="handleFormSchemaChange(true)"
              >追加表单字段</el-button
            >
            <el-button size="small" type="warning" @click="handleFormSchemaChange(false)"
              >移除表单字段</el-button
            >
          </el-button-group>
          <el-button-group>
            <el-button size="small" @click="handlePaginationChange(true)">分页 开</el-button>
            <el-button size="small" @click="handlePaginationChange(false)">分页 关</el-button>
          </el-button-group>
          <el-button size="small" type="info" @click="handleDebug">调试输出</el-button>
        </div>
      </div>
    </template>
  </EpFormTable>
</template>

<style scoped>
.demo-section {
  padding: 12px 16px;
  background: var(--el-fill-color-blank, #fff);
  border-bottom: 1px solid var(--el-border-color-lighter, #ebeef5);
}
.demo-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}
</style>
