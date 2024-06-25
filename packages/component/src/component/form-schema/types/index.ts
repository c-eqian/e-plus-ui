import type { ComponentProps } from '../components/types';
import type { ComputedRef, VNode, Ref } from 'vue';
/**
 * 使用映射类型创建一个新类型，该类型将每个组件类型映射到其对应的属性类型
 */
export type ComponentPropsByType<
  T,
  P extends T
> = P extends keyof ComponentProps ? ComponentProps[P] : never;
/**
 * 扩展参数
 */
export type FormExtraPropsType = { [k: string]: any };
/**
 * 渲染器
 */
export type Render<T = any, P = any> = (scoped: {
  item: ComputedRef<P>;
  model: Ref<T>;
}) =>
  | VNode<any, any, any>
  | VNode<any, any, any>[]
  | null
  | string
  | number
  | undefined;

export type RegisterFn<T = any> = (formInstance: T) => void;
export type UpdateFieldValue = (prop: string, value: unknown) => void;
