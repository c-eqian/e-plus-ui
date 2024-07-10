<script setup lang="ts">
import { EpEditor } from 'e-plus-ui'
import {ref} from "vue";
const value = ref('')
</script>

<template>
<EpEditor v-model="value"></EpEditor>
</template>

<style scoped lang="scss">

</style>
