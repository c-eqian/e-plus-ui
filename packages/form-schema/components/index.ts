import { Component } from 'vue';
import { FormSchemaType } from '../type';
import {
  ElAutocomplete,
  ElCascader,
  ElCheckbox,
  ElCheckboxGroup,
  ElDatePicker,
  ElDivider,
  ElInput,
  ElInputNumber,
  ElRadio,
  ElRadioGroup,
  ElRate,
  ElSlider,
  ElSwitch,
  ElSelect,
  ElTimePicker,
  ElTimeSelect,
} from 'element-plus';
const componentsMap = new Map<FormSchemaType, Component<any>>();
/**
 * el基础组件
 */
componentsMap.set('input', ElInput);
componentsMap.set('cascade', ElCascader);
componentsMap.set('radio', ElRadio);
componentsMap.set('radio-group', ElRadioGroup);
componentsMap.set('switch', ElSwitch);
componentsMap.set('checkbox', ElCheckbox);
componentsMap.set('checkbox-group', ElCheckboxGroup);
componentsMap.set('time-picker', ElTimePicker);
componentsMap.set('time-select', ElTimeSelect);
componentsMap.set('date-picker', ElDatePicker);
componentsMap.set('slider', ElSlider);
componentsMap.set('rate', ElRate);
componentsMap.set('input-number', ElInputNumber);
componentsMap.set('divider', ElDivider);
componentsMap.set('divider', ElDivider);
componentsMap.set('autocomplete', ElAutocomplete);
componentsMap.set('select', ElSelect);
/**
 * 扩展组件
 */

export { componentsMap };
