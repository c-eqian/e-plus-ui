<script setup lang="ts">
import { computed } from 'vue';
import { EpImage as Image } from '../../image';
import { EpTextFold as TextFold } from '../../text-fold';
import type { CardProps } from './type';
defineOptions({
  name: 'EpCard'
});
const props = withDefaults(defineProps<CardProps>(), {
  shadow: 'hover'
});
const title = computed(() => props.title);
const avatar = computed(() => props.avatar);
const description = computed(() => props.description);
const classes = computed(() => {
  return {
    shadow: props.shadow === 'always',
    'is-hover-shadow': props.shadow === 'hover'
  };
});
</script>

<template>
  <div class="ep-card ep-bg-white dark:ep-bg-dark-2" :class="classes">
    <div v-if="$slots.title || title || $slots.extra" class="ep-card-header ep-space-x-1">
      <div class="ep-card-header-wrapper ep-space-x-1">
        <div v-if="$slots.avatar || avatar" class="ep-flex ep-items-center">
          <Image v-if="avatar" :url="avatar" :height="36" :width="36" round />
          <slot name="avatar" />
        </div>
        <div v-if="title" class="ep-card-header-title">
          <span>{{ title }}</span>
          <TextFold v-if="avatar && description" :line="1">
            <span v-if="description" class="ep-card-header__description">{{ description }}</span>
          </TextFold>
          <span v-else-if="description" class="ep-card-header__description">{{ description }}</span>
        </div>
        <slot v-else-if="$slots.title" name="title" />
      </div>
      <div v-if="$slots.extra" class="ep-card-header-extra">
        <slot name="extra" />
      </div>
    </div>
    <div class="ep-card-body">
      <slot v-if="$slots.body" name="body" />
      <slot v-else />
    </div>
    <div v-if="$slots.footer" class="ep-card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>
