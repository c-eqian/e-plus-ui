import type { CommentDataRow } from '../API';
import { isArray } from 'co-utils-vue';
import { getCurrentInstance, ref } from 'vue';
export type CommentRecordMap = {
  /**
   * 子节点
   */
  children?: CommentDataRow[];
  /**
   * 父节点
   */
  parent?: CommentDataRow;
  /**
   * 当前索引
   */
  index: number;
  /**
   * 父索引,如果是一级，值为 -1
   */
  $index: number;
};
export const useComment = () => {
  // 一个父节点与子节点的映射
  const recordsDataMap = ref(new Map<string, CommentRecordMap>());
  const instance = getCurrentInstance()?.proxy as any;
  const resolve = (list: CommentDataRow[]) => {
    if (!isArray(list)) {
      throw new TypeError('[resolve] list must be an array');
    }
  };
  const getMapValues = (item: CommentDataRow) => {
    const key = instance.getValueByKey('commentId');
    console.log(recordsDataMap.value);
    return recordsDataMap.value.get(item[key]);
  };
  const addMapValues = (item: CommentDataRow, values: CommentRecordMap) => {
    const key = instance.getValueByKey('commentId');
    recordsDataMap.value.set(item[key], values);
    console.log(recordsDataMap.value);
  };
  const clearMapValues = () => {
    recordsDataMap.value.clear();
  };
  // 获取包含父子节点的comment
  const getRecordComment = (recordItem: CommentDataRow) => {
    return getMapValues(recordItem);
  };
  /**
   * 仅获取父节点
   * @param recordItem
   */
  const getParentComment = (recordItem: CommentDataRow) => {
    return getRecordComment(recordItem)?.parent;
  };
  const getChildrenComments = (recordItem: CommentDataRow) => {
    return getRecordComment(recordItem)?.children ?? [];
  };
  /**
   * 获取recordItem的递级父级
   * @param recordItem
   * @example [recordItemParent1, recordItemParent2, recordItemParent3, ...., recordItem]
   */
  const getParentNodes = (recordItem: CommentDataRow) => {
    const recordItems: CommentDataRow[] = [];
    const diff = (_recordItem: CommentDataRow) => {
      const parentNode = getRecordComment(recordItem);
      if (!parentNode) return recordItems;
      recordItems.unshift(parentNode);
      if (
        (parentNode && parentNode.parent !== undefined) ||
        parentNode?.parent
      ) {
        diff(parentNode?.parent);
      } else {
        return recordItems;
      }
    };
    return diff(recordItem);
  };
  return {
    resolve,
    getMapValues,
    addMapValues,
    recordsDataMap,
    clearMapValues,
    getRecordComment,
    getChildrenComments,
    getParentComment,
    getParentNodes,
  };
};
