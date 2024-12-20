<script setup lang="ts">
import { EpNoticeBar } from 'e-plus-ui';
const list = [
  '辛勤的蜜蜂永没有时间悲哀',
  '我这个人走得很慢，但是我从不后退',
  '深窥自己的心，而后发觉一切的奇迹在你自己',
  '苦难磨炼一些人，也毁灭另一些人',
  '不要等待，时机永远不会恰到好处'
];
</script>

<template>
  <EpNoticeBar :list="list" />
</template>

<style scoped lang="scss"></style>
