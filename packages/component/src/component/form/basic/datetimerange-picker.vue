<script setup lang="ts">
import { isFunction } from 'co-utils-vue';

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
  name: 'EpFormDateTimeRange',
});
/**
 * 处理默认参数，比如时间日期的格式化格式
 */
const _default = {
  format: 'YYYY-MM-DD HH:mm:ss',
  'date-format': 'MMM DD, YYYY',
  'time-format': 'HH:mm',
};
const handleDisable = (date: Date) => {
  if (props.item.isThanNow) {
    return date.getTime() < Date.now() - 8.64e7;
  }
  if (props.item.isLessNow) {
    return date.getTime() > Date.now();
  }
  if (isFunction(props.item.disableDateTimeRange)) {
    return props.item.disableDateTimeRange?.(date);
  }
  return false;
};
</script>

<template>
  <el-date-picker
    v-model="model[props.item.prop!]"
    :placeholder="props.item.placeholder || `请选择 ${props.item.label}`"
    v-bind="Object.assign({}, _default, props.item.extraPros)"
    type="datetimerange"
    :start-placeholder="props.item.dateTimeRange?.[0] || '开始日期'"
    :end-placeholder="props.item.dateTimeRange?.[1] || '结束日期'"
    :disabled-date="handleDisable"
    :disabled="props.item.disabled"
    @change="handleChange"
  />
</template>
