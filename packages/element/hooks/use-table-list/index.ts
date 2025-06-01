import { deepObjectValue, isArray, isEmpty, isFunction, useCloneDeep } from '@eqian/utils-vue';
import { ref, watch, type Ref } from 'vue';
/**
 * @Author: eqian
 * @Date: 2024/5/13
 * @email: 2429120006@qq.com
 * @Description: 数据请求列表
 */
export type Watcher<P> = {
  keys?: (keyof P)[];
  /**
   * watch 是否立即执行属性
   * @default false
   */
  immediate?: boolean;
  /**
   * watch 深度监听属性
   * @default false
   */
  deep?: boolean;
};
export interface IUseTableList<T = any, P = any, D = any> {
  request: {
    /**
     * 请求方法
     */
    api?: (params: P) => Promise<T>;
    /**
     * 请求参数
     */
    params?: P;
    /**
     * 分页键
     * @default pageNum
     */
    pageNumKey?: string;
    /**
     * 分页键
     * @default pageSize
     */
    pageSizeKey?: string;
    /**
     * 接口请求前处理
     */
    handleParams?: (params: P) => P;
    /**
     * 观察
     * 默认监听pageNumKey，pageSizeKe变化触发请求
     * 如果传入空数组，不监听
     */
    watcher?: Watcher<P>;
  };
  /**
   * 响应数据处理
   */
  response?: {
    /**
     * 返回结果的数据列表键
     * @default list
     * @example
     * ```ts
     * // 响应数据为 { data: { list: [] } } 则传递 data.list;
     * ````
     */
    listKey?: string;
    /**
     * 返回结果的数据列表键
     * @default total
     * ```ts
     * // 响应数据为 { data: { list: [], total: 0 } } 则传递 data.total;
     * ```
     */
    totalKey?: string;
    /**
     * 处理是还有数据
     * @param res
     */
    hasPage?: (res: D) => boolean;
    /**
     * 是否追加，主要用于滚动分页
     */
    append?: boolean;
    /**
     * 自定义响应时处理，返回值必须包含listKey，totalKey，如果为空，应返回对应的默认值，即list、total
     * @param res
     */
    responseHandler?: (res: D) => any;
  };
}

/**
 * 表格分页数据请求
 * @param config
 */
export const useTableList = <T = any, P extends object = any, D = any>(
  config: IUseTableList<T, P, D>
) => {
  const { params: requestParams = {} as P, watcher } = config.request;
  const cloneConfig = useCloneDeep(config);
  const {
    pageNumKey = 'pageNum',
    pageSizeKey = 'pageSize',
    api,
    handleParams
  } = cloneConfig.request;
  const {
    listKey = 'list',
    totalKey = 'total',
    responseHandler,
    hasPage,
    append
  } = cloneConfig.response || {};
  const tableData = ref<T[]>([]);
  const tableTotal = ref(0);
  const isExplicitly = ref(false);
  const tableLoading = ref(false);
  const requestApi = ref(api);
  // 是否最后一页，依据返回数据是否小于页数,如果没传页数，永远为false
  const isLastPage = ref(false);
  const params = ref(useCloneDeep(requestParams) as P) as Ref<P>;
  const handleSearch = async (pageNum?: number) => {
    if (!requestApi.value) return;
    if (isFunction(handleParams)) {
      params.value = handleParams.call(null, useCloneDeep(params.value) as P);
    }
    if (pageNum && pageNumKey in params.value) {
      params.value[pageNumKey] = pageNum;
    }
    try {
      tableLoading.value = true;
      let res = (await requestApi.value.call(null, params.value)) as D;
      if (isFunction(responseHandler)) {
        res = responseHandler.call(null, res);
      }
      const list = deepObjectValue(res, listKey) ?? [];
      if (append) {
        tableData.value = tableData.value.concat(...list);
      } else {
        tableData.value = list;
      }
      tableTotal.value = deepObjectValue(res, totalKey) ?? 0;
      if (params.value[pageSizeKey] || isFunction(hasPage)) {
        isLastPage.value = isFunction(hasPage)
          ? hasPage.call(null, res)
          : tableData?.value.length < params.value[pageSizeKey];
      }
    } catch (e) {
      return Promise.reject(e);
    } finally {
      tableLoading.value = false;
      isExplicitly.value = false;
    }
    return Promise.resolve();
  };
  /**
   * 重置查询参数
   */
  const handleReset = () => {
    params.value = useCloneDeep(requestParams);
    isExplicitly.value = true;
    if (append) {
      tableData.value = [];
    }
    return handleSearch();
  };
  /**
   * 切换分页大小 刷新列表
   */
  const handleSizeChange = (pageSize: number) => {
    if (pageSizeKey in (params.value as any)) {
      (params.value as P)[pageSizeKey] = pageSize;
    }
    isExplicitly.value = true;
    return handleSearch(1);
  };
  /**
   * 切换页码 刷新列表
   */
  const handleCurrentChange = (pageNum: number) => {
    isExplicitly.value = true;
    return handleSearch(pageNum);
  };
  const { keys, deep = false, immediate = false } = watcher ?? ({} as any);
  const updateApi = (api: (params: P) => Promise<T>) => {
    requestApi.value = api;
  };
  const { stop } = watch(
    keys === undefined
      ? [() => params.value[pageNumKey], () => params.value[pageSizeKey]]
      : keys.map((key: any) => () => params.value[key]),
    async () => {
      if (!isExplicitly.value) {
        await handleSearch();
      }
    },
    {
      immediate,
      deep
    }
  );
  if ((isArray(keys) && isEmpty(keys)) || watcher === undefined) {
    stop();
  }
  return {
    params,
    tableData,
    tableTotal,
    tableLoading,
    isLastPage,
    updateApi,
    handleSearch,
    handleReset,
    handleSizeChange,
    handleCurrentChange
  };
};
