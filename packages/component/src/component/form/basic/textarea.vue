<script setup lang="ts">
import { ElInput } from 'element-plus';
import type { IFormItemConfig } from '../type';
import { useContextProps, useProps } from './index.hooks';

defineOptions({
  name: 'EpFormTextarea',
});
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
  disabled,
  elExtraPros = {},
} = useProps(props.item).value;
</script>

<template>
  <ElInput
    v-model.trim="model[prop!]"
    type="textarea"
    :disabled="disabled"
    :placeholder="placeholder || `请输入 ${label}`"
    v-bind="elExtraPros"
  />
</template>
