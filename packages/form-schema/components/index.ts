import { Component } from 'vue';
import { FormSchemaType } from '../type';
import {
  ElAutocomplete,
  ElCascader,
  ElCheckbox,
  ElDatePicker,
  ElDivider,
  ElInput,
  ElInputNumber,
  ElRadio,
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
componentsMap.set('radio-group', ElRadio);
componentsMap.set('switch', ElSwitch);
componentsMap.set('checkbox-group', ElCheckbox);
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
