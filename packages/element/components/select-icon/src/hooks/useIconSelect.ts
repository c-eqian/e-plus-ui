import { ref } from 'vue';
export const useIconSelect = () => {
  const visible = ref(false);
  const toggleVisible = (v: boolean) => {
    visible.value = v;
  };
  return {
    visible,
    toggleVisible
  };
};
