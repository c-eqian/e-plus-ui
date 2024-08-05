<script setup lang="ts">
import type { CardProps } from './type';
import { computed } from 'vue';
import Image from '../image/index.vue';
import TextFold from '../text-fold/TextFold.vue';
defineOptions({
  name: 'EpCard',
});
const props = withDefaults(defineProps<CardProps>(), {
  shadow: 'hover',
});
const title = computed(() => props.title);
const avatar = computed(() => props.avatar);
const description = computed(() => props.description);
const classes = computed(() => {
  return {
    shadow: props.shadow === 'always',
    'is-hover-shadow': props.shadow === 'hover',
  };
});
</script>

<template>
  <div class="cz-card cz-bg-white dark:cz-bg-dark-2" :class="classes">
    <div
      class="cz-card-header cz-space-x-1"
      v-if="$slots.title || title || $slots.extra"
    >
      <div class="cz-card-header-wrapper cz-space-x-1">
        <div v-if="$slots.avatar || avatar" class="cz-flex cz-items-center">
          <Image
            v-if="avatar"
            :url="avatar"
            :height="36"
            :width="36"
            round
          ></Image>
          <slot name="avatar" />
        </div>
        <div v-if="title" class="cz-card-header-title">
          <span>{{ title }}</span>
          <TextFold v-if="avatar && description" line="1">
            <span v-if="description" class="cz-card-header__description">{{
              description
            }}</span>
          </TextFold>
          <span v-else-if="description" class="cz-card-header__description">{{
            description
          }}</span>
        </div>
        <slot v-else-if="$slots.title" name="title"></slot>
      </div>
      <div class="cz-card-header-extra" v-if="$slots.extra">
        <slot name="extra"></slot>
      </div>
    </div>
    <div class="cz-card-body">
      <slot name="body" v-if="$slots.body"></slot>
      <slot v-else></slot>
    </div>
    <div class="cz-card-footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'index';
</style>
