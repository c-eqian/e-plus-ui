import { ComponentProps } from '../components/types';
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
