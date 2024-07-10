import { computed, defineComponent, h, type PropType } from 'vue';
import CommentItem from '../comment-item/CommentItem.vue';
import type { CommentDataRow, ICommentData } from './API';
import { isEmpty } from 'co-utils-vue';
export default defineComponent({
  name: 'EpComment',
  props: {
    data: {
      type: Object as PropType<ICommentData>,
      default: () => ({} as ICommentData),
    },
  },
  setup: (props) => {
    const computedData = computed(() => props.data);
    return {
      computedData,
    };
  },
  render() {
    const renderSubComment = (item: CommentDataRow) => {
      return {
        'sub-comment':
          !isEmpty(item.subComment) && !isEmpty(item.subComment.list)
            ? () =>
                h(CommentItem, {
                  data: item,
                  isSubReply: true,
                })
            : null,
      };
    };
    const renderComment = () => {
      this.computedData.list.map((item) => {
        return h(
          CommentItem,
          {
            data: item,
          },
          renderSubComment(item)
        );
      });
    };
    return renderComment();
  },
});
