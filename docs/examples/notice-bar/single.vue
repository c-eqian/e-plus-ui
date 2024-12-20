<script setup lang="ts">
import { EpCard, EpNoticeBar } from 'e-plus-ui';
</script>

<template>
  <EpNoticeBar text="不要等待，时机永远不会恰到好处" />
  <ep-card title="设置速度">
    <EpNoticeBar :step="50" text="不要等待，时机永远不会恰到好处" />
    <EpNoticeBar :step="200" text="不要等待，时机永远不会恰到好处" />
  </ep-card>
</template>

<style scoped lang="scss"></style>
