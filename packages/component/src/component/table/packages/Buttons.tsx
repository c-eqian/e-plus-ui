import { ElButton } from 'element-plus';
import { computed, defineComponent, h, inject, type PropType } from 'vue';
import { isArray, isObjectLike, isFunction, isString } from 'co-utils-vue';
import type { ITableColumnConfig, OperationType } from '../type';
export default defineComponent({
  name: 'EpButtons',
  props: {
    column: {
      type: Object as PropType<ITableColumnConfig>,
      default: () => ({} as ITableColumnConfig),
    },
    index: {
      type: Number,
      default: -1,
    },
    row: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ['click-btn'],
  setup(props) {
    const eventListeners: any = inject('EVENT-CLICKED');
    const propsComputed = computed(() => props);

    const dynamicButtons = (label: string, props: any) => {
      return h(
        ElButton,
        {
          ...props,
        },
        {
          default: () => label,
        }
      );
    };
    const handleClickEvents = (_type: string) => {
      if (['add', 'edit', 'view', 'delete'].includes(_type)) {
        if (eventListeners[_type] && isFunction(eventListeners[_type])) {
          return eventListeners[_type](
            propsComputed.value.row,
            propsComputed.value.index
          );
        }
      }
      if (eventListeners['btn'] && isFunction(eventListeners['btn'])) {
        return eventListeners.btn(
          _type,
          propsComputed.value.row,
          propsComputed.value.index
        );
      }
    };
    const createBaseOperation = (
      item: OperationType,
      label?: string,
      extra = {}
    ) => {
      const operationMap = getBaseMap(label, extra);
      return operationMap[item];
    };
    const createOperationNode = () => {
      const { operationType } = propsComputed.value.column;
      const { row, index, column } = propsComputed.value;
      if (isArray(operationType)) {
        return operationType.map((item) => {
          if (isString(item)) {
            return createBaseOperation(item) as any;
          } else if (isFunction(operationType)) {
            return operationType({
              row,
              index,
              column,
            });
          } else if (isObjectLike(item)) {
            const {
              type,
              permission,
              label = '',
              extra = {} as any,
              render,
            } = item;
            if (isFunction(render)) {
              return render({
                row,
                index,
                column,
              });
            }
            if (['add', 'edit', 'view', 'delete'].includes(type)) {
              return createBaseOperation(type as OperationType, label, extra);
            } else {
              return isFunction(permission)
                ? permission()
                  ? dynamicButtons(label, {
                      ...extra,
                      onClick: () => handleClickEvents(type),
                    })
                  : null
                : dynamicButtons(label, {
                    ...extra,
                    onClick: () => handleClickEvents(type),
                  });
            }
          } else {
            console.warn('The operationType type is incorrect');
            return null;
          }
        });
      }
    };
    /**
     * 基础操作
     */
    const getBaseMap = (label?: string, extra = {}) => {
      const operationTypeLabel = {
        add: '新增',
        edit: '编辑',
        delete: '删除',
        view: '查看',
      }
      return {
        add: dynamicButtons(label || operationTypeLabel.add, {
          ...{
            type: 'primary',
            link: true,
            icon: 'Plus',
            ...extra,
          },
          onClick: () => handleClickEvents('add'),
        }),
        edit: dynamicButtons(label || operationTypeLabel.edit, {
          ...{
            type: 'info',
            link: true,
            icon: 'Edit',
            ...extra,
          },
          onClick: () => handleClickEvents('edit'),
        }),
        view: dynamicButtons(label || operationTypeLabel.view, {
          ...{
            type: 'primary',
            link: true,
            icon: 'ZoomIn',
            ...extra,
          },
          onClick: () => handleClickEvents('view'),
        }),
        delete: dynamicButtons(label || operationTypeLabel.delete, {
          ...{
            type: 'danger',
            link: true,
            icon: 'Delete',
            ...extra,
          },
          onClick: () => handleClickEvents('delete'),
        }),
      };
    };
    return () =>
      h(
        'div',
        {
          class: 'cz-table__buttons',
        },
        {
          default: () => createOperationNode(),
        }
      );
  },
});
