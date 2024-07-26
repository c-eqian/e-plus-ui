import type { CommentDataRow, ICommentData } from '../API';
import { isArray, isEmpty } from 'co-utils-vue';
import { getCurrentInstance, type Ref, ref } from 'vue';
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
interface WatcherPropsData {
  data: Ref<ICommentData>;
}
export const useComment = (watcherPropsData: WatcherPropsData) => {
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
    return recordsDataMap.value.get(item[key]);
  };
  const addMapValues = (item: CommentDataRow, values: CommentRecordMap) => {
    const key = instance.getValueByKey('commentId');
    recordsDataMap.value.set(item[key], values);
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
  /**
   *
   * @param recordItem 如果为空，默认一级
   * @param items
   */
  const appendComments = (
    items: CommentDataRow[] | CommentDataRow,
    recordItem?: CommentDataRow
  ) => {
    const { list = [] } = watcherPropsData.data.value;
    const { getValueByKey } = instance;
    //   首次回复
    if (!recordItem || isEmpty(recordItem)) {
      watcherPropsData.data.value.list = list?.concat(items);
      return;
    }
    if (getValueByKey('dataLevel') < 3) {
      const _recordItem = getMapValues(recordItem);
      if (!_recordItem) return;
      const { $index, index } = _recordItem;
      // dataLevel只有两级的情况下，回复一级,形成二级
      if (($index === -1 && index > -1) || $index > -1) {
        const newIndex = $index > -1 ? $index : index;
        const subCommentKey = getValueByKey('subComment');
        if (!list[newIndex][subCommentKey]) {
          list[newIndex][subCommentKey] = {
            total: 1,
            list: [],
          };
        }
        const _subList = list[newIndex][subCommentKey].list ?? [];
        watcherPropsData.data.value.list[newIndex][subCommentKey].list =
          _subList.concat(items);
        return;
      }
    }
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
    appendComments,
  };
};
