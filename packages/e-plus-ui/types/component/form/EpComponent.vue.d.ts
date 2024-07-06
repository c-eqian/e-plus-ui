/** __vue_virtual_code_placeholder */
import { type PropType } from 'vue';
import { IFormItemConfig } from './type';
declare const _default: import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        default: string;
    };
    item: {
        type: PropType<IFormItemConfig<any>>;
        default: () => IFormItemConfig<any>;
    };
}, {
    props: import("@vue/shared").LooseRequired<{
        readonly name: string;
        readonly item: IFormItemConfig<any>;
    } & {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
        default: string;
    };
    item: {
        type: PropType<IFormItemConfig<any>>;
        default: () => IFormItemConfig<any>;
    };
}>>, {
    name: string;
    item: IFormItemConfig<any>;
}, {}>;
export default _default;
