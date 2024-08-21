import { computed } from 'vue'

/**
 * 从props获取计算属性参数
 * @param props
 */
export const useProps = <T extends object>(props: T) => {
  return computed(() => props)
}
