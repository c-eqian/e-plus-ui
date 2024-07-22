<script setup lang="ts">
import * as icons  from '@e-plus-ui/icons'
import { EpIcon } from 'e-plus-ui'
</script>

<template>
<div  class=" cz-grid cz-grid-rows-6 cz-grid-cols-6 cz-gap-2">
  <div v-for="(icon, index) in icons" :key="index">
    <ep-icon  color="#67C23A" width="24" height="24">
      <component :is="icon" />
    </ep-icon>
  </div>
</div>
</template>

<style scoped lang="scss">

</style>
