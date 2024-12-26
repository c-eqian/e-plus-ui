<script setup lang="ts">
import { isEmpty } from '@eqian/utils-vue';
import { EpIcon } from 'e-plus-ui';
import { ref, watch } from 'vue';
import Icons from './svg.json';
const iconsKeys = Object.keys(Icons);
const selectKeys = ref<string[]>(iconsKeys);
const getSelectOptions = () => {
  return iconsKeys.map(key => {
    return {
      label: key
    };
  });
};
const selectKey = ref([]);
watch(
  () => selectKey.value,
  val => {
    if (isEmpty(val)) {
      selectKeys.value = iconsKeys;
      return;
    }
    selectKeys.value = val;
  }
);
</script>

<template>
  <div>
    <el-input placeholder="Please input" suffix-icon="Search">
      <template #prepend>
        <el-select v-model="selectKey" multiple placeholder="全部" style="width: 220px">
          <el-option
            v-for="item in getSelectOptions()"
            :key="item.label"
            :label="item.label"
            :value="item.label"
          />
        </el-select>
      </template>
    </el-input>
    <div v-for="key in selectKeys" :key="key" class="ep-w-full">
      <h2>{{ key }}</h2>
      <div class="ep-grid ep-grid-cols-3 ep-grid-rows-3 ep-gap-2">
        <div
          v-for="(icon, index) in Icons[key]"
          :key="index"
          class="ep-flex ep-p-6 ep-space-y-2 ep-flex-col"
        >
          <ep-icon color="#67C23A" width="24" height="24">
            <component :is="icon" />
          </ep-icon>
          <span class="ep-text-sm">
            <ep-copy-text>
              {{ icon }}
            </ep-copy-text>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
