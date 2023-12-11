import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useNeedleType = defineStore("needleType", () => {
  const needleTypes = ref([
    {
      value: 1,
      name: "Венозные",
    },
    {
      value: 2,
      name: "Артериальные",
    },
  ]);

  const needleTypeList = computed(() => needleTypes.value);

  const addNeedleType = (name: string) => {
    const nextValue = needleTypes.value[needleTypes.value.length - 1]?.value
      ? needleTypes.value[needleTypes.value.length - 1]?.value + 1
      : 1;
    needleTypes.value = [
      ...needleTypes.value,
      {
        name,
        value: nextValue,
      },
    ];
  };

  const removeNeedleType = (value: number) => {
    needleTypes.value = needleTypes.value.filter((item) => item.value != value);
  };

  return {
    needleTypeList,
    addNeedleType,
    removeNeedleType,
  };
});
