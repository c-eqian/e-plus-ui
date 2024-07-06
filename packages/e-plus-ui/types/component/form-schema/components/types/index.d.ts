import type { Component, VNodeProps } from 'vue';
type ExtractPropTypes<T extends Component> = T extends new (...args: any) => any ? Omit<InstanceType<T>['$props'], keyof VNodeProps> : never;
export interface ComponentTypeProps {
    'input-number': ExtractPropTypes<typeof import('element-plus/es')['ElInputNumber']>;
    select: ExtractPropTypes<typeof import('element-plus/es')['ElSelect']>;
    'tree-select': ExtractPropTypes<typeof import('element-plus/es')['ElTreeSelect']>;
    radio: ExtractPropTypes<typeof import('element-plus/es')['ElRadio']>;
    checkbox: ExtractPropTypes<typeof import('element-plus/es')['ElCheckbox']>;
    'radio-group': ExtractPropTypes<typeof import('element-plus/es')['ElRadioGroup']>;
    'checkbox-group': ExtractPropTypes<typeof import('element-plus/es')['ElCheckboxGroup']>;
    input: ExtractPropTypes<typeof import('element-plus/es')['ElInput']>;
    autocomplete: ExtractPropTypes<typeof import('element-plus/es')['ElAutocomplete']>;
    'date-picker': ExtractPropTypes<typeof import('element-plus/es')['ElDatePicker']>;
    'time-picker': ExtractPropTypes<typeof import('element-plus/es')['ElTimePicker']>;
    'time-select': ExtractPropTypes<typeof import('element-plus/es')['ElTimeSelect']>;
    switch: ExtractPropTypes<typeof import('element-plus/es')['ElSwitch']>;
    cascade: ExtractPropTypes<typeof import('element-plus/es')['ElCascader']>;
    slider: ExtractPropTypes<typeof import('element-plus/es')['ElSlider']>;
    rate: ExtractPropTypes<typeof import('element-plus/es')['ElRate']>;
    divider: ExtractPropTypes<typeof import('element-plus/es')['ElDivider']>;
}
export {};
