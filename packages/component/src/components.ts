// @ts-nocheck

import EpButton from "./component/button/index";
import EpCard from "./component/card/index";
declare module "@vue/runtime-core" {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    EpButton: typeof EpButton;
    EpCard: typeof EpCard;
  }
}

export {};
