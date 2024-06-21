import { Component } from 'vue';
import { FormSchemaType } from '../type';
import { ElInput } from 'element-plus';
const componentsMap = new Map<FormSchemaType, Component<any>>();
/**
 * el基础组件
 */
componentsMap.set('input', ElInput);
/**
 * 扩展组件
 */

export { componentsMap };
