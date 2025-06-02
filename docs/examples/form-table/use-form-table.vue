<script setup lang="ts">
import { useFormatDate } from '@eqian/utils-vue';
import { fakerZH_CN as faker } from '@faker-js/faker';
import { EpFormTable, useFormTable, type FormTableProps } from 'e-plus-ui';
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
const { registry, getTableInstance } = useFormTable<TableData, any, Res>({
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
watch(
  () => isSelected.value,
  () => {
    getTableInstance().toggleRowSelection(1, isSelected.value);
  }
);
</script>

<template>
  <div class="play">
    <EpFormTable @registry="registry">
      <template #toolbar>
        <div>
          <el-button @click="isSelected = !isSelected">{{
            isSelected ? '取消首项选中' : '设置首项选中'
          }}</el-button>
          <el-button size="small" type="primary" icon="Plus">新增</el-button>
          <el-button size="small" type="success" icon="FolderAdd">导入</el-button>
          <el-button :disabled="isDeletable" size="small" type="danger" icon="Delete"
            >删除</el-button
          >
        </div>
      </template>
    </EpFormTable>
  </div>
</template>

<style scoped>
.play {
  padding: 10px;
  width: 100%;
  height: 700px;
}
</style>
