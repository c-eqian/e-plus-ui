// @ts-nocheck

import EpButton from "./component/button/index";

declare module "@vue/runtime-core" {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    EpButton: typeof EpButton;
  }
}

export {};
