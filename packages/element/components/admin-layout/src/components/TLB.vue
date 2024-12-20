<script setup lang="ts">
import { pixelUnits } from '@e-plus-ui/utils';
import { ElContainer, ElFooter, ElHeader, ElMain } from 'element-plus';
import { useComputedProps } from '../hooks/useComputedProps';
import Aside from './Aside.vue';
const props = useComputedProps();
</script>

<template>
  <div class="cz-tlb-layout cz-admin-layout cz-h-full cz-w-full">
    <ElContainer class="cz-w-full cz-h-full">
      <ElHeader :class="props.classNames?.headerClass">
        <slot name="header" />
      </ElHeader>
      <ElContainer>
        <slot v-if="$slots.aside" name="aside" />
        <Aside v-else :class="props.classNames?.asideClass" />
        <ElMain
          v-if="$slots.main"
          class="cz-w-full cz-h-full"
          :style="{
            '--el-main-padding': pixelUnits(props.mainPadding ?? '10px')
          }"
          :class="props.classNames?.mainClass"
        >
          <slot name="main" />
        </ElMain>
        <ElFooter v-if="$slots.footer" :class="props.classNames?.footerClass">
          <slot name="footer" />
        </ElFooter>
      </ElContainer>
    </ElContainer>
  </div>
</template>

<style lang="scss"></style>
