<template>
  <ElCascader
    v-model="model[props.item.prop!]"
    :placeholder="props.item.placeholder || `请选择 ${props.item.label}`"
    :options="optionsList"
    :disabled="props.item.disabled"
    :props="props.item.extraPros?.warehouseProps"
    v-bind="props.item.extraPros"
  />
</template>

<script lang="ts" setup>
import { FormContext, formContextDefault, IZkFormItemConfig } from '../type';
import { computed, inject, unref } from 'vue';
import { ElCascader } from 'element-plus';
defineOptions({
  name: 'EpFormCascade',
});
export interface IPropsItem {
  item: IZkFormItemConfig;
}
const props = withDefaults(defineProps<IPropsItem>(), {
  item: () => ({} as IZkFormItemConfig),
});
const optionsList = computed(() => unref(props.item.treeOptions));
const { model } = inject<FormContext>('form-context', formContextDefault);
</script>
<style lang="less">
:deep(.el-cascader) {
  width: 100% !important;
}
</style>
