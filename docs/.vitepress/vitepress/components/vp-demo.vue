<script setup lang="ts">
import { shallowRef, onMounted, defineAsyncComponent, ref, computed } from 'vue';
import { getModule } from '../../../utils/module';
import { isClient, useClipboard, useToggle } from '@vueuse/core';
import { CaretTop, Expand, CopyDocument } from '@element-plus/icons-vue';
import { $message } from '../../../utils/message';
import SourceCode from './vp-source-code.vue';
import {
  ElDivider,
  ElTooltip,
  ElIcon,
  ElCollapseTransition,
} from 'element-plus';

import type { Component } from 'vue';

const props = defineProps<{
  demos?: object;
  source: string;
  path: string;
  rawSource: string;
  description?: string;
}>();

const demo = shallowRef<Component>();
const sourceCodeRef = ref<HTMLButtonElement>();

const decodedDescription = computed(() =>
  decodeURIComponent(props.description!)
)

const { text, isSupported, copy } = useClipboard({
  source: decodeURIComponent(props.rawSource),
});
const [sourceVisible, toggleSourceVisible] = useToggle();

const onSourceVisibleKeydown = (e: KeyboardEvent) => {
  if (['Enter', 'Space'].includes(e.code)) {
    e.preventDefault();
    toggleSourceVisible(false);
    sourceCodeRef.value?.focus();
  }
};

/**
 * copy code
 */
const copyCode = async () => {
  // if (!isSupported.value) {
  //   $message.error('复制失败');
  //   return;
  // }
  try {
    await copy(decodeURIComponent(props.rawSource));
    console.log(text);
    $message.success('复制成功');
  } catch (e: any) {
    $message.error(e.message);
  }
};

onMounted(async () => {
  console.log(props.path);
  demo.value = defineAsyncComponent(getModule(props.path));
});
</script>
<template>
  <ClientOnly>
    <div class="example">
      <div class="example-wrapper">
      <p text="sm" v-html="decodedDescription" />
      <component :is="demo" v-if="demo" v-bind="$attrs" />
      </div>
      <ElDivider class="m-0" />
      <div class="op-btns">
        <ElTooltip
            content="复制代码"
            :show-arrow="false"
            :trigger="['hover', 'focus']"
            :trigger-keys="[]"
        >
          <ElIcon
              :size="16"
              aria-label="copy-code"
              class="op-btn"
              tabindex="0"
              role="button"
              @click="copyCode"
              @keydown.prevent.enter="copyCode"
              @keydown.prevent.space="copyCode"
          >
            <CopyDocument />
          </ElIcon>
        </ElTooltip>
        <ElTooltip
            content="查看代码"
            :show-arrow="false"
            :trigger="['hover', 'focus']"
            :trigger-keys="[]"
        >
          <button
              ref="sourceCodeRef"
              :aria-label="sourceVisible ? 'hide-source' : 'view-source'"
              class="reset-btn el-icon op-btn"
              @click="toggleSourceVisible()"
          >
            <ElIcon :size="16">
              <Expand />
            </ElIcon>
          </button>
        </ElTooltip>
      </div>
      <ElCollapseTransition>
        <SourceCode v-show="sourceVisible" :source="source" />
      </ElCollapseTransition>

      <Transition name="el-fade-in-linear">
        <div
            v-show="sourceVisible"
            class="example-float-control"
            tabindex="0"
            role="button"
            @click="toggleSourceVisible(false)"
            @keydown="onSourceVisibleKeydown"
        >
          <ElIcon :size="16">
            <CaretTop />
          </ElIcon>
          <span>{{ '隐藏' }}</span>
        </div>
      </Transition>
    </div>
  </ClientOnly>
</template>
<style scoped lang="scss">
.m-0 {
  margin-top: 8px !important;
}
.example {
  border: 1px solid #dcdfe6;
  &-wrapper{
    padding: 0 15px;
  }
}
.op-btns {
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 2.5rem;

  .el-icon {
    &:hover {
      color: var(--text-color);
    }
  }

  .op-btn {
    margin: 0 0.5rem;
    cursor: pointer;
    color: var(--text-color-lighter);
    transition: 0.2s;
  }
}

.example-float-control {
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid var(--border-color);
  height: 44px;
  box-sizing: border-box;
  background-color: var(--bg-color, #fff);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  margin-top: -1px;
  color: var(--el-text-color-secondary);
  cursor: pointer;
  position: sticky;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  span {
    font-size: 14px;
    margin-left: 10px;
  }

  &:hover {
    color: var(--el-color-primary);
  }
}
</style>
