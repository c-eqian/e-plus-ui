<script setup lang="ts">
import { EpNoticeBar, EpCard } from 'e-plus-ui'
</script>

<template>
<EpNoticeBar text="不要等待，时机永远不会恰到好处">
</EpNoticeBar>
  <ep-card title="设置速度">
    <EpNoticeBar :step="50" text="不要等待，时机永远不会恰到好处">
    </EpNoticeBar>
    <EpNoticeBar :step="200" text="不要等待，时机永远不会恰到好处">
    </EpNoticeBar>
  </ep-card>
</template>

<style scoped lang="scss">

</style>
