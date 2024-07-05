<script setup lang="ts">
import type { IFormItemConfig } from '../type';
import { ElInputNumber } from 'element-plus';
import { useContextProps, useProps } from './index.hooks';
interface IPropsItem {
  item: IFormItemConfig;
}
const props = withDefaults(defineProps<IPropsItem>(), {
  item: () => ({} as IFormItemConfig),
});
const { model } = useContextProps().value;
const {
  prop,
  placeholder,
  label,
  readOnly,
  disabled,
  elExtraPros = {},
} = useProps(props.item).value;
const handleEnter = (v: string | number | boolean) => props.item?.enter?.(v);
defineExpose({
  handleEnter,
});
defineOptions({
  name: 'EpFormInputNumber',
});
</script>

<template>
  <ElInputNumber
    v-model.trim="model[prop!]"
    :placeholder="placeholder || `请输入 ${label}`"
    v-bind="elExtraPros"
    :disabled="disabled"
    :readonly="readOnly"
    @keyup.enter="() => handleEnter(model[prop!])"
  />
</template>
