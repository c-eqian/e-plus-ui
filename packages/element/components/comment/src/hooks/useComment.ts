import { isArray, isBoolean, isEmpty, isFunction } from '@eqian/utils-vue';
import { getCurrentInstance, ref, type Ref } from 'vue';
import type { CommentDataRow, ICommentData, LoadData } from '../type';
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
type WatcherPropsData = {
  data: Ref<ICommentData<any>>;
};
const transformList = (items: CommentDataRow[] | CommentDataRow) => {
  return isArray(items) ? items : [items];
};
export const useComment = (watcherPropsData: WatcherPropsData) => {
  // 一个父节点与子节点的映射
  const recordsDataMap = ref(new Map<string, CommentRecordMap>());
  const instance = getCurrentInstance()?.proxy as any;
  const resolve = (
    list: CommentDataRow[],
    data: LoadData & { loadDone: any },
    hasMore?: boolean,
    frontend?: boolean
  ) => {
    if (!isArray(list)) {
      throw new TypeError('[resolve] list must be an array');
    }
    const { isSubReply, loadDone, item } = data;
    if (isSubReply) {
      appendComments(list, item, hasMore, frontend);
    } else {
      appendComments(list, {}, hasMore, frontend);
    }
    loadDone();
  };
  const getMapValues = (item: CommentDataRow) => {
    const key = instance.getValueByKey('commentId', true);
    return recordsDataMap.value.get(item[key]);
  };
  const addMapValues = (
    item: CommentDataRow,
    values: CommentRecordMap,
    parentReply?: CommentDataRow
  ) => {
    if (parentReply) {
      const key = instance.getValueByKey('commentId', true);
      const { children = [], ...data } = recordsDataMap.value.get(parentReply[key]) ?? {};
      children.push(item);
      recordsDataMap.value.set(parentReply[key], {
        ...data,
        children
      } as CommentRecordMap);
    }
    const key = instance.getValueByKey('commentId', true);
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
      if ((parentNode && parentNode.parent !== undefined) || parentNode?.parent) {
        diff(parentNode?.parent);
      } else {
        return recordItems;
      }
    };
    return diff(recordItem);
  };
  /**
   * 追加记录
   * @param recordItem 如果为空，默认一级
   * @param items
   * @param hasMore
   * @param frontend 是否插入到前端
   */
  const appendComments = (
    items: CommentDataRow[] | CommentDataRow,
    recordItem?: CommentDataRow,
    hasMore?: boolean,
    frontend?: boolean
  ) => {
    const { list = [] } = watcherPropsData.data.value;
    const { getValueByKey } = instance;
    const sortType = getValueByKey('sortType');
    //   首次回复
    if (!recordItem || isEmpty(recordItem)) {
      if ((isBoolean(frontend) && !frontend) || sortType === 'asc') {
        watcherPropsData.data.value.list = list?.concat(items);
      } else {
        list.splice(0, 0, ...transformList(items));
        watcherPropsData.data.value.list = list;
      }
      (watcherPropsData.data.value as any)[getValueByKey('hasMore')] = !!hasMore;
      return;
    }
    if (getValueByKey('dataLevel') < 3) {
      const _recordItem = getMapValues(recordItem);
      if (!_recordItem) return;
      const { $index, index } = _recordItem;
      // dataLevel只有两级的情况下，回复一级,形成二级
      if (($index === -1 && index > -1) || $index > -1) {
        const newIndex = $index > -1 ? $index : index;
        const subCommentKey = getValueByKey('subComment', true);
        if (!list[newIndex][subCommentKey]) {
          list[newIndex][subCommentKey] = {
            total: 1,
            list: []
          };
        }
        const _subList = list[newIndex][subCommentKey].list ?? [];
        if ((isBoolean(frontend) && !frontend) || sortType === 'asc') {
          watcherPropsData.data.value.list[newIndex][subCommentKey].list = _subList.concat(items);
        } else {
          _subList.splice(0, 0, ...transformList(items));
          watcherPropsData.data.value.list[newIndex][subCommentKey].list = _subList;
        }
        watcherPropsData.data.value.list[newIndex][subCommentKey][getValueByKey('hasMore')] =
          !!hasMore;
        return;
      }
    }
  };
  /**
   * 更新
   * @param recordItem 原始记录项
   * @param item 新值
   */
  const updateComment = (recordItem: CommentDataRow, item: CommentDataRow) => {
    if (!recordItem || isEmpty(recordItem)) return;
    const { getValueByKey } = instance;
    if (getValueByKey('dataLevel') < 3) {
      const _recordItem = getMapValues(recordItem);
      if (!_recordItem) return;
      const { $index, index } = _recordItem;
      if (index < 0) return;
      const { list = [] } = watcherPropsData.data.value;
      if (isEmpty(list)) return;
      // 父节点索引-1，一级
      if ($index < 0) {
        watcherPropsData.data.value.list[index] = item;
        return;
      }
      const subCommentKey = getValueByKey('subComment', true);
      watcherPropsData.data.value.list[$index][subCommentKey].list[index] = item;
    }
  };
  /**
   * 更新评论数量
   * @param recordItem
   * @param likeCount
   */
  const updateLikeCount = (recordItem: CommentDataRow, likeCount: number) => {
    if (!recordItem || isEmpty(recordItem)) return;
    const { getValueByKey } = instance;
    if (getValueByKey('dataLevel') < 3) {
      const _recordItem = getMapValues(recordItem);
      if (!_recordItem) return;
      const { $index, index } = _recordItem;
      if (index < 0) return;
      const { list = [] } = watcherPropsData.data.value;
      if (isEmpty(list)) return;
      // 父节点索引-1，一级
      if ($index < 0) {
        watcherPropsData.data.value.list[index][getValueByKey('likeCount', true)] = likeCount;
        return;
      }
      const subCommentKey = getValueByKey('subComment', true);
      watcherPropsData.data.value.list[$index][subCommentKey].list[index][
        getValueByKey('likeCount', true)
      ] = likeCount;
    }
  };
  /**
   * 删除
   * @param recordItem
   */
  const deleteComment = (recordItem: CommentDataRow) => {
    if (!recordItem || isEmpty(recordItem)) return;
    const { getValueByKey } = instance;
    if (getValueByKey('dataLevel') < 3) {
      const _recordItem = getMapValues(recordItem);
      if (!_recordItem) return;
      const { $index, index, children } = _recordItem;
      if (index < 0) return;
      const { list = [] } = watcherPropsData.data.value;
      // 递归删除子评论或者引用评论
      const diffDelete = (_children: CommentDataRow[] = []) => {
        _children?.forEach(item => {
          deleteComment(item);
        });
      };
      if (isEmpty(list)) return;
      // 父节点索引-1，一级
      if ($index < 0) {
        watcherPropsData.data.value.list.splice(index, 1);
        diffDelete(children);
        return;
      }
      const subCommentKey = getValueByKey('subComment', true);
      if (
        watcherPropsData.data.value.list[$index] &&
        subCommentKey in watcherPropsData.data.value.list[$index]
      ) {
        watcherPropsData.data.value.list[$index][subCommentKey].list.splice(index, 1);
        diffDelete(children);
      }
    }
  };
  const loadData = (data: LoadData & { loadDone: any }) => {
    const { item, isSubReply } = data;
    const { load } = instance;
    if (!isFunction(load)) return;
    load.call(null, {
      isSubReply,
      item,
      resolve: (items: CommentDataRow[], hasMore?: boolean) => resolve(items, data, hasMore, false)
    });
  };
  return {
    resolve,
    getMapValues,
    addMapValues,
    recordsDataMap,
    updateComment,
    deleteComment,
    clearMapValues,
    getRecordComment,
    getChildrenComments,
    getParentComment,
    getParentNodes,
    appendComments,
    updateLikeCount,
    loadData
  };
};
