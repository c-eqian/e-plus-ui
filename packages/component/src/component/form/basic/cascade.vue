<template>
  <ElCascader
    v-model="model[prop!]"
    :placeholder="placeholder || `请选择 ${label}`"
    :options="optionsList"
    :disabled="disabled"
    v-bind="elExtraPros"
  />
</template>

<script lang="ts" setup>
import type { IFormItemConfig } from '../type';
import { computed, unref } from 'vue';
import { ElCascader } from 'element-plus';
import { useContextProps, useProps } from './index.hooks';
defineOptions({
  name: 'EpFormCascade',
});
export interface IPropsItem {
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
const optionsList = computed(() => unref(props.item.options));
const { model } = useContextProps().value;
</script>
<style lang="less">
:deep(.el-cascader) {
  width: 100% !important;
}
</style>
