<script setup lang="ts">
import {
  type FormContext,
  formContextDefault,
  type IZkFormItemConfig,
} from "../type";
import { inject } from "vue";
import { ElInputNumber } from "element-plus";
interface IPropsItem {
  item: IZkFormItemConfig;
}
const props = withDefaults(defineProps<IPropsItem>(), {
  item: () => ({} as IZkFormItemConfig),
});
const { model } = inject<FormContext>("form-context", formContextDefault);
const handleEnter = (v: string | number | boolean) => props.item?.enter?.(v);
defineExpose({
  handleEnter,
});
defineOptions({
  name: "EpFormInputNumber",
});
</script>

<template>
  <ElInputNumber
    v-model.trim="model[props.item.prop!]"
    :placeholder="props.item.placeholder || `请输入 ${props.item.label}`"
    v-bind="props.item.extraPros"
    :disabled="props.item.disabled"
    :readonly="props.item.readOnly"
    @keyup.enter="() => handleEnter(model[props.item.prop!])"
  />
</template>
