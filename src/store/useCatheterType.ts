import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCatheterType = defineStore("catheterType", () => {
  const catheterTypes = ref([
    {
      name: "Катетер Фолея",
      value: 1,
    },
    {
      name: "Катетер Малеко",
      value: 2,
    },
    {
      name: "Катетер Пеццера",
      value: 3,
    },
    {
      name: "Катетер Тиманна",
      value: 4,
    },
    {
      name: "Катетер Неллатона",
      value: 5,
    },
  ]);

  const catheterTypeList = computed(() => catheterTypes.value);

  const addCatheterType = (name: string) => {
    const nextValue = catheterTypes.value[catheterTypes.value.length - 1]?.value
      ? catheterTypes.value[catheterTypes.value.length - 1]?.value + 1
      : 1;
    catheterTypes.value = [
      ...catheterTypeList.value,
      {
        name,
        value: nextValue,
      },
    ];
  };

  const removeCatheterType = (value: number) => {
    catheterTypes.value = catheterTypes.value.filter(
      (item) => item.value != value
    );
  };

  return {
    catheterTypeList,
    addCatheterType,
    removeCatheterType,
  };
});
