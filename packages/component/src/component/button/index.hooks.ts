import { computed, inject } from 'vue';

export default function useProps(props: any) {
  const size = computed(() => {
    const formContext = inject('EpForm', {} as any);

    return props.size || formContext.size || 'md';
  });

  return { size };
}
