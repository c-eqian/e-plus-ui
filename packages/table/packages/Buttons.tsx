import { isFunction, isArray, isObject, isString } from '@eqian/utils-vue';
import { ElButton } from 'element-plus';
import { defineComponent, h, inject, PropType, unref } from 'vue';

import { useProps } from '../hooks/useProps';
import { useHasPermission } from '../hooks/usePermission';

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
    const appContext: any = inject('PINIA-KEY');
    const propsComputed = useProps(props);

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
    const handlePermission = (permission: string[]) => {
      if (!appContext?.$pinia) {
        console.warn('未获取到pinia实例，请确认是否已注册！');
        return false;
      }
      const { state } = appContext.$pinia;
      if (!state || !unref(state)) return false;
      const { permissions = [] } = unref(state)['USER-PERMISSION'];
      return useHasPermission(permission, permissions);
    };
    const createOperationNode = () => {
      const { operationType } = propsComputed.value.column;
      const { row, index, column } = propsComputed.value;
      if (isArray(operationType)) {
        return operationType.map((item) => {
          if (isString(item)) {
            return createBaseOperation(item) as any;
          } else if (isObject(item)) {
            const {
              type,
              permission,
              label = '',
              extra = {} as any,
              render,
            } = item;
            const isRender = () => {
              return isFunction(permission)
                ? permission()
                : isArray(permission)
                ? handlePermission(permission)
                : true;
            };
            if (isFunction(render)) {
              return render({
                row,
                index,
                column,
              });
            }
            if (['add', 'edit', 'view', 'delete'].includes(type)) {
              return isRender()
                ? createBaseOperation(type as OperationType, label, extra)
                : null;
            } else {
              return isRender()
                ? dynamicButtons(label, {
                    ...extra,
                    onClick: () => handleClickEvents(type),
                  })
                : null;
            }
          } else {
            console.warn('The operationType type is incorrect');
            return null;
          }
        });
      } else if (isFunction(operationType)) {
        return operationType?.({
          row,
          index,
          column,
        });
      }
    };
    /**
     * 基础操作
     */
    const getBaseMap = (label?: string, extra = {}) => {
      const { operationLabel } = propsComputed.value.column;
      const operationTypeLabel = Object.assign(
        {},
        {
          add: '新增',
          edit: '编辑',
          delete: '删除',
          view: '查看',
        },
        operationLabel || {}
      );
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
