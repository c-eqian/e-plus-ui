<template>
  <div class="play">
    <div class="cz-max-w-5xl cz-mx-auto cz-my-0 cz-w-96 cz-h-96">
      <ep-skeleton :loading="loading">
        <ep-card
          v-if="false"
          shadow="always"
          title="5555"
          description="描述内容描描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容述内容描述内容"
          avatar="https://tdesign.gtimg.com/site/source/card-demo.png"
        >
          <template #extra>
            <el-button>按钮</el-button>
          </template>
          <template #footer>
            <el-button>按钮</el-button>
          </template>
        </ep-card>
        <ep-card>
          <Form></Form>
        </ep-card>
      </ep-skeleton>
    </div>
  </div>
</template>
<script setup lang="ts">
import { EpCard, EpSkeleton } from '../packages';
import Index from './index.vue';
import Form from './form.vue';
import { ref } from 'vue';
const loading = ref(true);
setTimeout(() => {
  loading.value = false;
}, 5000);
</script>
<style lang="less">
html,
body,
#app {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.play {
  width: 100%;
  height: 100%;
  padding-top: 100px;
  display: flex;
  flex-flow: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.main-container {
  width: 500px;
  height: 800px;
}
</style>
