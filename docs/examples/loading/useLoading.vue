<script setup lang="ts">
import { useLoading } from 'e-plus-ui';
function showLoading(setLoadingFn: (v: boolean) => void) {
  setLoadingFn(true);
  setTimeout(() => {
    setLoadingFn(false);
  }, 3000);
}
const { loadingState: defaultLoading } = useLoading();
const { loadingState, containerProps } = useLoading({ text: '使用useLoading' });
const { loadingState: loadingCls } = useLoading({
  text: '指定元素',
  target: '.my-loading'
});
</script>

<template>
  <div class="loading-demo">
    <div class="test-grid">
      <div class="test-item">
        <div class="content">
          <p>默认全屏</p>
          <button @click="showLoading(defaultLoading)">显示 3 秒 自动关闭</button>
        </div>
      </div>
      <div class="test-item" v-bind="containerProps">
        <div class="content">
          <p>通过props参数绑定</p>
          <button @click="showLoading(loadingState)">显示 3 秒 自动关闭</button>
        </div>
      </div>
      <div class="test-item my-loading">
        <div class="content">
          <p>通过元素id或类名</p>
          <button @click="showLoading(loadingCls)">显示 3 秒 自动关闭</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
