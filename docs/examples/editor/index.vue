<script setup lang="ts">
import { EpEditor } from 'e-plus-ui'
import {ref} from "vue";
import { initEmoji } from '../../utils/emoji';
const value = ref('')
</script>

<template>
<EpEditor v-model="value" useEmojis :emojis="initEmoji()"></EpEditor>
</template>

<style scoped lang="scss">

</style>
