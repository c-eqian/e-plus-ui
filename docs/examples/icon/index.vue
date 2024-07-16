<script setup lang="ts">
import { Level0 } from '@e-plus-ui/icons'
import { EpIcon, EpCard } from 'e-plus-ui'
</script>

<template>
<EpCard title="单独使用">
  <Level0 class="cz-w-6 cz-h-6"></Level0>
</EpCard>
  <EpCard title="混合使用">
    <ep-icon color="red" width="30" height="30">
      <Level0></Level0>
    </ep-icon>
  </EpCard>
</template>

<style scoped lang="scss">

</style>
