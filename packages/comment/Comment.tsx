import { computed, defineComponent, h, type PropType, provide } from 'vue';
import CommentItem from '../comment-item/CommentItem.vue';
import type { CommentDataRow, ICommentData, ICommentConfig } from './API';
import { isEmpty, deepObjectValue } from 'co-utils-vue';
import { defaultFields } from './commentProps';
import { __COMMENT_FIELD_CONFIG_KEY__ } from './constants';
export default defineComponent({
  name: 'EpComment',
  props: {
    data: {
      type: Object as PropType<ICommentData>,
      default: () => ({} as ICommentData),
    },
    fields: {
      type: Object as PropType<ICommentConfig>,
      default: () => defaultFields as ICommentConfig,
    },
  },
  setup: (props) => {
    const computedData = computed(() => props.data);
    const computedFields = computed(() => props.fields);
    provide(__COMMENT_FIELD_CONFIG_KEY__, computedFields);
    return {
      computedData,
      computedFields,
    };
  },
  render() {
    const { subComment, commentId, username, content, children } =
      this.computedFields;
    const hasSub = (item: CommentDataRow) => {
      return (
        item[subComment!] &&
        !isEmpty(item[subComment!]) &&
        !isEmpty(item[subComment!].list)
      );
    };
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
    const renderSubComment = (item: CommentDataRow) => {
      if (!item[children!] || isEmpty(item[children!])) {
        return <CommentItem data={item} isSubReply={true}></CommentItem>;
      }
      return item?.[children!]?.map((sub: CommentDataRow) => {
        return (
          <CommentItem
            data={sub}
            isSubReply={true}
            key={sub[commentId!]}
            v-slots={renderReplySlot(item, sub)}
          ></CommentItem>
        );
      });
    };
    const renderComment = () => {
      return this.computedData.list.map((item) => {
        return h(
          CommentItem,
          {
            data: item,
            key: item[commentId!],
          },
          hasSub(item)
            ? {
                'sub-comment': () =>
                  item?.[subComment!]?.list.map((sub: CommentDataRow) => {
                    return renderSubComment(sub);
                  }),
              }
            : undefined
        );
      });
    };
    return renderComment();
  },
});
