<script setup lang="ts">
import { ElInput } from 'element-plus';
import type { FormContext, IFormItemConfig } from '../type';
import { inject } from 'vue';
import { formContextDefault } from './model';

defineOptions({
  name: 'EpFormTextarea',
});
interface IPropsItem {
  item: IFormItemConfig;
}
const props = withDefaults(defineProps<IPropsItem>(), {
  item: () => ({} as IFormItemConfig),
});
const { model } = inject<FormContext>('form-context', formContextDefault);
</script>

<template>
  <ElInput
    v-model.trim="model[props.item.prop!]"
    type="textarea"
    :disabled="props.item.disabled"
    :placeholder="props.item.placeholder || `请输入 ${props.item.label}`"
    v-bind="props.item.extraPros"
  />
</template>
