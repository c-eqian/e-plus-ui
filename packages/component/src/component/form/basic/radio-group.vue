<script setup lang="ts">
import {
  type FormContext,
  formContextDefault,
  type IOptions,
  type IZkFormItemConfig,
} from '../type';
import { inject, onMounted, ref, watch } from 'vue';
import { ElRadioGroup, ElRadio } from 'element-plus';
interface IPropsItem {
  item: IZkFormItemConfig;
}
const props = withDefaults(defineProps<IPropsItem>(), {
  item: () => ({} as IZkFormItemConfig),
});
const { model } = inject<FormContext>('form-context', formContextDefault);
const handleChange = (v: string | number | boolean | undefined) =>
  props.item?.change?.(v);
defineExpose({
  handleChange,
});
defineOptions({
  name: 'EpFormRadioGroup',
});
const optionsList = ref<IOptions[]>([]);
const initOptions = async () => {
  optionsList.value = (props.item.options as unknown as IOptions[]) || [];
};
watch(
  () => [props.item.options],
  () => {
    initOptions();
  }
);
onMounted(() => {
  initOptions();
});
</script>

<template>
  <ElRadioGroup
    v-if="props.item.dictKey || props.item.options"
    v-model="model[props.item.prop!]"
    v-bind="props.item.extraPros"
    :disabled="props.item.disabled"
    @change="handleChange"
  >
    <ElRadio
      v-for="_item in optionsList"
      :key="_item.value"
      :value="_item.value"
      :label="_item.value"
    >
      {{ _item.label }}
    </ElRadio>
  </ElRadioGroup>
  <template v-else>
    <ElRadio
      v-model="model[props.item.prop!]"
      :label="props.item.extraPros?.label || true"
      v-bind="props.item.extraPros"
    >
      {{ props.item.label }}
    </ElRadio>
  </template>
</template>
