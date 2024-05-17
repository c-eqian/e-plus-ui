/*
 * @Description:
 * @Date: 2023-02-20 19:20:06
 * @Author: didi
 * @LastEditTime: 2023-05-22 16:12:52
 */
import * as components from './index';
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    EaButton: typeof components.Button;
    EaIcon: typeof components.Icon;
  }
}
export {};
