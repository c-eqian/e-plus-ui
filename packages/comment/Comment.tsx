import { computed, defineComponent, h, type PropType } from 'vue';
import CommentItem from '../comment-item/CommentItem.vue';
import type { CommentDataRow, ICommentData, ICommentConfig } from './API';
import { isEmpty, deepObjectValue, useMerge, isFunction } from 'co-utils-vue';
import { defaultFields } from './commentProps';
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
  },
  setup: (props) => {
    const computedData = computed(() => props.data);
    const computedConfig = computed(() => {
      return useMerge({}, defaultFields, props.config) as ICommentConfig;
    });
    return {
      computedData,
      computedConfig,
    };
  },
  render() {
    const { subComment, commentId, username, content, children } =
      this.computedConfig;
    const hasSub = (item: CommentDataRow) => {
      return (
        item[subComment!] &&
        !isEmpty(item[subComment!]) &&
        !isEmpty(item[subComment!].list)
      );
    };
    /**
     * 评论组件渲染
     * @param item
     * @param isSubReply
     * @param slot
     */
    const renderCommentItem = (
      item: CommentDataRow,
      isSubReply = false,
      slot?: () => any
    ) => {
      return (
        <CommentItem
          data={item}
          config={this.computedConfig}
          isSubReply={isSubReply}
          key={item[commentId!]}
          name={this.name}
          v-slots={isFunction(slot) ? slot() : null}
        ></CommentItem>
      );
    };
    /**
     * 回复渲染
     * @param item
     * @param sub
     */
    const renderReplySlot = (item: CommentDataRow, sub: CommentDataRow) => {
      return {
        reply: () => (
          <div class="cz-flex">
            <div class="cz-relative cz-w-fit">
              <span>{deepObjectValue(sub, username)}</span>
            </div>
            <span class="cz-px-1">
              <strong>回复</strong>
              {deepObjectValue(item, username)}
            </span>
          </div>
        ),
        'reply-content': () => (
          <div class="cz-border cz-my-1 cz-text-[12px] cz-text-gray-600">
            <div class="cz-p-2">“{item[content!]}”</div>
          </div>
        ),
      };
    };
    /**
     * 二级回复评论渲染
     * @param item
     */
    const renderSubComment = (item: CommentDataRow) => {
      if (!item[children!] || isEmpty(item[children!])) {
        return renderCommentItem(item, true);
      }
      return item?.[children!]?.map((sub: CommentDataRow) => {
        return renderCommentItem(sub, true, () => renderReplySlot(item, sub));
      });
    };
    /**
     * 二级评论渲染
     * @param item
     */
    const renderSlot = (item: CommentDataRow) => {
      return hasSub(item)
        ? {
            'sub-comment': () =>
              item?.[subComment!]?.list.map((sub: CommentDataRow) => {
                return renderSubComment(sub);
              }),
          }
        : undefined;
    };
    // 评论渲染
    const renderComment = () => {
      return this.computedData.list.map((item) => {
        return renderCommentItem(item, true, () => renderSlot(item));
      });
    };
    return renderComment();
  },
});
