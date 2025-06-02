<script setup lang="ts">
import { EpFormTable, useFormTable, type FormTableProps } from 'e-plus-ui';
type TableData = {
  date: string;
  name: string;
  address: string;
};
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
const tableData: TableData[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
];
const simulateRequest = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        list: tableData,
        total: tableData.length
      });
    }, 3000);
  });
};
const { registry } = useFormTable<TableData>({
  api: simulateRequest,
  immediate: true,
  formSchema,
  tableSchema: {
    // 使用分页
    pagination: true,
    columns: [
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
</script>

<template>
  <div class="play">
    <EpFormTable @registry="registry"> </EpFormTable>
  </div>
</template>

<style scoped>
.play {
  padding: 10px;
  width: 100%;
  height: 700px;
}
</style>
