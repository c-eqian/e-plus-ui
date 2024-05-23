<script setup lang="ts">
import { useMerge } from 'co-utils-vue';

import {
  type FormContext,
  formContextDefault,
  type IZkFormItemConfig,
} from '../type';
import { inject } from 'vue';

const { model } = inject<FormContext>('form-context', formContextDefault);
interface IPropsItem {
  item: IZkFormItemConfig;
}
const props = withDefaults(defineProps<IPropsItem>(), {
  item: () => ({} as IZkFormItemConfig),
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
