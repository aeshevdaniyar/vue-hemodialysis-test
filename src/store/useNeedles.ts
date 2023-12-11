import { defineStore } from "pinia";
import { computed, ref } from "vue";
export const useNeedles = defineStore("needles", () => {
  const needles = ref([
    {
      value: 1,
      name: "Игла №1",
    },
    {
      value: 2,
      name: "Игла №2",
    },
  ]);

  const needleList = computed(() => needles.value);

  const addNeedle = (name: string) => {
    const nextValue = needles.value[needles.value.length - 1]?.value
      ? needles.value[needles.value.length - 1]?.value + 1
      : 1;
    needles.value = [
      ...needleList.value,
      {
        name,
        value: nextValue,
      },
    ];
  };

  const removeNeedle = (value: number) => {
    needles.value = needles.value.filter((item) => item.value != value);
  };

  return {
    needleList,
    addNeedle,
    removeNeedle,
  };
});
