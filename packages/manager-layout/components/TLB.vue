<script setup lang="ts">
import { ElContainer, ElFooter, ElHeader, ElMain } from 'element-plus';
import Aside from './Aside.vue';
import { useComputedProps } from '../hooks/useComputedProps';
import { pixelUnits } from '../../utils/pixelUnits';
const props = useComputedProps();
</script>

<template>
  <div class="cz-ltb-layout cz-h-full cz-w-full">
    <ElContainer class="cz-w-full cz-h-full">
      <ElHeader :class="props.classNames?.headerClass">
        <slot name="header"></slot>
      </ElHeader>
      <ElContainer>
        <slot v-if="$slots.aside" name="aside"></slot>
        <Aside v-else :class="props.classNames?.asideClass"></Aside>
        <ElMain
          v-if="$slots.main"
          class="cz-w-full cz-h-full"
          :style="{
            '--el-main-padding': pixelUnits(props.mainPadding ?? '10px'),
          }"
          :class="props.classNames?.mainClass"
        >
          <slot name="main"></slot>
        </ElMain>
        <ElFooter v-if="$slots.footer" :class="props.classNames?.footerClass">
          <slot name="footer"></slot>
        </ElFooter>
      </ElContainer>
    </ElContainer>
  </div>
</template>

<style lang="scss"></style>
