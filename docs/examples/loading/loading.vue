<script setup lang="ts">
import { EpLoading, useLoading } from 'e-plus-ui';
import { ref, type Ref } from 'vue';

const useLoadingState = (): [Ref<boolean>, (v: boolean) => void] => {
  const loading = ref(false);
  const setLoading = function (v: boolean) {
    loading.value = v;
  };
  return [loading, setLoading];
};

const [testItem1Loading, setTestItem1Loading] = useLoadingState(); // 基础 EpLoading
const [testItem2Loading, setTestItem2Loading] = useLoadingState(); // 圆形进度
const [testItem3Loading, setTestItem3Loading] = useLoadingState(); // 大尺寸
const [testItem4Loading, setTestItem4Loading] = useLoadingState(); // 全屏
const [testItem5Loading, setTestItem5Loading] = useLoadingState(); // 自定义文本
const [testItem6Loading, setTestItem6Loading] = useLoadingState(); // 小尺寸

function showLoading(setLoadingFn: (v: boolean) => void) {
  setLoadingFn(true);
  setTimeout(() => {
    setLoadingFn(false);
  }, 5000);
}
const { loadingState, containerProps } = useLoading({ text: '使用useLoading' });
const handleUseLoading = () => {
  showLoading(loadingState);
};
</script>

<template>
  <div class="loading-demo">
    <div class="test-grid">
      <!-- 基础用法：默认 dot 类型 -->
      <EpLoading :visible="testItem1Loading">
        <div class="test-item">
          <div class="content">
            <p>基础 EpLoading (dot)</p>
            <button @click="showLoading(setTestItem1Loading)">显示 5 秒 自动关闭</button>
          </div>
        </div>
      </EpLoading>

      <!-- 圆形进度 type="circle" -->
      <EpLoading :visible="testItem2Loading" type="circle">
        <div class="test-item">
          <div class="content">
            <p>圆形进度 (circle)</p>
            <button @click="showLoading(setTestItem2Loading)">显示 5 秒 自动关闭</button>
          </div>
        </div>
      </EpLoading>

      <!-- 大尺寸 size="large" -->
      <EpLoading :visible="testItem3Loading" size="large">
        <div class="test-item">
          <div class="content">
            <p>大尺寸 EpLoading</p>
            <button @click="showLoading(setTestItem3Loading)">显示 5 秒 自动关闭</button>
          </div>
        </div>
      </EpLoading>

      <!-- 全屏 loading，带自定义文本 -->
      <EpLoading :visible="testItem4Loading" fullscreen text="全屏加载中..." :z-index="20000">
        <div class="test-item">
          <div class="content">
            <p>全屏 EpLoading</p>
            <button @click="showLoading(setTestItem4Loading)">显示 5 秒 自动关闭</button>
          </div>
        </div>
      </EpLoading>

      <!-- 自定义文本 -->
      <EpLoading :visible="testItem5Loading" text="自定义加载文本...">
        <div class="test-item">
          <div class="content">
            <p>自定义文本 EpLoading</p>
            <button @click="showLoading(setTestItem5Loading)">显示 5 秒 自动关闭</button>
          </div>
        </div>
      </EpLoading>

      <!-- 小尺寸 -->
      <EpLoading :visible="testItem6Loading" size="small">
        <div class="test-item">
          <div class="content">
            <p>小尺寸 EpLoading</p>
            <button @click="showLoading(setTestItem6Loading)">显示 5 秒 自动关闭</button>
          </div>
        </div>
      </EpLoading>
      <!--      useLoading-->
      <div class="test-item" v-bind="containerProps">
        <div class="content">
          <p>使用useLoading</p>
          <button @click="handleUseLoading">显示 5 秒 自动关闭</button>
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
