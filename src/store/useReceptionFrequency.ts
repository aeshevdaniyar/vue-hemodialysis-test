import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useReceptionFrequency = defineStore("receptionFrequency", () => {
  const receptionFrequency = ref([
    {
      value: 1,
      name: "1 раз в день",
    },
    {
      value: 2,
      name: "2 раза в день",
    },
    {
      value: 3,
      name: "3 раза в день",
    },
  ]);

  const receptionFrequencyList = computed(() => receptionFrequency.value);

  const addReceptionFrequency = (name: string) => {
    const nextValue = receptionFrequency.value[
      receptionFrequency.value.length - 1
    ]?.value
      ? receptionFrequency.value[receptionFrequency.value.length - 1]?.value + 1
      : 1;
    receptionFrequency.value = [
      ...receptionFrequency.value,
      {
        name,
        value: nextValue,
      },
    ];
  };

  const removeReceptionFrequency = (value: number) => {
    receptionFrequency.value = receptionFrequency.value.filter(
      (item) => item.value != value
    );
  };

  return {
    receptionFrequencyList,
    addReceptionFrequency,
    removeReceptionFrequency,
  };
});
