<script setup lang="ts">
import { EpEditor } from 'e-plus-ui';
import { ref } from 'vue';
import { initEmoji } from '../../utils/emoji';
const value = ref('');
</script>

<template>
  <EpEditor v-model="value" use-emojis :emojis="initEmoji()" />
</template>

<style scoped lang="scss"></style>
