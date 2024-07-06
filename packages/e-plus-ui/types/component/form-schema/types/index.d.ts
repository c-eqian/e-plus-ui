import type { ComponentTypeProps } from '../components/types';
import type { VNode, Ref, Slot } from 'vue';
/**
 * 使用映射类型创建一个新类型，该类型将每个组件类型映射到其对应的属性类型
 */
export type ComponentPropsByType<T, P> = P extends keyof ComponentTypeProps ? ComponentTypeProps[P] : Record<string, any>;
export type ComponentSlots = {
    slots: {
        [name: string]: Slot | undefined;
    };
};
/**
 * 相关回调参数
 */
export type Scoped<T = any, P = any> = {
    item: P;
    model: Ref<T>;
};
/**
 * 渲染器
 */
export type Render<T = any, P = any> = (scoped: Scoped<T, P>) => VNode<any, any, any> | VNode<any, any, any>[] | null | string | number | undefined;
export type RegisterFn<T = any> = (formInstance: T) => void;
export type UpdateFieldValue = (prop: string, value: unknown) => void;
