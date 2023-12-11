import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCatheter = defineStore("catheter", () => {
  const catheters = ref([
    {
      name: "Катетер 1",
      value: 1,
    },
    {
      name: "Катетер 2 ",
      value: 2,
    },
    {
      name: "Катетер 3",
      value: 3,
    },
  ]);

  const catheterList = computed(() => catheters.value);

  const addCatheter = (name: string) => {
    const nextValue = catheters.value[catheters.value.length - 1]?.value
      ? catheters.value[catheters.value.length - 1]?.value + 1
      : 1;
    catheters.value = [
      ...catheters.value,
      {
        name,
        value: nextValue,
      },
    ];
  };

  const removeCatheter = (value: number) => {
    catheters.value = catheters.value.filter((item) => item.value != value);
  };

  return {
    catheterList,
    removeCatheter,
    addCatheter,
  };
});
