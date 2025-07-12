<script setup lang="ts">
import { EpDiamondLoading, EpLetterLoading, EpLoading } from 'e-plus-ui';
import { ref, type Ref } from 'vue';
const useLoadingState = (): [Ref<boolean>, (v: boolean) => void] => {
  const loading = ref(false);
  const setLoading = function (v: boolean) {
    loading.value = v;
  };
  return [loading, setLoading];
};
function showLoading(setLoadingFn: (v: boolean) => void) {
  setLoadingFn(true);
  setTimeout(() => {
    setLoadingFn(false);
  }, 5000);
}

const [letterLoading, setLetterLoading] = useLoadingState(); // EpLetterLoading
const [diamondLoading, setDiamondLoading] = useLoadingState(); // EpDiamondLoading
</script>

<template>
  <div class="loading-demo">
    <div class="test-grid">
      <EpLoading :visible="letterLoading" size="small">
        <template #icon>
          <EpLetterLoading></EpLetterLoading>
        </template>
        <div class="test-item">
          <div class="content">
            <p>自定义 loading</p>
            <button @click="showLoading(setLetterLoading)">显示 5 秒 自动关闭</button>
          </div>
        </div>
      </EpLoading>
      <EpLoading :visible="diamondLoading" size="small">
        <template #icon>
          <EpDiamondLoading></EpDiamondLoading>
        </template>
        <div class="test-item">
          <div class="content">
            <p>自定义 loading</p>
            <button @click="showLoading(setDiamondLoading)">显示 5 秒 自动关闭</button>
          </div>
        </div>
      </EpLoading>
    </div>
  </div>
</template>

<style scoped lang="scss">
.loading-demo {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
.test-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  /* 让子项自动换行 */
}

.test-item {
  flex: 0 1 340px; /* 最小宽度340px，允许收缩和增长 */
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  background: #f9f9f9;
  margin-bottom: 0; /* 由gap控制间距 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 260px;
  max-width: 100%;
}

.content {
  text-align: center;
  margin-top: 20px;
}

button {
  padding: 8px 16px;
  background: #1890ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
}

button:hover {
  background: #40a9ff;
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(24, 144, 255, 0.3);
}
</style>
