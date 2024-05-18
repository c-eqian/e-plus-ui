import { ElMessage } from "element-plus";

export const $message = {
  success(text: string) {
    ElMessage({
      message: text,
      type: 'success',
    })
  },
  warning(text: string) {
    ElMessage({
      message: text,
      type: 'warning',
    })
  },
  error(text: string) {
    ElMessage({
      message: text,
      type: 'error',
    })
  },
  info(text: string) {
    ElMessage({
      message: text,
      type: 'info',
    })
  },
}
