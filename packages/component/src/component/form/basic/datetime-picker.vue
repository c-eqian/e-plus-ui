<script setup lang="ts">
import { useMerge } from 'co-utils-vue';

import type { FormContext, IFormItemConfig } from '../type';
import { inject } from 'vue';
import { formContextDefault } from './model';

const { model } = inject<FormContext>('form-context', formContextDefault);
interface IPropsItem {
  item: IFormItemConfig;
}
const props = withDefaults(defineProps<IPropsItem>(), {
  item: () => ({} as IFormItemConfig),
});
const handleChange = (v: string | number | boolean) => props.item?.change?.(v);
defineExpose({
  handleChange,
});
defineOptions({
  name: 'EpFormDateTime',
});
/**
 * 处理默认参数，比如时间日期的格式化格式
 */
const _default = {
  format: 'YYYY-MM-DD HH:mm:ss',
  'date-format': 'MMM DD, YYYY',
  'time-format': 'HH:mm',
};
</script>

<template>
  <el-date-picker
    v-model="model[props.item.prop!]"
    :placeholder="props.item.placeholder || `请选择 ${props.item.label}`"
    v-bind="useMerge(_default, props.item.extraPros as any)"
    type="datetime"
    :disabled="props.item.disabled"
    @change="handleChange"
  />
</template>
