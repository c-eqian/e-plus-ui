import { reactive, toRefs, unref, type ComputedRef } from 'vue';
import type { FormItemsSchema, FormSchema } from '../type';
// 计算渲染表单项
export function useItemsProps(items: any, formProps: ComputedRef<FormSchema>): any {
  let itemsCaches: FormItemsSchema<any>[] = [];
  // 如果不是搜索模式，直接全部返回
  if (!unref(formProps).isSearch) {
    return toRefs(
      reactive({
        configItems: items,
        itemsCaches,
        needToggle: false,
        renderItems: items
      })
    );
  }
  // 根据columns需要渲染几行
  const cols = unref(formProps).columns || 3;
  const rows = unref(formProps).rows || 1;
  // 计算行列总数
  const renderTotal = cols * rows;
  // 如果items长度小于 renderTotal，直接返回，否则需要渲染的数目大于行列总数 需要显示展开按钮
  if (items.value.length <= renderTotal) {
    return toRefs(
      reactive({
        configItems: items.value,
        itemsCaches,
        needToggle: false,
        renderItems: items.value
      })
    );
  }
  // 根据 rows、cols确定需要渲染项数
  const nessItems = renderTotal > items.value.length ? items.value.length : renderTotal;
  // 开始截取缓存索引
  itemsCaches = items.value.slice(0, nessItems);

  return toRefs(
    reactive({
      configItems: items.value,
      itemsCaches,
      needToggle: true,
      renderItems: itemsCaches
    })
  );
}
