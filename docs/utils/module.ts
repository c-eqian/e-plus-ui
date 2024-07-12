import type { Component } from 'vue';
export const getModule = (path: string): (() => Promise<Component>) => {
  const moduleObj: Record<string, () => Promise<Component>> = (import.meta as any).glob(
    '/examples/**/*.vue'
  );
  const initializePath = `/examples/${path}.vue`;
  if (moduleObj[initializePath]) {
    return moduleObj[initializePath];
  } else {
    throw Error('当前路由引入错误');
  }
};
