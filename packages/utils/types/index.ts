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

export type Recordable<K extends string | number | symbol = string, V = unknown> = Record<
  K,
  V
> | null;

/**
 * 获取组件参数
 * @example
 * ``` JavaScript
 * import HelloWorld from './HelloWorld.vue'
 * type Props = ComponentProps<typeof HelloWorld>
 * ```
 */
export type ComponentProps<T> = T extends new (...args: any) => { $props: infer P }
  ? NonNullable<P>
  : T extends (props: infer P, ...args: any) => any
    ? P
    : {};

/**
 * 获取组件插槽
 * ``` JavaScript
 * import HelloWorld from './HelloWorld.vue'
 * type Slots = ComponentSlots<typeof HelloWorld>
 * ```
 */
export type ComponentSlots<T> = T extends new (...args: any) => { $slots: infer S }
  ? NonNullable<S>
  : T extends (props: any, ctx: { slots: infer S; attrs: any; emit: any }, ...args: any) => any
    ? NonNullable<S>
    : {};
/**
 * 获取组件事件
 * ``` JavaScript
 * import HelloWorld from './HelloWorld.vue'
 * type Emits = ComponentEmits<typeof HelloWorld>
 * ```
 */
export type ComponentEmits<T> = T extends new (...args: any) => { $emit: infer E }
  ? NonNullable<E>
  : {};
/**
 * 获取组件导出
 * ``` JavaScript
 * import HelloWorld from './HelloWorld.vue'
 * type Exposed = ComponentExposed<typeof HelloWorld>
 * ```
 */
export type ComponentExposed<T> = T extends new (...args: any) => infer E
  ? E
  : T extends (props: any, ctx: any, expose: (exposed: infer E) => any, ...args: any) => any
    ? NonNullable<E>
    : {};

export type MaybeArray<T> = T | T[];

export type ReturnPromise<T = any> = Promise<T>;
