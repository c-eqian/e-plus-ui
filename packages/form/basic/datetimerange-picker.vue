<script setup lang="ts">
import { isFunction } from '@eqian/utils-vue';

import type { IFormItemConfig } from '../type';
import { useContextProps, useProps } from './index.hooks';

const { model } = useContextProps().value;
interface IPropsItem {
  item: IFormItemConfig;
}
const props = withDefaults(defineProps<IPropsItem>(), {
  item: () => ({} as IFormItemConfig),
});
const {
  prop,
  placeholder,
  label,
  disabled,
  elExtraPros = {},
  dateTimeRange = [],
  disableDateTimeRange,
} = useProps(props.item).value;
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
  if (isFunction(disableDateTimeRange)) {
    return disableDateTimeRange?.(date);
  }
  return false;
};
</script>

<template>
  <el-date-picker
    v-model="model[prop!]"
    :placeholder="placeholder || `请选择 ${label}`"
    v-bind="Object.assign({}, _default, elExtraPros)"
    type="datetimerange"
    :start-placeholder="dateTimeRange?.[0] || '开始日期'"
    :end-placeholder="dateTimeRange?.[1] || '结束日期'"
    :disabled-date="handleDisable"
    :disabled="disabled"
    @change="handleChange"
  />
</template>
