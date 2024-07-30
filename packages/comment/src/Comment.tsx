import {
  computed,
  defineComponent,
  h,
  onUnmounted,
  type PropType,
  provide,
  ref,
  type SlotsType,
} from 'vue';
import CommentItem from './Item';
import type {
  CommentDataRow,
  ICommentData,
  ICommentConfig,
  ItemSlots,
  IResolveParams,
  CommentLoadFn,
} from '../type';
import { isEmpty, deepObjectValue, useMerge, isFunction } from 'co-utils-vue';
import { defaultFields } from '../commentProps';
import { __COMMENT_FIELD_CONFIG_KEY__ } from '../constants';
import { useComment } from '../hooks/useComment';
import LoadMore from './LoadMore.vue';
export default defineComponent({
  name: 'EpComment',
  props: {
    data: {
      type: Object as PropType<ICommentData>,
      default: () => ({} as ICommentData),
    },
    config: {
      type: Object as PropType<ICommentConfig>,
      default: () => ({}),
    },
    load: {
      type: Function as PropType<CommentLoadFn>,
    },
  },
  emits: ['click-reply', 'click-like', 'confirm-reply', 'load'],
  slots: Object as SlotsType<ItemSlots>,
  setup: (props) => {
    const commentData = ref<ICommentData>(props.data as ICommentData);
    const computedData = computed(() => commentData.value);
    const computedConfig = computed(() => {
      return useMerge({}, defaultFields, props.config) as ICommentConfig;
    });
    const loadingMap = ref({
      level1: false,
      level2: false,
    });
    const loadingStatus = () => {
      const isLoading = ref(false);
      const setStatus = (val: boolean) => {
        isLoading.value = val;
      };
      return {
        isLoading,
        setStatus,
      };
    };
    provide(__COMMENT_FIELD_CONFIG_KEY__, computedConfig);
    /**
     * 获取值
     * @param key
     * @param isField
     */
    const getValueByKey = (key: string, isField = false) => {
      const _key = isField ? `commentFields.${key}` : key;
      return deepObjectValue(computedConfig.value, _key) ?? _key;
    };
    const {
      getMapValues,
      addMapValues,
      clearMapValues,
      getRecordComment,
      getChildrenComments,
      getParentComment,
      getParentNodes,
      appendComments,
      updateComment,
      updateLikeCount,
      loadData,
    } = useComment({
      data: commentData,
    });
    onUnmounted(() => {
      clearMapValues();
    });
    return {
      computedData,
      appendComments,
      getValueByKey,
      getParentComment,
      getRecordComment,
      getChildrenComments,
      getMapValues,
      addMapValues,
      getParentNodes,
      clearMapValues,
      updateComment,
      computedConfig,
      loadingMap,
      loadingStatus,
      loadData,
      updateLikeCount,
    };
  },
  render() {
    const { addMapValues, getValueByKey } = this;
    const hasSub = (item: CommentDataRow) => {
      const _subComment = deepObjectValue(
        item,
        getValueByKey('subComment', true)
      );
      return _subComment && !isEmpty(_subComment) && !isEmpty(_subComment.list);
    };
    const getItemSlots = (
      _params: Partial<IResolveParams> & { slots?: any }
    ) => {
      const { slots, ...args } = _params;
      const _slots: Record<string, any> = {};
      if (this.$slots.avatar) {
        _slots.avatar = () => this.$slots.avatar(args as IResolveParams);
      }
      if (this.$slots.level) {
        _slots.level = () => this.$slots.level(args as IResolveParams);
      }
      if (this.$slots.content) {
        _slots.content = () => this.$slots.content(args as IResolveParams);
      }
      if (this.$slots.left) {
        _slots.left = () => this.$slots.left(args as IResolveParams);
      }
      if (this.$slots.right) {
        _slots.right = () => this.$slots.right(args as IResolveParams);
      }
      if (this.$slots.actions) {
        _slots.actions = () => this.$slots.actions(args as IResolveParams);
      }
      if (this.$slots.editor) {
        _slots.editor = () => this.$slots.editor(args as IResolveParams);
      }
      return _slots;
    };
    /**
     * 渲染加载更多
     */
    const renderLoadingMore = (isSubReply = false, args?: any) => {
      return (
        <LoadMore
          isReply={isSubReply}
          onLoad={(loadDone: any) =>
            this.loadData({
              loadDone,
              isSubReply,
              ...args,
            })
          }
        ></LoadMore>
      );
    };
    /**
     * 评论组件渲染
     * @param _params
     */
    const renderCommentItem = (
      _params: Partial<IResolveParams> & { slots?: any }
    ) => {
      const {
        item,
        isSubReply = false,
        level1 = {},
        reply,
        slots,
        $index = -1,
        index = -1,
      } = _params;
      const getSlots = () => {
        const _slots = getItemSlots({
          item,
          isSubReply,
          level1,
          reply,
          $index,
          index,
        });
        return {
          ..._slots,
          ...(isFunction(slots) ? slots() : null),
        };
      };
      return (
        <CommentItem
          data={item}
          level1={level1}
          isSubReply={isSubReply}
          reply={reply}
          onClick-like={(args: any) => {
            this.$emit('click-like', {
              ...args,
              item,
              isSubReply,
              level1,
              reply,
              $index,
              index,
            });
          }}
          onClick-reply={(args: any) => {
            this.$emit('click-reply', {
              ...args,
              item,
              isSubReply,
              level1,
              reply,
              $index,
              index,
            });
          }}
          onConfirm-reply={(args: any) => {
            this.$emit('confirm-reply', {
              ...args,
              item,
              isSubReply,
              level1,
              reply,
              $index,
              index,
              resolve: (list: CommentDataRow | CommentDataRow[]) => {
                this.appendComments(list, item);
              },
            });
          }}
          key={deepObjectValue(item, getValueByKey('commentId', true))}
          v-slots={getSlots()}
        ></CommentItem>
      );
    };
    /**
     * 递归处理二级评论及之后的评论
     * @param item
     * @param _children
     * @param level1
     * @param nodes
     * @param parentItem
     * @param $index
     * @param index
     */
    const deepMoreLevel2 = (
      item: CommentDataRow,
      _children: CommentDataRow[],
      level1: CommentDataRow,
      nodes: any[] = [],
      parentItem?: CommentDataRow,
      $index = -1,
      index = -1
    ) => {
      addMapValues(item, {
        parent: parentItem,
        children: _children ?? [],
        $index,
        index,
      });
      if (parentItem !== undefined) {
        nodes.push(
          renderCommentItem({
            item,
            isSubReply: true,
            level1,
            reply: parentItem,
            $index,
            index,
          })
        );
      } else {
        nodes.push(
          renderCommentItem({ item, isSubReply: true, level1, $index, index })
        );
      }
      _children?.forEach((sub: CommentDataRow, _index) => {
        const __children = deepObjectValue(
          sub,
          getValueByKey('children', true)
        );
        if (__children && !isEmpty(__children)) {
          deepMoreLevel2(sub, __children, level1, nodes, item, $index, _index);
        } else {
          nodes.push(
            renderCommentItem({
              item: sub,
              isSubReply: true,
              level1,
              reply: item,
              $index,
              index,
            })
          );
        }
      });
    };
    /**
     * 二级回复评论渲染
     * @param item
     * @param level1
     * @param $index
     * @param index
     */
    const renderSubComment = (
      item: CommentDataRow,
      level1: CommentDataRow,
      $index: number,
      index: number
    ) => {
      const nodes: any[] = [];
      const dataLevel = getValueByKey('dataLevel');
      if (dataLevel === 2) {
        const _reply = item[getValueByKey('reply', true)!] ?? {};
        addMapValues(item, {
          parent: level1,
          children: [],
          $index,
          index,
        });
        if (isEmpty(_reply)) {
          nodes.push(
            renderCommentItem({ item, isSubReply: true, level1, $index, index })
          );
        } else {
          nodes.push(
            renderCommentItem({
              item,
              isSubReply: true,
              level1,
              reply: _reply,
              $index,
              index,
            })
          );
        }
      } else if (dataLevel > 2) {
        const _children = deepObjectValue(
          item,
          getValueByKey('children', true)
        );
        if (!_children || isEmpty(_children)) {
          return renderCommentItem({ item, isSubReply: true, level1, $index });
        }
        deepMoreLevel2(item, _children, level1, nodes, {}, $index);
      }
      return nodes;
    };
    /**
     * 二级评论渲染
     * @param item
     * @param $index
     */
    const renderSlot = (item: CommentDataRow, $index: number) => {
      const _subComment = deepObjectValue(
        item,
        getValueByKey('subComment', true)
      );
      if (hasSub(item)) {
        const { list = [], hasMore } = _subComment;
        addMapValues(item, {
          parent: undefined,
          children: list,
          $index: -1,
          index: $index,
        });
        return {
          default: () => {
            const vNodes = list.map((sub: CommentDataRow, index: number) => {
              return renderSubComment(sub, item, $index, index);
            });
            if (hasMore) {
              vNodes.push(renderLoadingMore(true, { item }));
            }
            return vNodes;
          },
        };
      }
      addMapValues(item, {
        parent: undefined,
        children: [],
        $index: -1,
        index: $index,
      });
      return null;
    };
    // 评论渲染
    const renderComment = () => {
      const vNodes = this.computedData.list.map((item, index) => {
        return renderCommentItem({
          item,
          isSubReply: false,
          level1: {},
          reply: {},
          $index: index,
          slots: () => renderSlot(item, index),
        });
      });
      if (this.computedData.hasMore) {
        vNodes.push(renderLoadingMore(false));
      }
      return vNodes;
    };
    return renderComment();
  },
});
