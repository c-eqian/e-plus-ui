<script setup lang="ts">
import { icons } from '@e-plus-ui/icons/global';
import { EpSelectIcon } from 'e-plus-ui';
</script>

<template>
  <div class="cz-w-96">
    <EpSelectIcon :searchable="false" :icons="Object.keys(icons)"></EpSelectIcon>
  </div>
</template>

<style scoped lang="scss"></style>
