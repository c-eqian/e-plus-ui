<script setup lang="ts">
import { icons } from '@e-plus-ui/icons/global';
import { EpIcon, EpSelectIcon, type IconData } from 'e-plus-ui';
import { computed, h, markRaw, ref } from 'vue';
import SvgIcon from './svg-icon.vue';
import SvgIcon2 from './svg-icon2.vue';
const icon = ref('');
const customIcon = [
  {
    name: 'CuAuz',
    icon: h(EpIcon, null, {
      default: () => h(SvgIcon)
    })
  },
  {
    name: 'CuBluetooth',
    icon: markRaw(SvgIcon2)
  }
] as IconData[];
const iconData = computed(() => {
  return customIcon.concat(Object.keys(icons));
});
</script>

<template>
  <div class="cz-w-96">
    <EpSelectIcon v-model="icon" :icons="iconData"></EpSelectIcon>
  </div>
</template>

<style scoped lang="scss"></style>
