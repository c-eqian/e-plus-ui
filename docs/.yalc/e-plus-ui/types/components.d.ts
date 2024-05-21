import EpButton from "./component/button/index";
declare module "@vue/runtime-core" {
    interface GlobalComponents {
        EpButton: typeof EpButton;
    }
}
export {};
