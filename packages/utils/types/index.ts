import type { VNode } from 'vue';

/**
 * 空函数
 */
export type CallbackVoid<T = any> = (...args: T[]) => void;

export type BaseVNode = VNode | Element | string;
export type BaseVNodes = BaseVNode[];
/**
 * 渲染单个VNode
 */
export type RenderVNode<T = any> = (...args: T[]) => BaseVNode;
export type RenderVNodes<T = any> = (...args: T[]) => BaseVNodes;
