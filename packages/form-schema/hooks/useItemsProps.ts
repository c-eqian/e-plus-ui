import { reactive, Ref, toRefs } from 'vue';
import type { FormItemsSchema } from '../type';
// 计算渲染表单项
export function useItemsProps(
  items: Ref<FormItemsSchema[]>,
  isSearch: boolean | number | undefined,
  columns: number | undefined
) {
  let itemsCaches: FormItemsSchema<any>[] = [];
  // 如果不是搜索模式，直接全部返回
  if (!isSearch) {
    return toRefs(
      reactive({
        configItems: items,
        itemsCaches,
        needToggle: false,
        renderItems: items,
      })
    );
  }
  // 根据columns需要渲染几行
  const cols = columns || 1;
  const lines = +isSearch;
  // 如果items长度小于 columns，直接返回
  if (items.value.length <= cols) {
    return toRefs(
      reactive({
        configItems: items.value,
        itemsCaches,
        needToggle: false,
        renderItems: items.value,
      })
    );
  }
  // 根据 lines、cols确定需要渲染项数
  const nessItems =
    lines * cols > items.value.length ? items.value.length : lines * cols;
  // 开始截取缓存索引
  itemsCaches = items.value.slice(0, nessItems);

  return toRefs(
    reactive({
      configItems: items.value,
      itemsCaches,
      needToggle: true,
      renderItems: itemsCaches,
    })
  );
}
