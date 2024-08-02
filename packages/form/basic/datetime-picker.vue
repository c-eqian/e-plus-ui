<script setup lang="ts">
import { useMerge } from '@eqian/utils-vue';

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
} = useProps(props.item).value;
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
    v-model="model[prop!]"
    :placeholder="placeholder || `请选择 ${label}`"
    v-bind="useMerge({}, _default, elExtraPros)"
    type="datetime"
    :disabled="disabled"
    @change="handleChange"
  />
</template>
